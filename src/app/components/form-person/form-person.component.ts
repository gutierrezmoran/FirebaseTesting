import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css']
})
export class FormPersonComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private firestoreService: FirestoreService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  addPerson() {
    this.firestoreService.addPerson({
      dni: this.dni.value,
      firstname: this.firstname.value,
      lastname: this.lastname.value
    } as Person).then(()=> {
      console.log("Success"); 
    }).catch(e => {
      console.log("Error", e);
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      dni: [''],
      firstname: [''],
      lastname: ['']
    });
  }

  get dni() {
    return this.form.get('dni');
  }

  get firstname() {
    return this.form.get('firstname');
  }
  
  get lastname() {
    return this.form.get('lastname');
  }

}
