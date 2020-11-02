import { Component, OnInit } from '@angular/core';
import { env } from 'process';
import { environment } from '../../environments/environment'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  componentTitle: string = "About (all) This";
  primaryOS: string = environment.primaryOS;
  secondaryOS: string = environment.secondaryOS;
  ide: string = environment.ide;

  constructor() { }

  ngOnInit(): void {
    
    console.log(environment.ide)
  }

}
