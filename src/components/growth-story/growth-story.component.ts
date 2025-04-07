import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-growth-story',
  templateUrl: './growth-story.component.html',
  styleUrls: ['./growth-story.component.css']
})
export class GrowthStoryComponent implements OnInit {
  isMobile = window.innerWidth <= 990;
  length: number = 0;

  @ViewChild('path') animatedPath!: ElementRef<SVGPathElement>;

  ngOnInit(): void {
    setTimeout(() => {
      // Get the total length of the path
      this.length = this.animatedPath.nativeElement.getTotalLength();
      // Set initial state of the path
      // this.animatedPath.nativeElement.style.strokeDasharray = '900, 900';
      // this.animatedPath.nativeElement.style.strokeDashoffset = '900';
    }, 2000);

  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // if (window.scrollY > 700) {
    //   let value = window.scrollY - 700;
    //   let offsetVal = (900 - value).toString();
    //   this.animatedPath.nativeElement.style.strokeDashoffset = offsetVal;
    // }
  }
}
