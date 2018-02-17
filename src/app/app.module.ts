import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

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
    BrowserModule,
    RouterModule.forRoot([
         {
            path: 'userdetails',
            component: UserdetailsComponent
         }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
