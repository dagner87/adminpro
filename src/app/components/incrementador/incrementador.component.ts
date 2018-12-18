import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgreso: ElementRef;
  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;
  @Output() cambioValor: EventEmitter <number> = new EventEmitter();
  constructor() {
      console.log('Leyenda', this.leyenda);
  }

  ngOnInit() {
  }
  onChange(newValor: number) {
    // console.log(this.txtProgreso);
    // let elemHtml: any = document.getElementsByName('progreso')[0];


    if (newValor >= 100) {
      this.progreso = 100;
    } else if (newValor <= 0) {
      this.progreso = 0;
      return;
    } else {
      this.progreso = newValor;
    }
   // elemHtml.value = this.progreso;
    this.txtProgreso.nativeElement.value = this.progreso;
    this.cambioValor.emit ( this.progreso );
    this.txtProgreso.nativeElement.focus();
  }

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso += valor;
    this.cambioValor.emit ( this.progreso );
  }

}
