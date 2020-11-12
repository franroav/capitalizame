import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NgxSpinnerService } from 'ngx-spinner';
import { StateService } from './state.service';
import { Observable } from 'rxjs';
import { WebSocket } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WebSocket],
})
export class AppComponent implements OnInit {
  title = 'angularkonce';
  // rxjs
  public data$: Observable<any>;
  public name$: Observable<any>;

  user: string = 'Francisco';
  room: string = 'room_5';
  messageArray: Array<{ user: string; message: string }> = [];

  constructor(
    private spinnerService: NgxSpinnerService,
    private socketservice: WebSocket,
    public stateservice: StateService
  ) {
    /*  this.socketservice.newUserJoined().subscribe((data) => {
      this.messageArray.push(data);
    });*/
  }

  ngOnInit() {
    this.spinner();
    // this join the room
    //this.join();
    //receive message

    // console.log(this.messageArray);

    // rxjs
    this.data$ = this.stateservice.select('data');

    //call the method that include state managment
    this.addData();
  }

  /* join() {
    this.socketservice.joinRoom({ user: this.user, room: this.room });
  }*/

  spinner(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000);
  }

  addData() {
    this.stateservice.dispatch({ key: 'data', payload: ['data'] });
  }
}
