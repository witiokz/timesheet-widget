import { Component, OnInit, Input } from '@angular/core';
import { ApprovalState } from 'src/app/models/approvalstate';
import { DateEvent } from 'src/app/models/dateevent';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {

  @Input()
  item: DateEvent;
  
  status: ApprovalState;

  private approvalState = ApprovalState;

  constructor() { }

  ngOnInit() {
    if(this.item.events.some(i => i.isRejected && i.isRejected.valueOf())){
      this.status = ApprovalState.Rejected;
    } else if(this.item.events.every(i => i.isApproved && i.isApproved.valueOf()) && 
      this.item.events.every(i => i.tasksCount > 0)){
      this.status = ApprovalState.Approved;
    } else if(!this.item.events.some(i => i.isRejected && i.isRejected.valueOf()) && 
      !this.item.events.every(i => i.isApproved && i.isApproved.valueOf()) &&
       this.item.events.every(i => i.tasksCount > 0)){
      this.status = ApprovalState.Other;
    } else{
      this.status = ApprovalState.NotApplicable;
    }
  }
}
