import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  componentTitle: string = 'YouNoGo Travel';

  constructor() { }

  ngOnInit(): void {
  }

}