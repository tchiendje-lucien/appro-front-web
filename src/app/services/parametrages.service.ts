import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParametragesService {

  public host:string="http://localhost:8080"

  constructor(private http:HttpClient) { }

  public getsite(){
      return this.http.get(this.host+"/get_list");
  }
  
}
