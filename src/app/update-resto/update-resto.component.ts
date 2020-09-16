import { Component, OnInit } from '@angular/core';
import { CommonService } from "../common.service";
import { ActivatedRoute } from "@angular/router";
import { FormGroup , FormControl,Validators, FormControlName } from "@angular/forms";
@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert: boolean= false;
 updateresto = new FormGroup(
  {
    name: new FormControl(''),
        Address: new FormControl(''),
        mobile: new FormControl('')
  }
)

  constructor(private resto: CommonService,private router: ActivatedRoute) { }

  ngOnInit() : void {
   this.resto.getData(this.router.snapshot.params.id).subscribe((result)=>
   {
      this.updateresto = new FormGroup(
        {
          name: new FormControl(result['name']),
          Address: new FormControl(result['Address']),
          mobile: new FormControl(result['mobile'])
        }
      )
   })
  }
  updaterestaurant(){
    this.resto.updaterestaurant(this.router.snapshot.params.id,this.updateresto.value).subscribe((result)=>
    {
      console.log(result,"data updated successfully")
      this.alert=true
    })
  }
  closeAlert(){
    this.alert=false
  }
}
