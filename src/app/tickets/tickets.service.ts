import { Injectable } from '@angular/core';

@Injectable()
export class TicketsService {

  constructor() { }

  getTickets(): any[] {
    return [
      {
        id: 1,
        name: 'ticket one',
        email: 'example@email.com',
        phone: '55555555',
        priority: 'high',
        subject: 'complaint',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        department: 'marketing',
        createdBy: 'someone'
      },
      {
        id: 2,
        name: 'ticket two',
        email: 'example@email.com',
        phone: '55555555',
        priority: 'high',
        subject: 'complaint',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        department: 'marketing',
        createdBy: 'someone'
      },
      {
        id: 2,
        name: 'ticket three',
        email: 'example@email.com',
        phone: '55555555',
        priority: 'high',
        subject: 'complaint',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        department: 'marketing',
        createdBy: 'someone'
      },

    ]
  }

}
