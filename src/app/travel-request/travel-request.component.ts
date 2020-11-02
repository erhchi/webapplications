import { Component, OnInit } from '@angular/core';
import { IDestination } from '../models/destination';
import { Itinerary } from '../models/itinerary';
import { DestinationsService } from '../services/destinations.service';

@Component({
  selector: 'app-travel-request',
  templateUrl: './travel-request.component.html',
  styleUrls: ['./travel-request.component.css']
})
 export class TravelRequestComponent implements OnInit {

  componentTitle: string = 'Travel Request';
  min: number = 1;
  max: number = 10;

  destinations: IDestination[];


  model = new Itinerary(
    "", new Date(), new Date(), "", "", 0
  )

  constructor(private destinationService: DestinationsService) { 
    this.destinations = this.destinationService.getDestinations();
  }

  ngOnInit(): void {
    console.log('onInit');
    console.log(this.destinations);
  }



  onSubmit(form): void {
    
    if(this.model.numberOfTravelers === 0)
      console.log('must have at least one traveller');

    console.log(form.value);
    console.log(this.model.calculateCost());

    alert(
      'Here\'s your trip: ' +
      '\n\nLeave: ' +
      this.model.origin + 
      '\nArrive: ' + 
      this.model.destination + 
      '\nDepart on: ' +
      //this.model.departureDate.toLocaleDateString() + 
      this.model.departureDate +
      '\nNumber of travelers: ' + 
      this.model.numberOfTravelers +
      '\n\n...sorry ran out of time to build confirmation component.'
    );
    //form.reset();
  }

  onCancel(form):void{
    console.log('cancel')
    //form.reset();
    //this.router.navigate(['../'], { relativeTo: this.route});
  }

  clear():void{
    
    this.model.origin = '';
    this.model.destination = '';
    this.model.numberOfTravelers = 0;
    this.model.departureDate = new Date();
  }

}
