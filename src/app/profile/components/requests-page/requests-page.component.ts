import { Component } from '@angular/core';

import { Firestore } from '@angular/fire/firestore';
import { collection,getDocs } from 'firebase/firestore';

@Component({
  selector: 'app-requests-page',
  templateUrl: './requests-page.component.html',
  styleUrl: './requests-page.component.scss'
})
export class RequestsPageComponent {

  requests: Array<any>;
  isLoggedIn: boolean;
  search: any = '';
  searchWord: any = '';

  ngOnInit(): void {
    this.getRequestsData();
  }

  constructor(
    private firestore: Firestore
  ) {
    this.requests = [],
    this.isLoggedIn = false;
    this.loggedIn();
  }

  async getRequestsData(): Promise<void> {
    const requestData: any = await getDocs(collection(this.firestore, 'requests'));
    requestData.forEach((request: any) => {
      if(request.data()) {
          this.requests.push(request.data());
      }
    });
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  loggedIn(): void {
    if(localStorage.getItem('loginMessage') === 'success') {
      this.isLoggedIn = true;
    }
  }


}
