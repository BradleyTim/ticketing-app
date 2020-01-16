import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { TicketsService } from '../shared/tickets.service';

@Component({
  selector: 'app-ticketdetail',
  templateUrl: './ticketdetail.component.html',
  styleUrls: ['./ticketdetail.component.css'],
  providers: [TicketsService]
})
export class TicketdetailComponent implements OnInit {

  ticket: any;

  constructor(private route: ActivatedRoute, private router: Router, private ticketService: TicketsService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    this.ticketService.getTickets().filter(ticket => {
      return ticket.id == id ? (this.ticket = ticket) : "";
    });
    console.log(id);
  }

  onBack(): void {
    this.router.navigate(["/tickets"]);
  }

}
