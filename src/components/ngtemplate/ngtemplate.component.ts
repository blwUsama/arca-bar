import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Image } from 'src/app/core/image';
@Component({
  selector: 'app-ngtemplate',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './ngtemplate.component.html',
  styleUrls: ['./ngtemplate.component.scss'],
})
export class NgtemplateComponent implements OnInit {
  images!: Image[];

  ngOnInit(): void {
    this.images = [
      { source: 'assets/images/arca2.jpg' },
      { source: 'assets/images/arca3.jpg' },
      { source: 'assets/images/arca12.jpg' },
    ];
  }
}
