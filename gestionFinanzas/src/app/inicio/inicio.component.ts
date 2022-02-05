import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent {

  isShown = false;
  isShown2 = false;
  isShown3 = false;
  isShown4 = false;
  isShown5 = false;
  isShown6 = false;

  constructor() { }

  toggleShow() {
    this.isShown = ! this.isShown;
  }toggleShow2() {
    this.isShown2 = ! this.isShown2;
  } toggleShow3() {
    this.isShown3 = ! this.isShown3;
  }  toggleShow4() {
    this.isShown4 = ! this.isShown4;
  }  toggleShow5() {
    this.isShown5 = ! this.isShown5;
  }  toggleShow6() {
    this.isShown6 = ! this.isShown6;
  }
}
