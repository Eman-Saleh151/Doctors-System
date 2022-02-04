import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  // pageTitle='ITI Doctors';
  // arr=['nada','heba','maha'];
  // twoway="";

  // getList(key:number){
  //   return this.arr[key];
  // }
  // @Input() attName="";
  // @Input() attAge="";
 @Input() obj:any={};
//  name=this.obj;
  constructor() { 

  }
  ngOnInit(): void {
  }

}
