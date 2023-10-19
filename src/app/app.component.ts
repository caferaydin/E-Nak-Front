import { Component } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';

declare var  $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private toastrService : CustomToastrService
  ){
    toastrService.message("merhaba", "AYDIN", {
      messageType : ToastrMessageType.Info,
      position : ToastrPosition.TopCenter
    });
  }

  title = 'E-Nak-Front';
}

// $(document).ready(()=> {
//   alert("ready")
// });


