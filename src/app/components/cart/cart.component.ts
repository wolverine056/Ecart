import { Component, OnInit } from '@angular/core';
import { SaveditemsService } from 'src/app/services/saveditems.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  product:any=[];
  grandnumber!: number;
  constructor(private cart:SaveditemsService) { }

  ngOnInit(): void {
    this.cart.getproducts().subscribe((res)=>{
      this.product=res;
      this.grandnumber=this.cart.getgrandtotal();
    })
  }
  removeitem(item:any){
    this.cart.removecartitem(item);
  }
  clearall(){
    this.cart.clearcart();
  }

}
