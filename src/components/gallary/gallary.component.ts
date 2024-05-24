import { Component, OnInit, VERSION, ViewEncapsulation } from "@angular/core";
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lightGallery from "lightgallery";

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GallaryComponent implements OnInit {
  

  name = "Angular " + VERSION.major;
  // settings = {
  //   counter: false,
  //   plugins: [lgZoom]
  // };
  // onBeforeSlide = (detail: BeforeSlideDetail): void => {
  //   const { index, prevIndex } = detail;
  //   console.log(index, prevIndex);
  // };
  ngOnInit(): void {
    window.scrollTo(0, 0);

    const container = document.querySelector('#bootstrap-image-gallery') as HTMLElement;
    if (container) {
      lightGallery(container, {
        selector: '.lg-item',
        plugins: [lgZoom]
      });
    }
  }
}
