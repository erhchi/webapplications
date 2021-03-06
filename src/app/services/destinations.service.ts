import { Injectable } from '@angular/core';
import { IDestination } from '../models/destination';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  destinations: IDestination[] = [    {
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
  }];

  constructor() { }


  public getDestinations(): IDestination[]{
    return this.destinations; 
  }
  
  
  public populateRatings(num): number[]{
    return new Array(num).fill(num)
  }

}


