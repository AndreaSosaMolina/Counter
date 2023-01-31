import { Injectable } from '@angular/core';
import { Counter } from './counter.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
 
  time: any;
  _countService : Counter = {
    count: false,
    countUp: true,
    countValue: 0,
    value: 0,
    speed: 1000,
    step: 2
  };
  
  counter = new BehaviorSubject<Counter>(this._countService);

  constructor() { }

  startPause( value: boolean): void{
    if(value){
      this._countService.count = true;

      this.time = setInterval(() => {
        this._countService.countUp 
            ? this._countService.value += this._countService.step
            : this._countService.value -= this._countService.step
        
      }, this._countService.speed)
    } 
    else {
      this._countService.count = false;
      clearInterval(this.time);
    }
    
  };

  reset(): void{
    clearInterval(this.time);
    this._countService.value = this._countService.countValue;
  }

}
