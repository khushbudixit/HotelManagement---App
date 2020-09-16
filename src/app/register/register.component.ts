import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

alert: boolean= false;
createuser = new FormGroup(
  {
        name: new FormControl(''),
        Password: new FormControl('',[Validators.required]),
        mobile: new FormControl('',[Validators.required,Validators.email]),

  }
)
  constructor(private resto: CommonService) { }


  ngOnInit(): void {
  }
  registerUser(){
    this.resto.registerUser(this.createuser.value).subscribe((result)=>
    {
      this.createuser.reset({})
      console.log(result,"data registered successfully");
    })
  }
  closeAlert(){
    this.alert=false;
  }
}
