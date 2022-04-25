import { Component, OnInit } from '@angular/core';
import {WomenSubcategoryService} from '../women-subcategory.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  data:any='';
  name:string = '';
  email:string = '';
  address:string = '';
  mobile:string = '';
  order_history = '';
  constructor(private womenService: WomenSubcategoryService,private router:Router) { }

  ngOnInit(): void {
    this.womenService.profile().subscribe(result=>{

     console.log(result);
     this.data = result;
    })
  }
  orderHistory(){
    this.womenService.orderhist().subscribe(result=>{
      console.log(result);
      this.order_history = result;
      alert(result);
  })
}
  saveData() {
    this.womenService.editProfile(this.name,this.email,this.address,this.mobile).subscribe(result=>{
      if(result.modifiedCount)
      alert("saved success");
      else{
        alert("not saved")
      }
    })
  }
}
