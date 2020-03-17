import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { ConceptsComponent } from './concepts/concepts.component';

// config the routes
const routes: Routes = [
  { path: '', component: HomeComponent },  // localhost:4200
  { path: 'concepts', component: ConceptsComponent}, // localhost:4200/concepts
  { path: 'contacts', component: ContactsComponent},   // localhost:4200/contacts
  { path: 'about', component: AboutComponent }   // localhost:4200/about
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // registering the routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
