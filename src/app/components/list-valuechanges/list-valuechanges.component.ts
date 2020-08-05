import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-list-valuechanges',
  templateUrl: './list-valuechanges.component.html',
  styleUrls: ['./list-valuechanges.component.css']
})
export class ListValuechangesComponent implements OnInit {
  people: Array<Person>;

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.people = [];
    this.getAllPersonValueChanges();
  }

  getAllPersonValueChanges() {
    this.firestoreService.getAllPersonValueChanges().subscribe(people => {
      this.people = people;
    })
  }

}
