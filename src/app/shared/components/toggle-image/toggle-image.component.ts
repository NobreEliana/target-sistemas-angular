import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/core/services/operations.service';

@Component({
  selector: 'app-toggle-image',
  templateUrl: './toggle-image.component.html',
  styleUrls: ['./toggle-image.component.less']
})
export class ToggleImageComponent implements OnInit {
  showing:boolean=true;
  status:string="Visível";
  icon:string="-fill"

  constructor(private operations:OperationsService) { }

  ngOnInit(): void {
  }

  onClick(){
    
    this.showing=this.operations.showOrHide();

    this.changeButton()

  }

  public changeButton(){

    if(this.showing==false){
      this.status="Invisível";
      this.icon="-slash-fill";
    }
    else{
      this.status="Visível";
      this.icon="-fill";
    }
  }
  
}
