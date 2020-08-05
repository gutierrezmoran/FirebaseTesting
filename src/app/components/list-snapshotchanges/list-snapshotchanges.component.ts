import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Person } from '../../models/person';

import { FirestoreService } from 'src/app/services/firestore.service';
import { SimpleSnackBar, MatSnackBarRef, MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-snapshotchanges',
  templateUrl: './list-snapshotchanges.component.html',
  styleUrls: ['./list-snapshotchanges.component.css']
})
export class ListSnapshotchangesComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  snackBarRef: MatSnackBarRef<String>;
  people: Array<Person>;

  constructor(private firestoreService: FirestoreService,
              private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.people = [];
    this.getAllPersonSnapshotChanges();
  }

  getAllPersonSnapshotChanges() {
    this.firestoreService.getAllPersonSnapshotChanges().subscribe(people => {
      this.people = people;
    })
  }

  deletePerson(id: string) {
    this.firestoreService.deletePerson(id);
    this.snackBar.open('Person with id:' + id + ' deleted successfully.', null, {
      duration: 4000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['successfully-snackbar']
    });
  }

}
