import { Component, OnInit, Input } from '@angular/core';
import { SummaryHeader } from 'src/app/models/summary/summaryheader';
import { SummaryData } from 'src/app/models/summary/summarydata';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  header: SummaryHeader;

  @Input()
  data: SummaryData;

  constructor() { }

  ngOnInit() {
  }
}
