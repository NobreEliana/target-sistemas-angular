import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {
  
  sum_fibo:number[]= [0,1];

  show:boolean=true;

  constructor() { }

  public sumFibonacci():number{
    this.sum_fibo.push(this.sum_fibo[this.sum_fibo.length-1] + this.sum_fibo[this.sum_fibo.length-2]);
   
    return this.sum_fibo[this.sum_fibo.length-1];
  }

  public resetSequence():number{
    this.sum_fibo=[0,1];
    
    return this.sum_fibo[this.sum_fibo.length-1];
  }


  public showOrHide():boolean{
    this.show=!this.show;
    let value=this.show;
    console.log(value);
    return value;
  }


}

