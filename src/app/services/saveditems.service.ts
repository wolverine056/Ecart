import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveditemsService {  
  public cartitemlist:any=[]
  public productlist = new BehaviorSubject<any>([])
  constructor() { }

  getproducts(){
    return this.productlist.asObservable();
  }

  setproduct(product:any){
    this.cartitemlist.push(...product);
    this.productlist.next(product);
  }
  addtocart(product:any){
    this.cartitemlist.push(product);
    this.productlist.next(this.cartitemlist);
    this.getgrandtotal();
  }
  getgrandtotal():number{
    let grandtotal=0;
    this.cartitemlist.map((m:any)=>{
      grandtotal +=m.total;
    })
    return grandtotal;
  }
  removecartitem(product:any){
    this.cartitemlist.map((m:any,index:any)=>{
      if(product.id===m.id)
      this.cartitemlist.splice(index,1);
    })
    this.productlist.next(this.cartitemlist);
  }
  clearcart(){
    this.cartitemlist=[];
    this.productlist.next(this.cartitemlist);
  }
}
