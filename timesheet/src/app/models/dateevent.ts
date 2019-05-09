import { CalendarEvent } from './calendarevent';

export interface DateEvent {
    date: Date;
    events: CalendarEvent[];
}