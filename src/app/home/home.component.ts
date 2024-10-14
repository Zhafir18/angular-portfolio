import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { RouterLink } from '@angular/router';
// import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  private rotationIntervals: any[] = [];
  private stopTimeouts: any[] = [];

  projects = [
    {
      title: 'Perbara',
      image: '/assets/perbara.jpg',
      description: 'Perbara',
      id: 'perbara-image',
    },
    {
      title: 'SiPenarik',
      image: '/assets/Sipenarik.jpg',
      description: 'Si Penarik',
      id: 'sipenarik-image',
    },
    {
      title: 'My Diet Kitchen',
      image: '/assets/Mydietkitchen.jpg',
      description: 'My Diet Kitchen',
      id: 'mydietkitchen-image',
    },
  ];

  ngOnInit() {
    this.startRotation();
    (window as any).AOS.init();
  }

  ngOnDestroy() {
    this.rotationIntervals.forEach(clearInterval);
    this.stopTimeouts.forEach(clearTimeout);
  }

  startRotation() {
    this.rotationIntervals.push(
      setInterval(() => {
        this.rotateImage('angular-image', 'rotate-right', 'rotate-left');
      }, 10000)
    );

    this.rotationIntervals.push(
      setInterval(() => {
        this.rotateImage('java-image', 'rotate-left', 'rotate-right');
      }, 12000)
    );

    this.rotationIntervals.push(
      setInterval(() => {
        this.rotateImage('dotnet-image', 'rotate-right', 'rotate-left');
      }, 15000)
    );
  }

  rotateImage(imageId: string, rotateClass: string, stopClass: string) {
    const image = document.getElementById(imageId);
    if (image) {
      image.classList.add(rotateClass);
      setTimeout(() => {
        image.classList.remove(rotateClass);
        image.classList.add('stop');
        setTimeout(() => {
          image.classList.remove('stop');
          image.classList.add(
            rotateClass === 'rotate-right' ? 'rotate-left' : 'rotate-right'
          );
        }, 10000);
      }, 15000);
    }
  }

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  }
}
