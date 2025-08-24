import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-growth-story',
  templateUrl: './growth-story.component.html',
  styleUrls: ['./growth-story.component.css']
})
export class GrowthStoryComponent implements OnInit {
  isMobile = window.innerWidth <= 990;
  length: number = 0;
  growthStory = [
    {
      year: 2019,
      summary: "2 Outlets",
      events: [
        { month: "MARCH", title: "Startup", description: "FOOD TRUCK" },
        { month: "JULY", title: "OUTLET NO. 1", description: "VASANT VIHAR, THANE" },
        { month: "DECEMBER", title: "OUTLET NO. 2", description: "HARINIWAS CIRCLE, THANE" }
      ]
    },
    {
      year: 2021,
      summary: "1 Outlet, 5 Franchises",
      events: [
        { month: "APRIL", title: "Kitchen", description: "CENTRAL KITCHEN" },
        { month: "FEBRUARY", title: "OUTLET NO. 3", description: "HIRANANDANI ESTATE" },
        { month: "AUGUST", title: "FRANCHISE NO. 1", description: "AIROLI" },
        { month: "OCTOBER", title: "FRANCHISE NO. 2", description: "MALAD" },
        { month: "NOVEMBER", title: "FRANCHISE NO. 3", description: "MULUND" },
        { month: "NOVEMBER", title: "OUTLET NO. 4", description: "THANE STATION" },
        { month: "DECEMBER", title: "FRANCHISE NO. 4", description: "THAKUR VILLAGE" }
      ]
    },
    {
      year: 2022,
      summary: "4 Franchises",
      events: [
        { month: "JANUARY", title: "FRANCHISE NO. 5", description: "KORUM, THANE" },
        { month: "JANUARY", title: "FRANCHISE NO. 6", description: "NALLASOPARA" },
        { month: "FEBRUARY", title: "FRANCHISE NO. 7", description: "DOMBIVALI" },
        { month: "SEPTEMBER", title: "FRANCHISE NO. 8", description: "DOMBIVALI" }
      ]
    },
    {
      year: 2023,
      summary: "10 Franchises",
      events: [
        { month: "FEBRUARY", title: "FRANCHISE NO. 9", description: "MAROL" },
        { month: "MARCH", title: "FRANCHISE NO. 10", description: "MIRA ROAD" },
        { month: "MAY", title: "FRANCHISE NO. 11", description: "KALYAN" },
        { month: "JUNE", title: "FRANCHISE NO. 12", description: "KOTHRUD, PUNE" },
        { month: "JUNE", title: "OUTLET NO. 13", description: "ULHASNAGAR" },
        { month: "JULY", title: "FRANCHISE NO. 14", description: "KOREGAON, PUNE" },
        { month: "SEPTEMBER", title: "FRANCHISE NO. 15", description: "ANDHERI, LOKHANDWALA" },
        { month: "SEPTEMBER", title: "FRANCHISE NO. 16", description: "SEAWOODS" },
        { month: "NOVEMBER", title: "FRANCHISE NO. 17", description: "BADLAPUR" },
        { month: "DECEMBER", title: "FRANCHISE NO. 18", description: "CHEMBUR" }
      ]
    },
    {
      year: 2024,
      summary: "1 Outlet, 8 Franchises",
      events: [
        { month: "JANUARY", title: "FRANCHISE NO. 19", description: "GHATKOPAR" },
        { month: "JANUARY", title: "FRANCHISE NO. 20", description: "Parel" },
        { month: "MARCH", title: "FRANCHISE NO. 21", description: "MATUNGA" },
        { month: "APRIL", title: "FRANCHISE NO. 22", description: "SALUNKHE VIHAR, PUNE" },
        { month: "JULY", title: "FRANCHISE NO. 23", description: "VILE PARLE" },
        { month: "SEPTEMBER", title: "FRANCHISE NO. 24", description: "AUNDH, PUNE" },
        { month: "OCTOBER", title: "FRANCHISE NO. 25", description: "MAGARPATTA, PUNE" },
        { month: "OCTOBER", title: "OUTLET NO. 5", description: "KALWA" },
        { month: "DECEMBER", title: "FRANCHISE NO. 26", description: "METRO MALL, KALYAN" }
      ]
    },
    {
      year: 2025,
      summary: "1 Outlets, 4 Franchises",
      events: [
        { month: "MARCH", title: "FRANCHISE NO. 27", description: "VIMAN NAGAR, PUNE" },
        { month: "APRIL", title: "OUTLET NO. 9", description: "SINHGAD ROAD, PUNE" },
        { month: "APRIL", title: "FRANCHISE NO. 28", description: "BHARATI VIDYAPEETH, PUNE" },
        { month: "JULY", title: "OUTLET NO. 10", description: "KHAR" },
        { month: "AUGUST", title: "FRANCHISE NO. 29", description: "ULWE" },
      ]
    }
  ];


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
