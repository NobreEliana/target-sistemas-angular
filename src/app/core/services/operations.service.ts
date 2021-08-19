import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {
  

  constructor() { }

  
  sum_fibo:number[]= [0,1];

  public sumFibonacci():number{
    this.sum_fibo.push(this.sum_fibo[this.sum_fibo.length-1] + this.sum_fibo[this.sum_fibo.length-2]);
   
    return this.sum_fibo[this.sum_fibo.length-1];
  }

  public resetSequence():number{
    this.sum_fibo=[0,1];
    
    return this.sum_fibo[this.sum_fibo.length-1];
  }
  
}

