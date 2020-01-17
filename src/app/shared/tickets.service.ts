import { Injectable } from '@angular/core';
import { Ticket } from './ticket';
import { rootRenderNodes } from '@angular/core/src/view';

@Injectable()
export class TicketsService {

  tickets: any[] = [];

  constructor() { }

  getTickets(): any[] {
    if (localStorage.getItem('tickets') == null) {
      return this.tickets;
    } else {
      return this.tickets = JSON.parse(localStorage.getItem('tickets'));
    }
  }

  setTickets(ticket: any): any[] {
    localStorage.setItem('tickets', JSON.stringify([ticket, ...this.tickets]));
    return this.tickets;
  }

}
