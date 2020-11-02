import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IDestination } from '../models/destination';
import { DestinationsService } from '../services/destinations.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
  @Output() newDestinationEvent = new EventEmitter<string>();

  componentTitle: string = 'Available Destinations';
  //selectdDestination: string;
  isOn: boolean = false;
  

  constructor(private destinationService: DestinationsService) { }

  destinations: IDestination[] = this.destinationService.getDestinations();

  codeSelected(code):void{
    this.newDestinationEvent.emit(code);
  }

  toggleRequestForm(status: boolean):void{
    this.isOn = status;
  }

  ngOnInit(): void {
  }

}
