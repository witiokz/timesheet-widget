import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  MatInputModule,
  MatButtonModule, 
  MatCheckboxModule, 
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimecardComponent } from './timecard/timecard.component';
import { CalendarComponent } from './timecard/calendar/calendar.component';
import { SummaryComponent } from './timecard/summary/summary.component';
import { CellComponent } from './timecard/calendar/cell/cell.component';
import { ApprovalComponent } from './timecard/calendar/cell/approval/approval.component';
import { TaskComponent } from './task/task.component';
import { ItemComponent } from './timecard/summary/item/item.component';
import { HoursComponent } from './timecard/summary/hours/hours.component';
import { ExpensesComponent } from './timecard/summary/expenses/expenses.component';
import { AdditionalComponent } from './timecard/summary/additional/additional.component';
import { AddtaskComponent } from './timecard/summary/addtask/addtask.component';
import { HeaderComponent } from './timecard/summary/item/header/header.component';
import { BodyComponent } from './timecard/summary/item/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    TimecardComponent,
    CalendarComponent,
    SummaryComponent,
    CellComponent,
    ApprovalComponent,
    TaskComponent,
    ItemComponent,
    HoursComponent,
    ExpensesComponent,
    AdditionalComponent,
    AddtaskComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule,
    //Material related modules
    MatInputModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
