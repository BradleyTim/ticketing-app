import { Component, OnInit } from '@angular/core';
import { TicketsService } from './tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
  providers: [TicketsService]
})
export class TicketsComponent implements OnInit {

  tickets: any[] = [];

  constructor(private ticketService: TicketsService) { }

  ngOnInit() {
    this.tickets = this.ticketService.getTickets();
  }

}
