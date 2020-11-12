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
  selector: 'app-pasodosinversion',
  templateUrl: './pasodosinversion.component.html',
  styleUrls: ['./pasodosinversion.component.css'],
})
export class PasodosinversionComponent implements OnInit, DoCheck, OnDestroy {
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
