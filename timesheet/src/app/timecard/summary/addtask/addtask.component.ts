import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor() { }

  @Input()
  date: Date;

  ngOnInit() {
  }

}
