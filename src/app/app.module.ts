import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ListSnapshotchangesComponent } from './components/list-snapshotchanges/list-snapshotchanges.component';

import { FirestoreService } from 'src/app/services/firestore.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormPersonComponent } from './components/form-person/form-person.component';

import { ReactiveFormsModule } from '@angular/forms'

import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ListValuechangesComponent } from './components/list-valuechanges/list-valuechanges.component';


@NgModule({
  declarations: [
    AppComponent,
    ListSnapshotchangesComponent,
    FormPersonComponent,
    ListValuechangesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    FirestoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
