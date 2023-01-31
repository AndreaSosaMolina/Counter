import { Component, OnInit } from '@angular/core';
import { Counter } from './counter.interface';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
  `
    h2 {
      font-size: 80px
    }
  `
  ]
})
export class AppComponent implements OnInit{
  title: string = 'Counter';
  count!: Counter;
  cero: number = 0
  stepValue: number = 0
  
 
  constructor( private cs: CounterService){}

  ngOnInit(): void {
    this.cs.counter.subscribe({
      next: (counter) => (this.count = counter)
    })
  }
  
  play(){
    this.cs.startPause(true)
  }

  pause(){
    this.cs.startPause(false)
  }

  reset(){
    this.cs.reset()
  }

  countUp( value: boolean){
    this.cs._countService.countUp = value;
  }

  setTo(){
    this.cs._countService.countValue = this.cero;
  }

  addStep(){
    this.cs._countService.step = this.stepValue;
  }


}
