import { Component, inject, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  darkTheme: boolean = false;
  isFrontOpen: boolean = false;
  isBackOpen: boolean = false;

  router = inject(Router);

  ngOnInit(): void {
    (window as any).AOS.init();
  }

  certificates = [
    { title: 'Certificate 1', imgUrl: '/assets/sertifikat1.jpg' },
    { title: 'Certificate 2', imgUrl: '/assets/sertifikat1.jpg' },
    { title: 'Certificate 3', imgUrl: '/assets/sertifikat1.jpg' },
  ];

  frontendSkills = [
    {
      name: 'HTML',
      imgUrl: '/assets/html.png',
      description:
        'HTML (HyperText Markup Language) is the standard language for creating and structuring web pages. HTML provides the basic structure for web pages using elements such as headers, paragraphs, and links.',
    },
    {
      name: 'CSS',
      imgUrl: '/assets/css.svg',
      description:
        'CSS (Cascading Style Sheets) is used to design and format the presentation of web pages written in HTML. CSS allows you to style elements such as colors, fonts, layouts, and other visual aspects of a web page.',
    },
    {
      name: 'JavaScript',
      imgUrl: '/assets/js.png',
      description:
        'JavaScript is a programming language used to create interactive web pages. JavaScript enables dynamic content manipulation, event handling, and server interaction to enhance user experience on websites.',
    },
    {
      name: 'TypeScript',
      imgUrl: '/assets/ts.png',
      description:
        'TypeScript is a superset of JavaScript that adds static typing to the language. TypeScript helps in building larger applications by providing type checking and modern features such as classes and interfaces.',
    },
    {
      name: 'Angular',
      imgUrl: '/assets/Angular_full_color_logo.svg.png',
      description:
        'Angular is a web application framework developed by Google. Angular facilitates the development of single-page applications (SPAs) by using a component-based architecture, data binding, and dependency injection.',
    },
  ];

  backendSkills = [
    {
      name: 'Java',
      imgUrl: '/assets/java.png',
      description:
        'Java is an object-oriented programming language used for developing web, desktop, and mobile applications. Java is known for its portability, stability, and high performance, making it suitable for large-scale applications.',
    },
    {
      name: '.NET',
      imgUrl: '/assets/DotNet.png',
      description:
        '.NET is a software development framework developed by Microsoft. .NET provides a range of libraries and tools for building web, desktop, and mobile applications, and supports multiple programming languages such as C# and VB.NET.',
    },
    {
      name: 'PHP',
      imgUrl: '/assets/php.png',
      description:
        'PHP is a server-side scripting language used for dynamic web development. PHP is often used with MySQL databases to create data-driven web applications and is known for its ease of integration with HTML.',
    },
    {
      name: 'Oracle',
      imgUrl: '/assets/oracle.svg',
      description:
        'Oracle is a relational database management system (RDBMS) known for handling large and complex datasets. Oracle is widely used in business environments for applications that require high performance and robust data security.',
    },
  ];

  currentSlide = 0;

  toggleAccordion(section: string) {
    if (section === 'front') {
      console.log(section);
      this.isFrontOpen = !this.isFrontOpen;
    } else if (section === 'back') {
      console.log(section);
      this.isBackOpen = !this.isBackOpen;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  nextSlide() {
    if (this.currentSlide < this.certificates.length - 1) {
      this.currentSlide++;
    }
  }
}
