import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      heightInches: [''],
      heightFeet: ['', Validators.required],
      weight: ['', Validators.required],
      position: ['', Validators.required],
      date: ['', Validators.required],
      age: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      abbreviation: ['', Validators.required],
      conference: ['', Validators.required],
      comments: ['', Validators.required],
      nameTeam: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

}
