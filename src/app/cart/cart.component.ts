import { Component, OnInit } from '@angular/core';
import {MenSubcategoryService} from '../men-subcategory.service';
import { Router} from '@angular/router';
declare let Razorpay:any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product:any='';
  in:number=0;
  email:any='';
  address:any='';
  contactNumber:any='';
  total:any=0;
  mobile:any='';
  shipping:any='';
  payment:any='';
  orderItem:any='';
  sum:number=0;
  constructor(private menService:MenSubcategoryService,private router:Router) {

   }

  ngOnInit(): void {
    this.menService.viewCart().subscribe((data: any) => {
      this.product = data;
       for(let i=0;i<this.product.productList.length;i++){
         this.sum = this.sum + this.product.productList[i].productPrice;
       }
      localStorage.setItem('order-item', JSON.stringify(this.product.productList));
    })
  }
  amount:any;
  title = 'payment';
 onPay(){
   this.menService.createOrder(this.amount).subscribe(data=>{
     console.log(data.id);
     console.log(data);
     var options = {
      "key": "rzp_test_MqoJug1nXNqVws", // Enter the Key ID generated from the Dashboard
      "amount": this.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Acme Corp",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": "https://vivah-backend-api.herokuapp.com/order/payment-status",
      "prefill": {
          "name": "Parth Patodi",
          "email": "patodiparth@gmail.com",
          "contact": "6265812358"
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  alert(options);
  var rzp1 = new Razorpay(options);

    rzp1.open();
   })
 }

  addToCart(id:any){
      this.menService.addCart(id).subscribe(data => {
      alert("add to cart");
    });
  }
  delete(id:any,index:number){
    this.menService.removeCart(id).subscribe(data=>{
      alert("remove to cart");
      this.product.productList.splice(index,1);
      this.router.navigate(['add-cart']);
     })

  }
getData(num:any,price:any){
   this.total = num*1 * price *1;
   alert(this.total);
}
  checkOut(){
    this.orderItem = localStorage.getItem('order-item');
 console.log("sum  "+this.sum);
     this.menService.orderPlaced(this.sum,this.address,this.mobile,this.shipping,this.payment,this.orderItem).subscribe(data=>{
      alert("order placed");
      this.menService.delCart().subscribe(data=>{
        alert("cart deleted");
        this.onPay();
      })
     })

     this.router.navigate(['add-cart']);
    }
  }

