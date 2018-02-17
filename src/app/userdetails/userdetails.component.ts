import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

myClickFunction(event){
  alert(event);
  console.log(event);
}

changemonths(event) {
      console.log("Changed month from the Dropdown : " +event.srcElement.value);
      console.log(event.srcElement.value);
   }
}
