import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { Firestore } from '@angular/fire/firestore';
import { getDoc, doc } from 'firebase/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  isFormSubmitted: boolean;
  loginForm: FormGroup;
  isLoggedIn: boolean;
  validationMessages = {
      email: [
          { type: 'required', message: 'Email is required.' },
          { type: 'pattern', message: 'Enter a valid email address.' }
        ],
      password: [
          { type: 'required', message: 'Password is required.'}
      ]
    };
  validationPattern = {
    email: new RegExp(`^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$`)
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private firestore: Firestore,
    private toastr: ToastrService
  ) {
      this.isFormSubmitted = false;
      this.isLoggedIn = false;
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        '', [Validators.required, Validators.pattern(this.validationPattern.email)]
      ),
      password: new FormControl(
        '', [Validators.required]
      )
    })
  }

  async submitLoginForm(): Promise<void> {
    if(this.loginForm.invalid) {
      console.log("Invalid")
      this.toastr.warning('Fill the details', '', { positionClass: 'toast-bottom-right' });
      return;
    }
    if(this.loginForm.valid) {
      const id: string = this.loginForm.controls['email'].value;
      const docRef = doc(this.firestore, 'webAppAdminUsers/'+ `${id}`);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()) {
          if(docSnap.data()['password'] == this.loginForm.controls['password'].value ) {
            this.toastr.success('Successful', 'Login');
            localStorage.setItem('userKey', id);
            localStorage.setItem('loginMessage', 'success');
            this.loggedIn();
            this.router.navigate(['requests-page']);
            await this.delay(100);
            window.location.reload();
          }
          else {
            this.toastr.error('Unsuccessful', 'Login');
            await this.delay(2000);
            window.location.reload();
          }
        }
        else {
          this.toastr.error('Unsuccessful', 'Login');
          await this.delay(2000);
          window.location.reload();
        }
    }
  }

  loggedIn(): void {
    if(localStorage.getItem('loginMessage') === 'success') {
      this.isLoggedIn = true;
    }
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
