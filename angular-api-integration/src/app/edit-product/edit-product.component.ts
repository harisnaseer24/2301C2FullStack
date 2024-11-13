import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
id:any=0;
  product:any={
   id:0,
    name: "",
    description: "",
    price: 0,
    brandId: 0,
  }

  myBrands:any[]=[];

constructor(private http:HttpClient,private route:ActivatedRoute){//dependency injection
this.getBrands();
this.getProductDetails();


}

getBrands(){
this.http.get("https://localhost:7258/api/Brand").subscribe((result:any)=>{

this.myBrands=result;
console.log(result);
})
}
getProductDetails(){
  this.id=this.route.snapshot.paramMap.get("id");
  this.http.get("https://localhost:7258/api/Product/"+this.id).subscribe((result:any)=>{
  
  this.product.id=this.id;
  this.product.name=result.name;
  this.product.description=result.description;
  this.product.price=result.price;
  this.product.brandId=result.brandId;

  console.log(result);
  })
  }



  EditProduct(product:any){
  this.http.put("https://localhost:7258/api/Product",product).subscribe((result:any)=>{
  if(result !=null){
    alert("Product edited successfully.");
    location.href ="/";
  }
  
  })


}
}
