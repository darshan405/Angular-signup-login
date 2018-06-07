import { Component, OnInit } from '@angular/core';
import {  Router  } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { SimpleServiceService } from '../simple-service.service';

import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
	values: any = [];
	valuesLogIn: any = [];
  	emailLogIn:String;
  	passwordLogIn:String;
  constructor(private router: Router, private SimpleServiceService: SimpleServiceService) { }

 onSubmit(form) { 
  if(form.valid) {
    // this.valuesLogIn.push({emailLogIn: this.emailLogIn,passwordLogIn: this.passwordLogIn});
    // form.reset()
    this.values.forEach(value => {
      if ((value.email == this.emailLogIn) && (value.password == this.passwordLogIn)){
        // if((value.password == this.passwordLogIn)){
          // this.router.navigate['/']
        console.log('success')
       }
        else {
          console.log('error')
        }
        // console.log('error')
      // }
    // })
  })
  }
}

  ngOnInit() {
  	this.values = this.SimpleServiceService.getFromService(this.values);
  }
mySaveLogIn(){
    this.SimpleServiceService.saveToServices(this.valuesLogIn);
  }
}
