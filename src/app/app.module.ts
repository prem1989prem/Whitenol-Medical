import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import{ FormsModule } from '@angular/forms'



import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DepartmentComponent } from './department/department.component';
import { ContactComponent } from './contact/contact.component';
import { AppointmentComponent } from './appointment/appointment.component';






@NgModule({
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot([
 
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'doctors',
        component: DoctorsComponent
      },
      {
        path: 'department',
        component: DepartmentComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'appointment',
        component: AppointmentComponent
      }
    ])
    
  ],
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    DoctorsComponent,
    DepartmentComponent,
    ContactComponent,
    AppointmentComponent
  ],

  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
