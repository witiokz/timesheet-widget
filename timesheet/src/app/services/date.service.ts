import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private _defaultDateFormat:string = "YYYY-MM-DD";

  get defaultDateFormat():string {
      return this._defaultDateFormat;
  }

  constructor() { }

  public getCurrentYearMonth(date: Date): String{
    return moment(date).format("MMMM YYYY")
  }

  public getTimeFromDate(date: Date): String{
    return moment(date).format("HH:mm")
  }

  public getTodayDate(): Date {
    return moment().endOf('month').toDate();
  }

  public datesAreEqual(firstDate: Date, secondDate: Date): Boolean{
    return moment(firstDate).format(this.defaultDateFormat) ==
    moment(secondDate).format(this.defaultDateFormat);
  }

  public formatCellName(date: Date): String{
    return moment(date).format('ddd');
  }

  public formatCellNumber(date: Date): String{
    return moment(date).format('D');
  }

  public dateDurationInHours(start: Date, end: Date): String{
    return moment.utc(moment(end).diff(moment(start))).format("HH:mm");
  }

  public totalDateDurationInHours(start: Date, end: Date): Number{
    return moment.duration(moment(end).diff(moment(start))).asHours();
  }

  public isToday(date: Date): Boolean {
    return moment(date).format(this.defaultDateFormat) == 
            moment().endOf('month').format(this.defaultDateFormat);
  }

  public isWeekend(date: Date): Boolean{
    return moment(date).day()%6==0;
  }

  public getDate(date: Date): string {
    return moment(date).format(this.defaultDateFormat);
  }

  public getDateAndDayName(date: Date): string {
    const dayName = moment(date).format("dddd");
    const formatedDate = moment(date).format("DD.MM.YYYY");

    return `${dayName} ${formatedDate}`;
  }

  public getLastDate(date?: Date): Date{
    return (date ? moment(date): moment().endOf('month')).toDate();
  }

  public formatDate(date: Date): Date{
    return moment(date).toDate();
  }

  public addDays(date: Date, dayNumber: Number): Date{
    return moment(date).add(dayNumber.valueOf(), 'days').toDate();
  }

  public getMinDate(dates: Date[]): Date{
    return moment.min(dates.map(d => moment(d))).toDate();
  }

  public getMaxDate(dates: Date[]): Date{
    return moment.max(dates.map(d => moment(d))).toDate();
  }

}
