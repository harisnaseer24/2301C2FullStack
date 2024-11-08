import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
myProducts:any[]=[];

constructor(private http:HttpClient){//dependency injection
this.getProduct();
}

getProduct(){
this.http.get("https://localhost:7258/api/Product").subscribe((result:any)=>{

this.myProducts=result;
console.log(result);
})
}

}
