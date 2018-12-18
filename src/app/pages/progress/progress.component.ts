import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  progresoazul: number = 50 ;
  progresoverde: number = 20 ;

  constructor() {}

  ngOnInit() {

  }
  actualizar( event: number) {
    console.log('Evento:', event);
  }
}
