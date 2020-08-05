import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private peopleCollection: AngularFirestoreCollection<Person>;
  private personDocument: AngularFirestoreDocument<Person>;

  constructor(private readonly afs: AngularFirestore) { }

  addPerson(data: Person) {
    this.peopleCollection = this.afs.collection<Person>('people');
    return this.peopleCollection.add(data);
  }

  getAllPersonSnapshotChanges() {
    this.peopleCollection = this.afs.collection<Person>('people');
    // .snapshotChanges() returns a DocumentChangeAction[], which contains
    // a lot of information about "what happened" with each change. If you want to
    // get the data and the id use the map operator.
    return this.peopleCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Person;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getAllPersonValueChanges() {
    this.peopleCollection = this.afs.collection<Person>('people');
    // .valueChanges() is simple. It just returns the 
    // JSON data without metadata. If you need the 
    // doc.id() in the value you must persist it your self
    // or use .snapshotChanges() instead. See the addItem()
    // method below for how to persist the id with
    // valueChanges()
    return this.peopleCollection.valueChanges();
  }

  deletePerson(id: string) {
    this.personDocument = this.afs.doc<Person>('people/' + id);
    return this.personDocument.delete();
  }
}
