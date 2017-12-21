import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	productdata: Object;
  constructor() { 
  	this.productdata = [{
  		id:1,
  		title:"abc",
  		price:"150",
  		image:"assets/img/product.jpg",
  		description:"A div element with a shadow. The first value is the horizontal offset and the second value is the vertical offset."
  	},{
  		id:2,
  		title:"def",
  		price:"670",
  		image:"assets/img/pro1.jpg",
  		description:"A div element with a shadow. The first value is the horizontal offset and the second value is the vertical offset."
  	},{
  		id:3,
  		title:"efd",
  		price:"330",
  		image:"assets/img/pro2.jpg",
  		description:"A div element with a shadow. The first value is the horizontal offset and the second value is the vertical offset."
  	},{
  		id:4,
  		title:"test4",
  		price:"460",
  		image:"assets/img/pro3.jpg",
  		description:"A div element with a shadow. The first value is the horizontal offset and the second value is the vertical offset."
  	},{
  		id:5,
  		title:"test5",
  		price:"830",
  		image:"assets/img/pro4.jpg",
  		description:"A div element with a shadow. The first value is the horizontal offset and the second value is the vertical offset."
  	},{
  		id:6,
  		title:"test6",
  		price:"230",
  		image:"assets/img/pro5.jpg",
  		description:"A div element with a shadow. The first value is the horizontal offset and the second value is the vertical offset."
  	},{
  		id:7,
  		title:"test7",
  		price:"450",
  		image:"assets/img/pro6.jpg",
  		description:"A div element with a shadow. The first value is the horizontal offset and the second value is the vertical offset."
  	},{
  		id:8,
  		title:"abc",
  		price:"120",
  		image:"assets/img/pro7.jpg",
  		description:"A div element with a shadow. The first value is the horizontal offset and the second value is the vertical offset."
  	}]
  }

  ngOnInit() {
  }

}
