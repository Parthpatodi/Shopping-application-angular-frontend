import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-women-productview',
  templateUrl: './women-productview.component.html',
  styleUrls: ['./women-productview.component.css']
})
export class WomenProductviewComponent implements OnInit {

  constructor(private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.paramMap.get('id');
    alert(id);
  }

}
