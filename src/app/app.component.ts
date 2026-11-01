import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  menuOpen = false;
  showTop = false;
linkedinUrl =
  'https://www.linkedin.com/in/sunil-nutakki-92618a230/';
  @HostListener('window:scroll') onWindowScroll(): void {
    this.showTop = window.scrollY > 350;
  }

  closeMenu(): void { this.menuOpen = false; }
  scrollTop(): void { window.scrollTo({ top: 0, behavior: 'smooth' }); }
}
