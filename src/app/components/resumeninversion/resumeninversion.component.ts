import {
  Component,
  OnInit,
  DoCheck,
  ViewChild,
  OnDestroy,
} from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { IlustrationsService } from '../../service/ilustration.service';

@Component({
  selector: 'app-resumeninversion',
  templateUrl: './resumeninversion.component.html',
  styleUrls: ['./resumeninversion.component.css'],
})
export class ResumeninversionComponent implements OnInit, DoCheck, OnDestroy {
  public ilustrations;
  public title: string;
  public windowSize;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private ilustrationsService: IlustrationsService
  ) {}

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
}
