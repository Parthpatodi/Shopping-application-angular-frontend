import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { MenSubcategoryService} from '../men-subcategory.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomerRegistrationService} from  '../customer-registration.service' ;
declare let Razorpay:any

@Component({
  selector: 'app-women-productview',
  templateUrl: './women-productview.component.html',
  styleUrls: ['./women-productview.component.css']
})
export class WomenProductviewComponent implements OnInit {
  validatingForm: FormGroup;
  item:any;
  frontImage:any;
  backImage:any;
  leftImage:any;
  rightImage:any;

  constructor(private activatedRouter:ActivatedRoute,private menService:MenSubcategoryService,private router:Router,private customerService:CustomerRegistrationService) {
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required)

   })
  }
  amount:any;
  title = 'payment';
 onPay(){
  if(this.isLoggedIn()){
   this.menService.createOrder(this.amount).subscribe(data=>{
     console.log(data.id);
     console.log(data);
     alert("first api call");
     var options = {
      "key": "rzp_test_MqoJug1nXNqVws", // Enter the Key ID generated from the Dashboard
      "amount": "10000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
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

  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.paramMap.get('id');
    this.menService.product_detail(id).subscribe((data: { productImageFront: any; productImageBack: any; productImageLeft: any; productImageRight: any; })=>{
      this.item = data;
      this.frontImage = data.productImageFront;
      this.backImage = data.productImageBack;
      this.leftImage = data.productImageLeft;
      this.rightImage = data.productImageRight;
      console.log(data);
    })

  }
  imageChange(currentImage:string){
   this.frontImage = currentImage;
  }
  buyNow(){

  }
  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }
  isLoggedIn():boolean{
    return this.customerService.checkToken();
  }
  addToCart(id:any,event: any){
    console.log(event);
    if(this.isLoggedIn()){

    if(event.textContent == "Add To Cart"){
      alert("Add to cart Tp remove to cart change");
      this.menService.addCart(id).subscribe(data=>{
            alert("add to cart");
      event.textContent = "Remove cart";
        console.log(data);
      })
    }
    else{
       this.menService.removeCart(id).subscribe(data=>{
     alert("remove to cart");
       event.textContent = "Add To Cart";
       })
    }
  }
  else{
    alert("First login required");
    this.router.navigate(['signIn']);
  }
}
}
