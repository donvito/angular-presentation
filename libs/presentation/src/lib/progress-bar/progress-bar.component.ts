import { AfterViewInit, Component } from '@angular/core';
import { PresentationComponent } from '../presentation/presentation.component';

@Component({
  selector: 'slides-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements AfterViewInit {
  slides = [];
  currentSlideId = 0;
  tempSlideId = 0;

  constructor(public presentation: PresentationComponent) {
  }

  ngAfterViewInit() {
    // Change detection complains if updating it right away.
    requestAnimationFrame(() => {
      this.slides = this.presentation.slides;
    });

    this.presentation.onSlideChange.subscribe(() => {
      this.currentSlideId = this.presentation.activeSlideIndex;
    });
  }

  previewSlide(index) {
    this.tempSlideId = this.currentSlideId;
    this.presentation.goToSlide(index);
  }

  goToSlide(index) {
    this.presentation.goToSlide(index);
    this.tempSlideId = this.currentSlideId;
  }
}
