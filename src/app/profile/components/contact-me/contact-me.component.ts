import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Request } from '../../models';

import { Firestore } from '@angular/fire/firestore';
import { doc, setDoc } from 'firebase/firestore';

import { ToastrService } from 'ngx-toastr';

import {v4 as uuidv4} from 'uuid';

import emailjs  from '@emailjs/browser';



@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  isFormSubmitted: boolean;
  contactUsForm: FormGroup;
  email: string;
  validationMessages = {
      email: [
          { type: 'required', message: 'Email is required' },
          { type: 'pattern', message: 'Enter a valid email address' }
        ],
      name: [
          { type: 'required', message: 'Name is required'}
      ],
      subject: [
        { type: 'required', message: 'Subject is required'}
      ],
      message: [
        { type: 'required', message: 'Message is required'}
      ]
    };
  validationPattern = {
    email: new RegExp(`^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$`)
  };

  constructor(
    private formBuilder: FormBuilder,
    private firestore: Firestore,
    private toastr: ToastrService
  ) {
      this.isFormSubmitted = false;
      this.email = 'balagasateeshspis@gmail.com';
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.contactUsForm = this.formBuilder.group({
      name: new FormControl(
        '', [Validators.required]
      ),
      email: new FormControl(
        '', [Validators.required, Validators.pattern(this.validationPattern.email)]
      ),
      subject: new FormControl(
        '', [Validators.required]
      ),
      message: new FormControl(
        '', [Validators.required]
      )
    })
  }

  async submitContactUsForm(): Promise<void> {
    if(this.contactUsForm.invalid) {
      await this.delay(2000);
      this.toastr.warning('required details', 'Fill all the');
      return;
    }

    if(this.contactUsForm.valid) {
      const id: string = this.contactUsForm.controls['email'].value + uuidv4();
      var requestData: Request = JSON.parse(JSON.stringify(this.contactUsForm.value)) as Request;
      requestData.date = new Date().toDateString();
      await setDoc(doc(this.firestore, 'requests/', `${id}`), requestData);
      this.toastr.success('Successful', 'Request Submission');
      emailjs.init({publicKey: "6TKr2Z70Um5TlafEA"});
      emailjs.send('service_bs45','profile_bs45');
      await this.delay(2000);
      this.contactUsForm.reset();
    }
  }
  
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
