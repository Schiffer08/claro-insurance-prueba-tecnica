import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export class Custom {
  abbreviation: any;
  conference: any;
  comments: any;
  nameteam: any;
  city: any;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public CustomVar: Custom = new Custom();

  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public isEditable = false;
  public position: any;

  public dataform: Array<Custom> = [];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      heightInches: ['', [Validators.maxLength(2)]],
      heightFeet: ['', [Validators.maxLength(2)]],
      weight: ['', [Validators.maxLength(2)]],
      position: ['', Validators.required],
      date: ['', Validators.required],
      age: [''],
      comments: ['', Validators.required],
      ageposition: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      abbreviation: ['', Validators.required],
      conference: ['', Validators.required],
      comments: ['', Validators.required],
      nameTeam: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  changePosition(e: any) {
    this.position = e.target.value;
  }

  addDataForm(){
    let customObj = new Custom();
    customObj.abbreviation = this.secondFormGroup.controls['abbreviation'].get;
    customObj.conference = this.secondFormGroup.controls['conference'].get;
    customObj.comments = this.secondFormGroup.controls['comments'].get;
    customObj.nameteam = this.secondFormGroup.controls['nameTeam'].get;
    customObj.city = this.secondFormGroup.controls['city'].get;
    console.log("DATA 1", customObj.abbreviation)
    console.log("DATA 2", customObj.conference)
    console.log("DATA 3", customObj.comments)
    console.log("DATA 4", customObj.nameteam)
    console.log("DATA 5", customObj.city)
    this.dataform.push(customObj);
    console.log("ARRAY", this.dataform);
  }
}
