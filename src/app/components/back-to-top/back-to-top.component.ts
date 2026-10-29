import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      class="back-to-top-btn" 
      [class.show]="isVisible" 
      (click)="scrollToTop()" 
      aria-label="Voltar ao topo">
      <i class="fa-solid fa-chevron-up"></i>
    </button>
  `,
  styles: [`
    .back-to-top-btn {
      position: fixed;
      bottom: 95px;
      right: 25px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--primary-blue);
      color: #ffffff;
      border: none;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      z-index: 999;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px) scale(0.8);
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .back-to-top-btn.show {
      opacity: 1;
      visibility: visible;
      transform: translateY(0) scale(1);
    }

    .back-to-top-btn:hover {
      background: var(--dark-blue);
      transform: translateY(-4px) scale(1.08);
      box-shadow: 0 8px 25px rgba(46, 90, 168, 0.4);
    }

    @media (max-width: 767px) {
      .back-to-top-btn {
        bottom: 85px;
        right: 18px;
        width: 42px;
        height: 42px;
        font-size: 16px;
      }
    }
  `]
})
export class BackToTopComponent {
  isVisible = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isVisible = window.scrollY > 300;
    }
  }

  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
