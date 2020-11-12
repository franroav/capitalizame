import {
  Component,
  OnInit,
  DoCheck,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { IlustrationsService } from '../../service/ilustration.service';
import { WebSocket } from '../.././socket.service';
import { Subscription } from 'rxjs';

//SLIDER
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  providers: [WebSocket, NgbCarouselConfig],
})
export class DefaultComponent implements OnInit, DoCheck, OnDestroy {
  public ilustrations;
  public title: string;
  public windowSize;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private ilustrationsService: IlustrationsService,
    private socketservice: WebSocket,
    config: NgbCarouselConfig
  ) {
    this.title = 'Inicio';

    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
    //GET INIT DATA

    //console.log(this.messageArray);
  }

  ngOnInit(): void {
    this.ilustrations = this.ilustrationsService.obtenerIlustrations();
  }

  ngDoCheck() {
    //el ngDoCheck se ejecutara siempre que haya un cambio en mi aplicacion
    this.onResize();
  }
  ngOnDestroy() {}

  onResize() {
    this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    //console.log(this.windowSize);
  }

  onView(row) {}
}
