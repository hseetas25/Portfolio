import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  webAppProjects: Array<any>;
  mlProjects: Array<any>;
  cnOsProjects: Array<any>;
  basicProjects: Array<any>;
  topics: Array<any>;
  mainData: Array<any>;
  search: any = '';
  searchWord: any = '';
  tableidx: number;

  ngOnInit(): void {

  }

  constructor(
  ) {
    this.topics = ['Web Application Projects', 'Machine Learning Projects', 'CN-OS Projects', 'Programming Language Based Projects'];
    this.webAppProjects = [];
    this.mlProjects = [];
    this.cnOsProjects = [],
    this.basicProjects = [];
    this.mainData = [];
    this.tableidx = 0;
    this.getData();
  }

  getTopic(event: any) {
    this.tableidx = this.topics.indexOf(event.target.value);
  }

  getData() {
    this.webAppProjects = [{"projectName": "Employee Leave Notify", "link": "https://leave-notify.web.app/","type": "Deployed Link", "description": "This web application is designed for the employees to notify about their leaves. Whenever an employee applies for a leave, their teammates can get notified about the leave.", "technology": ["Angular", "Node", "Firebase", "Firebase Cloud Hosting"] },
                           {"projectName": "Notes Application", "link": "https://hackforet.web.app","type": "Deployed Link", "description": "A web application with beautiful UI where a teacher can upload Notes and share the notes to students. End users have separate login pages.", "technology": ["Angular", "Node", "Firebase", "Firebase Cloud Hosting"] },
                           {"projectName": "Cart Management", "link": "https://github.com/hseetas25/SpringBoot-Angular", "type": "Code", "description": "A simple web application where you can know the mechanism of Cart Management in real time from an Admin and User Mode Perspective.", "technology": ["Angular", "Node", "Java", "SpringBoot", "SQL"] },
                           {"projectName": "Contact Management", "link": "https://github.com/hseetas25/Contact-Management-in-Angular", "type": "Code", "description": "A simple web application where you can manage the contacts.","technology": ["Angular", "Node"]},
                           {"projectName": "Search Mechanism in Web Application", "link": "https://github.com/hseetas25/Search-in-Angular", "type": "Code", "description": "A simple web application where you can know the mechanism of searching in Web Applications.", "technology": ["Angular", "Node"] } ];
    this.mlProjects =[{"projectName": "Liver Tumor Risk Prediction using Ensembling", "link": "https://github.com/hseetas25/Liver-Risk-ML-Algorithm","type": "Code", "description": "A Machine Learning Algorithm developed using Ensembling methods to predict the Liver Tumor based on the lab report data.", "technology": ["Python", "Machine Learning", "Ensembling", "Flask"] },
                        {"projectName": "Car Price Prediction using ML Models", "link": "https://github.com/hseetas25/Car-Predictor-Flask-ML-Project","type": "Code", "description": "A Machine Learning Algorithm developed using ML models like Linear Regression and Random Forest to predict the car price based on the previous trained car data.", "technology": ["Python", "Machine Learning", "Linear Regression", "Random Forest"] }];
    this.cnOsProjects =[{"projectName": "Multi Casting with Computer Networks", "link": "https://github.com/hseetas25/CN-Multi-Casting","type": "Code", "description": "A Computer Network based project where multiple users can be connected with in a network and can be able to send & receive messages.", "technology": ["Java", "Multi Casting", "Java Sockets", "Computer Networks"] },
                        {"projectName": "Roller Coaster with Operating Systems", "link": "https://github.com/hseetas25/OS-RollerCoaster","type": "Code", "description": "An Operating System concept based project where it addresses the Mutual Exclusion problem using passengers riding in a Roller Coaster.", "technology": ["Java", "Mutual Exclusion", "Threads", "Synchronization" ] }];
    this.basicProjects =[{"projectName": "Phone Book using Java JDBC & SQL", "link": "https://github.com/hseetas25/Phone-Book-Java-JDBC-MySQL","type": "Code", "description": "A simple Java project where a user can manage the contacts", "technology": ["Java", "SQL"] },
                        {"projectName": "Learning Management System using OOPS in C++", "link": "https://github.com/hseetas25/LMS-CPP-OOPS","type": "Code", "description": "A simple CPP project which illustrates a Learning Management System.", "technology": ["C++", "OOPS"] }];

    this.mainData.push(this.webAppProjects, this.mlProjects, this.cnOsProjects, this.basicProjects);
  }
  

}
