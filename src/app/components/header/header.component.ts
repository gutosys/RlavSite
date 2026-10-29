import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header id="Header" [class.is-sticky]="isSticky">
      <div class="scroll-progress-bar" [style.width.%]="scrollProgress"></div>
      <div class="container">
        <div class="header-inner">
          <div class="logo">
            <a routerLink="/" title="RLAV Lavanderia Autônoma">
              <img src="wp-content/uploads/2023/08/rlav-logo-site-01.png" alt="RLAV Lavanderia Autônoma" height="42">
            </a>
          </div>

          <!-- Desktop Navigation -->
          <nav id="menu" class="desktop-menu">
            <ul class="menu-main">
              <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
              <li><a routerLink="/sobre" routerLinkActive="active">Sobre</a></li>
              <li><a routerLink="/promocoes" routerLinkActive="active">Promoções</a></li>
              <li><a routerLink="/valores" routerLinkActive="active">Valores</a></li>
              <li><a routerLink="/unidades" routerLinkActive="active">Unidades</a></li>
              <li><a routerLink="/contato" routerLinkActive="active">Contato</a></li>
              <li><a routerLink="/seja-um-franqueado" routerLinkActive="active" class="franchise-link">Seja Um Franqueado</a></li>
            </ul>
          </nav>

          <!-- Mobile Toggle Button -->
          <button class="mobile-toggle" (click)="toggleMobileMenu()" aria-label="Abrir menu">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer Overlay -->
    <div class="mobile-drawer-overlay" [class.open]="isMobileMenuOpen" (click)="closeMobileMenu()"></div>

    <!-- Mobile Navigation Side Drawer -->
    <aside class="mobile-drawer" [class.open]="isMobileMenuOpen">
      <div class="drawer-header">
        <img src="wp-content/uploads/2023/08/rlav-logo-site-01.png" alt="RLAV" height="32">
        <button class="close-drawer" (click)="closeMobileMenu()" aria-label="Fechar menu">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <nav class="mobile-menu-list">
        <ul>
          <li><a routerLink="/" (click)="closeMobileMenu()" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
          <li><a routerLink="/sobre" (click)="closeMobileMenu()" routerLinkActive="active">Sobre</a></li>
          <li><a routerLink="/promocoes" (click)="closeMobileMenu()" routerLinkActive="active">Promoções</a></li>
          <li><a routerLink="/valores" (click)="closeMobileMenu()" routerLinkActive="active">Valores</a></li>
          <li><a routerLink="/unidades" (click)="closeMobileMenu()" routerLinkActive="active">Unidades</a></li>
          <li><a routerLink="/contato" (click)="closeMobileMenu()" routerLinkActive="active">Contato</a></li>
          <li><a routerLink="/seja-um-franqueado" (click)="closeMobileMenu()" routerLinkActive="active" class="franchise-highlight">Seja Um Franqueado</a></li>
        </ul>
      </nav>

      <div class="drawer-footer">
        <p>Siga-nos nas redes:</p>
        <a href="https://www.instagram.com/rlav_lavanderia/" target="_blank" rel="noopener" class="social-icon">
          <i class="fa-brands fa-instagram"></i> Instagram
        </a>
      </div>
    </aside>
  `,
  styles: [`
    #Header {
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 10px rgba(0,0,0,0.06);
      transition: all 0.3s ease;
    }

    #Header.is-sticky {
      background-color: rgba(255, 255, 255, 0.88);
      backdrop-filter: blur(16px);
      box-shadow: 0 6px 24px rgba(46, 90, 168, 0.12);
      padding: 3px 0;
    }

    .scroll-progress-bar {
      position: absolute;
      top: 0;
      left: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--primary-blue), var(--accent-cyan));
      transition: width 0.1s ease-out;
      z-index: 1001;
    }

    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
    }

    .logo img {
      display: block;
      height: 42px;
      width: auto;
    }

    .desktop-menu .menu-main {
      display: flex;
      list-style: none;
      gap: 25px;
      align-items: center;
    }

    .desktop-menu .menu-main a {
      font-family: var(--font-body);
      font-size: 15px;
      font-weight: 600;
      color: #333333;
      padding: 8px 4px;
      position: relative;
      transition: color 0.3s ease;
    }

    .desktop-menu .menu-main a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background-color: var(--primary-blue);
      border-radius: 2px;
      transition: width 0.3s ease;
    }

    .desktop-menu .menu-main a:hover,
    .desktop-menu .menu-main a.active {
      color: var(--primary-blue);
    }

    .desktop-menu .menu-main a.active::after,
    .desktop-menu .menu-main a:hover::after {
      width: 100%;
    }

    .desktop-menu .menu-main a.franchise-link {
      background-color: var(--primary-blue);
      color: #ffffff !important;
      padding: 8px 18px;
      border-radius: 20px;
    }

    .desktop-menu .menu-main a.franchise-link::after {
      display: none;
    }

    .desktop-menu .menu-main a.franchise-link:hover {
      background-color: var(--dark-blue);
    }

    .mobile-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 24px;
      color: var(--primary-blue);
      cursor: pointer;
      padding: 8px;
    }

    /* Mobile Drawer */
    .mobile-drawer-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0,0,0,0.5);
      z-index: 1050;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }

    .mobile-drawer-overlay.open {
      opacity: 1;
      visibility: visible;
    }

    .mobile-drawer {
      position: fixed;
      top: 0;
      right: -300px;
      width: 280px;
      height: 100vh;
      background: #ffffff;
      z-index: 1100;
      box-shadow: -5px 0 25px rgba(0,0,0,0.15);
      transition: right 0.3s ease;
      display: flex;
      flex-direction: column;
      padding: 25px 20px;
    }

    .mobile-drawer.open {
      right: 0;
    }

    .drawer-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      border-bottom: 1px solid #eeeeee;
      padding-bottom: 15px;
    }

    .close-drawer {
      background: none;
      border: none;
      font-size: 22px;
      color: #333333;
      cursor: pointer;
    }

    .mobile-menu-list ul {
      list-style: none;
    }

    .mobile-menu-list li {
      margin-bottom: 15px;
    }

    .mobile-menu-list a {
      font-size: 16px;
      font-weight: 600;
      color: #333333;
      display: block;
      padding: 8px 0;
    }

    .mobile-menu-list a.active {
      color: var(--primary-blue);
    }

    .mobile-menu-list a.franchise-highlight {
      background-color: var(--primary-blue);
      color: #ffffff !important;
      padding: 10px 16px;
      border-radius: 8px;
      text-align: center;
      margin-top: 15px;
    }

    .drawer-footer {
      margin-top: auto;
      border-top: 1px solid #eeeeee;
      padding-top: 20px;
      font-size: 14px;
    }

    .social-icon {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-top: 10px;
      font-weight: 500;
    }

    @media (max-width: 991px) {
      .desktop-menu {
        display: none;
      }

      .mobile-toggle {
        display: block;
      }
    }
  `]
})
export class HeaderComponent {
  isSticky = false;
  isMobileMenuOpen = false;
  scrollProgress = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!isPlatformBrowser(this.platformId)) return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isSticky = scrollTop > 50;

    const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (winHeight > 0) {
      this.scrollProgress = (scrollTop / winHeight) * 100;
    } else {
      this.scrollProgress = 0;
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}

