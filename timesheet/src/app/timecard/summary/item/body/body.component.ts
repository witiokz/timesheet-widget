import { Component, OnInit, Input } from '@angular/core';
import { SummaryData } from 'src/app/models/summary/summarydata';

@Component({
  selector: 'app-summary-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input()
  data: SummaryData;

  constructor() { }

  ngOnInit() {
  }

}
