import { Component } from '@angular/core';

@Component({
  selector: 'app-growth-story',
  templateUrl: './growth-story.component.html',
  styleUrls: ['./growth-story.component.css']
})
export class GrowthStoryComponent {
  isMobile = window.innerWidth <= 768; 
}
