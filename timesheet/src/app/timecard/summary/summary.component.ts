import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { DateService } from 'src/app/services/date.service';
import { SummaryData } from 'src/app/models/summary/summarydata';
import { SummaryHeaderItem } from 'src/app/models/summary/summaryheaderitem';
import { SummaryDataItem } from 'src/app/models/summary/summarydataitem';
import { SummaryHeader } from 'src/app/models/summary/summaryheader';
import { DateEvent } from 'src/app/models/dateevent';
import { CalendarEvent } from 'src/app/models/calendarevent';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  event: DateEvent;
  date: String;
  
  hoursData: SummaryData;
  expensesData: SummaryData;
  additionalHoursData: SummaryData;

  hoursHeader = {title: "Hours", icon: "schedule"} as SummaryHeader;
  expensesHeader = {title: "Expenses", icon: "attach_money"} as SummaryHeader;
  additionalHoursHeader = {title: "Additional hours", icon: "schedule"} as SummaryHeader;

  hoursDataHeader: SummaryHeaderItem[] = [
    {title: "Type", size: 90} as SummaryHeaderItem, 
    {title: "Duration", size: 10} as SummaryHeaderItem
    ];
  expensesDataHeader: SummaryHeaderItem[] = [
    {title: "Type", size: 90} as SummaryHeaderItem, 
    {title: "Quantity", size: 10} as SummaryHeaderItem,  
    {title: "Total", size: 10} as SummaryHeaderItem
    ];
  additionalHoursDataHeader: SummaryHeaderItem[] = [
    {title: "Type", size: 90} as SummaryHeaderItem, 
    {title: "Amount", size: 10} as SummaryHeaderItem  
    ];
  
  private price: Number = 283.5;

  constructor(private eventsService: EventsService,
    private dateService: DateService) { }

  ngOnInit() {

    this.eventsService.change.subscribe((event: DateEvent) => {
      
      this.event = event;
      this.date = this.dateService.getDate(this.event.date);
      this.hoursData = this.expensesData = this.additionalHoursData = null;

      const hoursEventTypeItems = this.event.events.filter(i => i.isHoursEventType
        && i.isHoursEventType.valueOf());

      this.processHoursEventType(hoursEventTypeItems);

      const expenseTypeItems = this.event.events.filter(i => i.isExpenseType
        && i.isExpenseType.valueOf());

      this.processExpenseType(expenseTypeItems);

      const additionalHoursEventTypeItems = this.event.events.filter(i => i.isAdditionalHoursEventType
        && i.isAdditionalHoursEventType.valueOf());

      this.processAdditionalHoursEventType(additionalHoursEventTypeItems);


    });
  }

  private processHoursEventType(items: CalendarEvent[]){

    if(items.length){
      const minStartHour =this.dateService.getTimeFromDate(
                this.dateService.getMinDate(items.map(i => i.firstTaskStart)));
      const maxEndHour = this.dateService.getTimeFromDate(
        this.dateService.getMaxDate(items.map(i => i.lastTaskEnd)));

      this.hoursHeader.text = `${minStartHour}  - ${maxEndHour}`;
      this.hoursData = {} as SummaryData;
      this.hoursData.header = this.hoursDataHeader;
      this.hoursData.data = [] as SummaryDataItem[];

      items.forEach((i: CalendarEvent) => {
        this.hoursData.data.push({items: [i.eventType, 
                  this.dateService.dateDurationInHours(i.firstTaskStart, i.lastTaskEnd)]} as SummaryDataItem);
      });
    }
  }

  private processExpenseType(items: CalendarEvent[]){

    if(items.length){

      this.expensesData = {} as SummaryData;
      this.expensesData.header = this.expensesDataHeader;
      this.expensesData.data = [] as SummaryDataItem[];

      items.forEach((i: CalendarEvent) => {
        this.expensesData.data.push({items: [
                  i.eventType, 
                  i.quantity,
                  +i.quantity * +this.price
                ]} as SummaryDataItem);
      });
    }
  }

  private processAdditionalHoursEventType(items: CalendarEvent[]){
    if(items.length){

      this.additionalHoursData = {} as SummaryData;
      this.additionalHoursData.header = this.additionalHoursDataHeader;
      this.additionalHoursData.data = [] as SummaryDataItem[];

      items.forEach((i: CalendarEvent) => {
        this.additionalHoursData.data.push({items: [
                  i.eventType, 
                  +i.quantity
                ]} as SummaryDataItem);
      });
    }
  }
}
