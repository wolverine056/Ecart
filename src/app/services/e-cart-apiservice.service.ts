import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ECartAPIserviceService {
link= 'https://fakestoreapi.com/products/'
  constructor(private http:HttpClient) { }

  getproduct(){
    return this.http.get<any>(this.link).pipe(map((res: any)=>{
      return res;
    }))
  }
}
