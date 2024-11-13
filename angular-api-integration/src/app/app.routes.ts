import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

export const routes: Routes = [
    {
        path:"",
        component:ProductComponent
    },
    {
        path:"addproduct",
        component:AddProductComponent
    }
    ,
    {
        path:"editproduct/:id",
        component:EditProductComponent
    }
];
