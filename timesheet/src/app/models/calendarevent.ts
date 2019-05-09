export interface CalendarEvent {
    date: Date;
    quantity: Number;
    eventType: String;
    isExpenseType: Boolean;
    isHoursEventType: Boolean;
    isAdditionalHoursEventType: Boolean;
    isWorkHour: Boolean;
    isApproved: Boolean;
    isRejected: Boolean;
    tasksCount: Number;
    firstTaskStart: Date;
    lastTaskEnd: Date;
  }