import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(
    private alertify : AlertifyService
  ){}

  ngOnInit(): void {
   
  }

  // message(){
  //   this.alertify.message("all", {
  //     messageType : MessageType.Error,
  //     delay:5,
  //     position:Position.BottomLeft
  //   });
  // }

  // messagediss(){
  //   this.alertify.dissmissAll();
  // }

}
