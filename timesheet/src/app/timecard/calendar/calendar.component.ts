import { Component, OnInit, Input } from '@angular/core';
import { DateService } from 'src/app/services/date.service';
import { EventsService } from 'src/app/services/events.service';
import { DateEvent } from 'src/app/models/dateevent';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  currentDate: Date;
  yearMonth: String;
  headerDate: String;

  @Input()
  events: DateEvent[] = [];

  constructor(private dateService: DateService,
    private eventsService:EventsService ) { }

  ngOnInit() {
    this.eventsService.change.subscribe((event: DateEvent) => {
      this.currentDate = event.date;
      this.headerDate = this.dateService.getDateAndDayName(this.currentDate);
      this.yearMonth = this.dateService.getCurrentYearMonth(this.currentDate);
    });
  }

  goToday() {
    const todayDate = this.dateService.getTodayDate();
    const today = this.eventsService.getEventByDate(this.events, todayDate);
    this.eventsService.daySelected(today);
  }
}
