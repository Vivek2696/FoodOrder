import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  submitted: boolean;

  constructor() {
    this.submitted = false;
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    //test the email and send the appropriate response
    this.submitted = true;
    if(form.invalid){
      return;
    }
    console.log(form.controls.email.value);
  }

}
