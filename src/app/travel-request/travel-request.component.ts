import { Component, OnInit } from '@angular/core';
import { IDestination } from './destination';
import { Iitinerary, Itinerary } from './itinerary';

@Component({
  selector: 'app-travel-request',
  templateUrl: './travel-request.component.html',
  styleUrls: ['./travel-request.component.css']
})
 export class TravelRequestComponent implements OnInit {

  componentTitle: string = 'Travel Request';
  min: number = 1;
  max: number = 9;

  //destinations: IDestination[] = []
  destinations: IDestination[] = [
    {
      "Id": 1,
      "Name": "Miami",
      "Code": "MIA",
      "Description" : "Warm all year round",
      "Rating": 4,
      "imageUrl" : "assets/images/miami.png"
    },
    {
      "Id" : 2,
      "Name" : "O'hare",
      "Code" : "ORD",
      "Description" : "Cold, cold, cold",
      "Rating": 2,
      "imageUrl" : "assets/images/chicago.png"
    },
    {
      "Id" : 3,
      "Name" : "Denver",
      "Code" : "DIA",
      "Description" : "Mountains and beer",
      "Rating": 5,
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

  onSubmit(form): void {
    console.log(form.value);
    console.log(this.model.calculateCost());
    //form.reset();
  }

  onCancel(form):void{
    console.log('cancel')
    form.reset();
  }

}
