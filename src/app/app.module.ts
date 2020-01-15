import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TicketsComponent } from './tickets/tickets.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TicketdetailComponent } from './detail/ticketdetail.component';

const appRoutes: Routes = [
  { path: 'tickets/:id', component: TicketdetailComponent },
  {path: 'tickets', component: TicketsComponent },
  {path: 'about', component: AboutComponent },
  {path: '', component: LandingpageComponent},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TicketsComponent,
    LandingpageComponent,
    AboutComponent,
    PagenotfoundComponent,
    TicketdetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
