import { Component, inject, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LoadingComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-portfolio';
  darkTheme: boolean = false;
  isLoading: boolean = true;
  private router = inject(Router);

  ngOnInit(): void {
    const storedTheme = window.localStorage.getItem('theme');
    this.darkTheme = storedTheme === 'dark';

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        //
        this.isLoading = true;
        // }, 40000);
      }
    });
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 2000);

    this.applyTheme();
  }

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    const theme = this.darkTheme ? 'dark' : 'light';
    window.localStorage.setItem('theme', theme);
    this.applyTheme();
  }

  applyTheme() {
    document.body.classList.toggle('dark-theme', this.darkTheme);
  }
}
