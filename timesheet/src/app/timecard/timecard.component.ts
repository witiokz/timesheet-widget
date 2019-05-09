import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { DateEvent } from '../models/dateevent';

@Component({
  selector: 'app-timecard',
  templateUrl: './timecard.component.html',
  styleUrls: ['./timecard.component.css']
})
export class TimecardComponent implements OnInit {

  constructor(private eventsService:EventsService) { }

  events: DateEvent[];

  ngOnInit() {
    this.eventsService.getEvents().subscribe(data => {
      this.events = this.eventsService.processData(data);
  });
  }
}
