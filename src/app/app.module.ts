import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TravelRequestComponent } from './travel-request/travel-request.component';
import { NumberRangeDirective } from './directives/number-range.directive';
import { RouteValidationDirective } from './directives/route-validation.directive';

@NgModule({
  declarations: [
    AppComponent,
    TravelRequestComponent,
    NumberRangeDirective,
    RouteValidationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
