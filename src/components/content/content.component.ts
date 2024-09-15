import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { Subscription, fromEvent, tap } from 'rxjs';
import { Image } from '../../app/core/image';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    CarouselModule,
    DialogModule,
    ButtonModule,
    TranslateModule,
  ],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  carouselImages!: Image[];
  galleryImages!: Image[];
  selectedImage: Image | null = null;
  isVisible: boolean = false;
  scrollSubscription!: Subscription;

  ngOnInit(): void {
    this.carouselImages = [
      { source: 'assets/images/carousel-image1.jpg' },
      { source: 'assets/images/carousel-image2.jpg' },
      { source: 'assets/images/carousel-image3.jpg' },
    ];

    this.galleryImages = [
      { source: 'assets/images/arca-gallery1.jpg' },
      { source: 'assets/images/arca-gallery2.jpg' },
      { source: 'assets/images/arca-gallery3.jpg' },
      { source: 'assets/images/arca-gallery4.jpg', isTall: true },
      { source: 'assets/images/arca-gallery5.jpg' },
      { source: 'assets/images/arca-gallery6.jpg' },
      { source: 'assets/images/arca-gallery7.jpg', isTall: true },
      { source: 'assets/images/arca-gallery8.jpg' },
      { source: 'assets/images/arca-gallery9.jpg' },
      { source: 'assets/images/arca-gallery10.jpg' },
      { source: 'assets/images/arca-gallery11.jpg' },
      { source: 'assets/images/arca-gallery12.jpg' },
    ];

    this.setUpScrollListener();
  }

  showImage(index: number): void {
    this.isVisible = true;
    this.selectedImage = this.galleryImages[index];
    const rootElement = document.getElementById('html-tag');
    if (rootElement) {
      rootElement.classList.add('modal-open');
    }
  }

  hideImage(): void {
    this.isVisible = false;
    this.selectedImage = null;
    const rootElement = document.getElementById('html-tag');
    if (rootElement) {
      rootElement.classList.remove('modal-open');
    }
  }

  setUpScrollListener() {
    this.scrollSubscription = fromEvent(window, 'scroll')
      .pipe(
        tap((event: Event) => {
          if (this.isVisible) {
            event.preventDefault();
            console.log('scrolling with modal open');
          }
        })
      )
      .subscribe();
  }
}
