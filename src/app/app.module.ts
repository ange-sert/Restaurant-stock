import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//firestore
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeefStew1PiecwListComponent } from './beef-stew1-piecw-list/beef-stew1-piecw-list.component';
import { MainComponent } from './stock/main/main.component';
import { RecipeMainComponent } from './recipe/recipe-main/recipe-main.component';
import { RecipeDishComponent } from './recipe/recipe-dish/recipe-dish.component';

@NgModule({
  declarations: [
  AppComponent, 
  BeefStew1PiecwListComponent, 
  MainComponent,  
  RecipeMainComponent, RecipeDishComponent
  ],
  imports: [
  BrowserModule,
  BrowserAnimationsModule, // required animations module
  ToastrModule.forRoot(), // ToastrModule added
  ReactiveFormsModule,
  FormsModule,
  AppRoutingModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireDatabaseModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
