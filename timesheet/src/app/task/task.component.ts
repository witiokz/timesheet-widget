import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  date: String;

  ngOnInit() {
    this.date = this.route.snapshot.paramMap.get("date");
  }

}
