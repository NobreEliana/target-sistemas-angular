import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/core/services/operations.service';

@Component({
  selector: 'app-s-fibonacci',
  templateUrl: './s-fibonacci.component.html',
  styleUrls: ['./s-fibonacci.component.less']
})
export class SFibonacciComponent implements OnInit {

  constructor(private operations_service: OperationsService) { }
  value:number=1;

  ngOnInit(): void {
  }

  onClick(){
    
    this.value= this.operations_service.sumFibonacci();
  }

  btnReset(){
    
    this.value=this.operations_service.resetSequence();
  }
}
