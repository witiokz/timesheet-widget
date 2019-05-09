import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { DateService } from 'src/app/services/date.service';
import { DateEvent } from 'src/app/models/dateevent';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input()
  event: DateEvent;

  isToday: Boolean;
  isSelected: Boolean;
  isWeekend: Boolean;

  constructor(private eventsService:EventsService,
              private dateService: DateService) { }

  ngOnInit() {    
    this.isToday = this.dateService.isToday(this.event.date);
    this.isWeekend = this.dateService.isWeekend(this.event.date);

    if(this.isToday){
      setTimeout(() => {
        this.eventsService.daySelected(this.event);
      });
    }

    this.eventsService.change.subscribe((event: DateEvent) => {
      this.isSelected = this.dateService.datesAreEqual(this.event.date, event.date);
    });
  }

  selectedDay(){
    this.eventsService.daySelected(this.event);
  }

  formatName(){
    return this.dateService.formatCellName(this.event.date);
  }

  formatNumber(){
    return this.dateService.formatCellNumber(this.event.date);
  }

  formatAmount(){

    if(this.event.events.length){

      let amount:number = 0;

      this.event.events.forEach(i => {

        const start = i.firstTaskStart;
        const end = i.lastTaskEnd;
    
        if(start && end){
          amount = +this.dateService.totalDateDurationInHours(start, end) + amount;
        }
      });

      return amount;
    }
  }
}
