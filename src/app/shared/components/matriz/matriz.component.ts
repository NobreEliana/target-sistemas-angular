import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OperationsService } from 'src/app/core/services/operations.service';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.less']
})
export class MatrizComponent implements OnInit {

  form_content = new FormGroup({
    number_user: new FormControl('', Validators.required),
  })
  matriz:number[]=[0,1,2,3,4,5,6,7,8,9,10];
  selected:number=-1;
  message:string= "";
  constructor(private operations:OperationsService) { }
  
  ngOnInit(): void {
    
  }

  searchNumber(){

    let number_user= this.form_content.value.number_user;

    this.selected= this.operations.findNumber(parseInt(number_user),this.matriz);
    this.message=this.operations.verify(this.selected, number_user);
    
  }

}
