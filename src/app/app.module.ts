import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TicketsComponent } from './tickets/tickets.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TicketdetailComponent } from './detail/ticketdetail.component';
import { TicketformComponent } from './ticketform/ticketform.component';

const appRoutes: Routes = [
  { path: 'tickets/:id', component: TicketdetailComponent },
  { path: 'create-ticket', component: TicketformComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: LandingpageComponent},
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
    TicketdetailComponent,
    TicketformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
