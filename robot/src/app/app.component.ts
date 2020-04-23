import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'robot';
  apiData: any;
  constructor (
    private api: ApiService
  ) {}

  ngOnInit() {
    this.api.getSmartphone()
    .subscribe(data => {
      this.apiData = data;
    });
  }
}
