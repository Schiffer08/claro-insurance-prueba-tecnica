import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, Validators, FormControl, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public username = "Orlando";
  public password = "123456";
  public checked: boolean = false;

  constructor(private fb: FormBuilder,
              private router: Router,) { }

  ngOnInit() {
    this.createFormLogin();
  }

  private createFormLogin() {
    this.formLogin = this.fb.group({
      username: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/) ])),
      password: new FormControl('', Validators.compose([Validators.required ])),
    });
  }

  userLogin(formLogin: NgForm){
    if (formLogin.valid) {
      this.router.navigate(["/home"]);
      alert("DATOS CORRECTOS");
    } else {
      alert("DATOS INCORRECTOS");
    }
  }
  

}
