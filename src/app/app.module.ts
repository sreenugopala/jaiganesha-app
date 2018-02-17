import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ColorBlueDirective } from './color-blue.directive';
import { SalutationPipe } from './salutation.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserdetailsComponent,
    ColorBlueDirective,
    SalutationPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
