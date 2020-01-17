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

  ticket = {
    id: 0,
    name: 'ticket one',
    email: 'example@email.com',
    phone: '55555555',
    priority: 'high',
    subject: 'complaint',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    department: 'marketing',
    createdBy: 'someone'
  };
  
  tickets: any[];
  priorities: string[] = ['low', 'high', 'medium'];

  constructor(private ticketService: TicketsService) { }

  ngOnInit() {
    this.tickets = this.ticketService.getTickets();
  }

  onSubmit(): void {
    // console.log(this.form);
    let id: number = 0;
    id = this.tickets.length + 1;
    const {name, email, phone, priority, subject, description, department, createdBy} = this.form.value;
    this.ticketService.setTickets({ id, name, email, phone, priority, subject, description, department, createdBy })
  }

}
