import { Component, OnInit } from '@angular/core';
import { ECartAPIserviceService } from 'src/app/services/e-cart-apiservice.service';
import { SaveditemsService } from 'src/app/services/saveditems.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productlist:any
  constructor(private allproductcart:ECartAPIserviceService, private cart:SaveditemsService) { }
  ngOnInit(): void {
    this.allproductcart.getproduct().subscribe((res)=>{
      this.productlist=res;
      this.productlist.forEach((p:any) => {
        Object.assign(p,{quantity:1,total:p.price});
      });
    })
  }
  addtocart(item:any){
    this.cart.addtocart(item);
  }




}
