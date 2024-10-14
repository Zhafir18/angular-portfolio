import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() darkTheme: boolean = false;
  @Output() themeToggle = new EventEmitter<void>();

  toggleTheme() {
    this.themeToggle.emit();
  }
}
