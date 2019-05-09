import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalendarEvent } from '../models/calendarevent';
import { DateEvent } from '../models/dateevent';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient, 
    private dateService: DateService) { }

  @Output() 
  change: EventEmitter<DateEvent> = new EventEmitter();

  public getEvents(): Observable<CalendarEvent[]> {
    return this.http.get<CalendarEvent[]>("./assets/events.json");
  }

  public getEventByDate(events: DateEvent[], date: Date): DateEvent{
    return events.find(i => this.dateService.getDate(i.date) ==
                            this.dateService.getDate(date)
                        );
  }

  public processData(events: CalendarEvent[], date?: Date): DateEvent[]{
    
    let processedEvents: DateEvent[] = [];

    const endDate = this.dateService.getLastDate();
    const startDate = this.dateService.addDays(endDate, -6);

    let currentDate = startDate;

    while(currentDate <= endDate){
      const data = events.filter(i => this.dateService.getDate(i.date)  == 
                                      this.dateService.getDate(currentDate));

      let currentFormatedDate = this.dateService.formatDate(currentDate);
      let dateEvent = {date: currentFormatedDate, 
                        events: [] as CalendarEvent[]} as DateEvent;

      data.forEach(i => {
        i.date = this.dateService.formatDate(i.date);
        dateEvent.events.push(i);        
      });

      if(!data.length){
        let emptyEvent: CalendarEvent = <CalendarEvent>{};
        emptyEvent.date = currentFormatedDate;
        dateEvent.events.push(emptyEvent);
      }

      processedEvents.push(dateEvent);

      currentDate = this.dateService.addDays(currentDate, 1);
    }

    return processedEvents;
  }

  public daySelected(event: DateEvent): void{
    this.change.emit(event);
  }
}
