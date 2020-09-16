import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url="http://localhost:3000/resto";
  regURL="http://localhost:3000/users";
  constructor(private _http:HttpClient) { }

  getrestolist()
  {
    return this._http.get(this.url);
  }
  addrestaurant(data){
    return this._http.post(this.url,data);
  }
  getData(id){
    return this._http.get(`${this.url}/${id}`)
  }
  updaterestaurant(id,data){
    return this._http.put(`${this.url}/${id}`,data)
  }
  registerUser(data){
    return this._http.post(this.regURL,data);
  }
  deleteresto(id){
    return this._http.delete(this.url+id);
}
}
