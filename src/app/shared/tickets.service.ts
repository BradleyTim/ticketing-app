import { Injectable } from '@angular/core';
import { Ticket } from './ticket';
import { rootRenderNodes } from '@angular/core/src/view';

@Injectable()
export class TicketsService {

  constructor() { }

  getTickets(): any[] {
    console.log(localStorage.getItem('tickets'));
    return localStorage.getItem('tickets') !== null ? JSON.parse(localStorage.getItem('tickets')) : [];
  }

  setTickets(ticket: any): any[] {
    console.log(this.getTickets());
    localStorage.setItem('tickets', JSON.stringify(this.getTickets().push(ticket)));
    return this.getTickets();
  }

}
