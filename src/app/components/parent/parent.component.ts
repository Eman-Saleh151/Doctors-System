import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
parentArr :any =[
  {
    id : 1,
    img:'https://media.istockphoto.com/photos/smiling-female-doctor-picture-id176796285?k=20&m=176796285&s=612x612&w=0&h=V7B5nHnZsT5Tbpn80gezmozEo7IeRYcKN-VkXPv0RqQ=',
  name:"Aya Amgd",
  title:"Dental and Cosmetic Dental Center",
  Fees:"300 EGP" ,

},
{
  id : 2,
  img:'https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4=',
name:"Ehab Mahr",
title:"cardiologist",
Fees:"400 EGP"
},
  
]
  constructor() { }

  ngOnInit(): void {
  }

}
