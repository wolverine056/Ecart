import { Component, OnInit } from '@angular/core';
import { SaveditemsService } from 'src/app/services/saveditems.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
totalitems=0;
  constructor(private cart:SaveditemsService) { }

  ngOnInit(): void {
    this.cart.getproducts().subscribe((res)=>{
      this.totalitems=res.length;
    })
  }

}
