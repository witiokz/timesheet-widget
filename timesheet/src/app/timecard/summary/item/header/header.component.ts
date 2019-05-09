import { Component, OnInit, Input } from '@angular/core';
import { SummaryHeader } from 'src/app/models/summary/summaryheader';

@Component({
  selector: 'app-summary-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  header: SummaryHeader;

  constructor() { }

  ngOnInit() {
  }

}
