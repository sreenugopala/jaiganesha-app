import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './../my-service.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  months = ["January", "Feburary", "March", "April", "May",
              "June", "July", "August", "September",
              "October", "November", "December"];
  isavailable = true;
  today = null;

  constructor(private myDateService : MyServiceService ) { }

  ngOnInit() {
    this.today = this.myDateService.showTodayDate();
  }

  myClickFunction(event){
    this.isavailable = !this.isavailable;
    console.log(event);
  }

  changemonths(event) {
      console.log("Changed month from the Dropdown : " +event.srcElement.value);
      console.log(event.srcElement.value);
   }
}
