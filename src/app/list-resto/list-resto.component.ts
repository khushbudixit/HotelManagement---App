import { Component, OnInit } from '@angular/core';
import { CommonService } from "../common.service";

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
public collection: any;
  constructor(private commonservice: CommonService) { }

  ngOnInit(): void {
    this.commonservice.getrestolist().subscribe((result)=>{
      this.collection=result;
      console.log(this.collection);
    });
  }

  deletedata(id:number){
    this.commonservice.deleteresto(id).subscribe((result)=>
    {
      console.log(result);
    })
  }

}
