import { Component, OnInit } from '@angular/core';
import {MenSubcategoryService} from '../men-subcategory.service';
import { CustomerRegistrationService} from  '../customer-registration.service' ;
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
  total:any=1;
  mobile:any='';
  shipping:any='';
  payment:any='';
  orderItem:any='';
  sum:number=0;
  qty:number=1;
  constructor(private menService:MenSubcategoryService,private router:Router,private customerService:CustomerRegistrationService) {

   }

  ngOnInit(): void {
    this.menService.viewCart().subscribe((data: any) => {
      this.product = data;
      localStorage.setItem('order-item', JSON.stringify(this.product.productList));
    })
  }

  title = 'payment';
  onPay(amount:any){
    console.log("amount on pay"+amount);
    if(this.isLoggedIn()){
     this.menService.createOrder(amount).subscribe(data=>{
       console.log(data.id+"data.id");
       console.log(data);
       alert("first api call");
       var options = {
        "key": "rzp_test_MqoJug1nXNqVws", // Enter the Key ID generated from the Dashboard
        "amount": amount*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": "http://localhost:3000/order/payment-status",
        "prefill": {
            "name": "Devika Kushwah",
            "email": "devikakushwah29@gmail.com",
            "contact": "8770784399"
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
    else{
      alert("First login required");
      this.router.navigate(['signIn']);
    }
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
    this.qty = num;


}
  checkOut(){
    this.orderItem = JSON.parse(localStorage.getItem('order-item') || '[]');
    console.log("order-item"+this.orderItem);
 for(var i=0;i<this.orderItem.length;i++){
     this.sum = this.sum + this.orderItem[i].productPrice * this.qty;
 }
 console.log("sum  "+this.sum);
     this.menService.orderPlaced(this.sum,this.address,this.mobile,this.shipping,this.payment,this.orderItem).subscribe(data=>{
      alert("order placed");
      this.menService.delCart().subscribe(data=>{
        alert("cart deleted");
        this.onPay(this.sum);
      })
     })

     this.router.navigate(['add-cart']);
    }

  isLoggedIn():boolean{
    return this.customerService.checkToken();
  }
  }

