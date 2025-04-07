import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  isMobile = window.innerWidth <= 990;
  constructor(private elementRef: ElementRef) { }

  flipCard(id:string) {
      var inner = this.elementRef.nativeElement.querySelector('#'+id);
      if ((window.innerWidth <= 800)) {
      if (inner.style.transform === "rotateY(0deg)" || inner.style.transform === "") {
        inner.style.transform = "rotateY(180deg)";
      } else {
        inner.style.transform = "rotateY(0deg)";
      }
    }
  }

}
