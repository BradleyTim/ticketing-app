import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

import { TicketsService } from '../shared/tickets.service';
import { Ticket } from '../shared/ticket';

@Component({
  selector: 'app-ticketform',
  templateUrl: './ticketform.component.html',
  styleUrls: ['./ticketform.component.css'],
  providers: [TicketsService]
})
export class TicketformComponent implements OnInit {

  @ViewChild('ticketForm') form: NgForm;

  ticket = new Ticket(
    0,
    'ticket one',
    'example@email.com',
    '55555555',
    'high',
    'complaint',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'marketing',
    'someone'
  );
  
  tickets: any[];
  priorities: string[] = ['low', 'high', 'medium'];

  constructor(private ticketService: TicketsService) { }

  ngOnInit() {
    this.tickets = this.ticketService.getTickets();
  }

  onSubmit(): any[] {
    // console.log(this.form);
    let id: number = 0;
    id = this.tickets.length + 1;
    const {name, email, phone, priority, subject, description, department, createdBy} = this.form.value;
    // let list = [{id, name, email, phone, priority, subject, description, department, createdBy},...this.tickets];
    // console.log(list);
    // return this.tickets = list;
    return this.tickets = this.ticketService.setTickets({ id, name, email, phone, priority, subject, description, department, createdBy })
  }

}
