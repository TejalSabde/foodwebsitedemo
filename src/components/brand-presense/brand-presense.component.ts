import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-brand-presense',
  templateUrl: './brand-presense.component.html',
  styleUrls: ['./brand-presense.component.css']
})
export class BrandPresenseComponent {

  constructor(private elementRef: ElementRef) { }

  toggleClass(id:string) {
    let btn = document.getElementById(id);
    let ul = document.getElementById(id + '-list');
    
    btn!.classList.toggle('active');
    ul!.classList.toggle('show');
  }
}
