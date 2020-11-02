import { Component, OnInit } from '@angular/core';
import { IDestination } from '../models/destination';
import { DestinationsService } from '../services/destinations.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  componentTitle: string = 'Available Destinations';

  constructor(private destinationService: DestinationsService) { }

  destinations: IDestination[] = this.destinationService.getDestinations();


  ngOnInit(): void {
  }

}
