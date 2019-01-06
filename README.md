# notes ANGULAR 6
## HTTP
![alt text](https://res.cloudinary.com/dh7apsl5o/image/upload/v1546799207/http_aj6_nnjtzx.png)
##SERVICE
//import Injectable
//Injectable class used to create the Custom Service
import { Injectable } from '@angular/core';
//import Http Class
//Http Class used to connect to server by using http protocol
//import Response
//"Response From Server" is the Response Type
import { Http,Response } from "@angular/http";
//import map(),catch()
//map() used to catch the positive Result
//catch() used to catch the Error Response
import "rxjs/Rx";
//import Observable
import { Observable } from "rxjs/Observable";
@Injectable()
export class CountriesService {
  constructor(private _http:Http) { }
  public getCountries():any{
    return this._http.get("https://restcountries.eu/rest/v2/all")
                .map((res:Response)=>{return res.json()})
                .catch(this._handleError);
  }
  public _handleError(err){
    console.error("Error Raised..."+err);
    return Observable.throw(err || "Internal Server Error !");
  }
}
 ## COMPONENT
 import { Component, OnInit } from '@angular/core';
import { CountriesService } from "../../services/countries.service";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  private data:any;
  constructor(private _service:CountriesService) { }
  ngOnInit(){
    this._service.getCountries().subscribe( res=>{ this.data=res; },
                                            (err:HttpErrorResponse)=>{
                                              if(err.error instanceof Error){
                                                console.log("Client Side Error");
                                              }else{
                                                console.log("Server Side Error");
                                              }
                                            });
  }
}
