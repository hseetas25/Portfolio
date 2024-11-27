import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {

  isLoggedIn: boolean;

  ngOnInit(): void {
    this.loggedIn();
  }

  constructor(
    private router: Router
    ) {
    this.isLoggedIn = false;
  }

  loggedIn(): void {
    if(localStorage.getItem('loginMessage') === "success") {
      this.isLoggedIn = true;
    }
  }

  async logout(): Promise<void> {
    localStorage.clear();
    this.router.navigate(['home']);
    await this.delay(100);
    window.location.reload();
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }


}
