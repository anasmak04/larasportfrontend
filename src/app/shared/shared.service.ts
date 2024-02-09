import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http : HttpClient) { }

  url = "../../assets/data.json";

  getData(): Observable<any> {
    return this.http.get(this.url);
  }


}