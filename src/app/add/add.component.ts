import { Component, OnInit } from '@angular/core';
import { CommonService } from "../common.service";
import { FormGroup , FormControl,Validators } from "@angular/forms";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 alert: boolean= false;
addresto = new FormGroup(
  {
    name: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(15)]),
        Address: new FormControl('',[Validators.required]),
        mobile: new FormControl('',[Validators.required,Validators.email])
  }
)
  constructor(private resto: CommonService) { }

  ngOnInit() {
    
  }

  addrestaurant(){
   // console.log(this.addresto.value);
   this.resto.addrestaurant(this.addresto.value).subscribe((result)=>
   {
      this.alert=true;
      this.addresto.reset({})
      console.log("get data from service",result)
   });
  }
  closeAlert(){
    this.alert=false;
  }
  
  }


