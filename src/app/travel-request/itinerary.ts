export interface Iitinerary {
    itineraryId : string;
    //property to refer to Customer instance
    departureDate: Date;
    returnDate : Date;
    origin: string;
    destination: string;
    numberOfTravelers: number;
}

export class Itinerary implements Iitinerary{

    constructor(
        public itineraryId : string,
        public departureDate : Date,
        public returnDate : Date,
        public origin : string,
        public destination : string,
        public numberOfTravelers : number){

        }

    calculateCost():number{
        return this.numberOfTravelers * 150;
    }
}