import { Component, OnInit } from '@angular/core';
import { IDestination } from '../models/destination';
import { Itinerary } from '../models/itinerary';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-request',
  templateUrl: './travel-request.component.html',
  styleUrls: ['./travel-request.component.css']
})
 export class TravelRequestComponent implements OnInit {

  componentTitle: string = 'Travel Request';
  min: number = 1;
  max: number = 10;

  //destinations: IDestination[] = []
  destinations: IDestination[] = [
    {
      "Id": 1,
      "City": "Miami",
      "AirportName" : "Miami International",
      "AirportCode": "MIA",
      "Description" : "Warm all year round",
      "Rating": 4,
      "RatingIcons": this.populateRatings(4),
      "RatingType": "thermometer",
      "imageUrl" : "assets/images/miami.png"
    },
    {
      "Id" : 2,
      "City" : "Chicago",
      "AirportName" : "O'hare International",
      "AirportCode" : "ORD",
      "Description" : "Cold, cold, cold",
      "Rating": 2,
      "RatingIcons": this.populateRatings(2),
      "RatingType": "snowflake",
      "imageUrl" : "assets/images/chicago.png"
    },
    {
      "Id" : 3,
      "City" : "Denver",
      "AirportName" : "Denver International",
      "AirportCode" : "DIA",
      "Description" : "Mountains and beer",
      "Rating": 5,
      "RatingIcons": this.populateRatings(5),
      "RatingType": "snowflake",
      "imageUrl" : "assets/images/denver.png"
    }
  ];


  model = new Itinerary(
    "", new Date(), new Date(), "", "", 0
  )

  constructor() { }

  ngOnInit(): void {
    console.log('onInit');
    console.log(this.destinations);
  }

  populateRatings(num): number[]{
    return new Array(num).fill(num)
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
