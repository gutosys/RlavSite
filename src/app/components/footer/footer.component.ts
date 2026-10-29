import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer id="Footer">
      <div class="widgets-wrapper">
        <div class="container text-center">
          <div class="footer-logo">
            <img src="wp-content/uploads/2023/09/rlav-logo-reint2a.png" alt="RLAV Lavanderia Logo" height="50">
          </div>
          <p class="footer-desc">
            Com nossa lavagem autônoma de alta tecnologia, proporcionamos resultados<br>
            excepcionais enquanto você desfruta da conveniência de nossos serviços.
          </p>

          <div class="social-links">
            <a href="https://www.instagram.com/rlav_lavanderia/" target="_blank" rel="noopener" aria-label="Instagram">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-copy">
        <div class="container footer-copy-inner">
          <div class="copyright">
            Rlav Lavanderia Autônoma - Americana SP
          </div>
          <nav class="footer-nav">
            <ul>
              <li><a routerLink="/home">Home</a></li>              
            </ul>
          </nav>
        </div>
      </div>

      <!-- Back to top button -->
      <button class="back-to-top" (click)="scrollToTop()" aria-label="Voltar ao topo">
        <i class="fa-solid fa-chevron-up"></i>
      </button>
    </footer>
  `,
  styles: [`
    #Footer {
      background-color: #EDF3F8;
      color: #aaaaaa;
      font-size: 14px;
      position: relative;
    }

    .widgets-wrapper {
      padding: 80px 0 50px 0;
      border-bottom: 1px solid #222222;
    }

    .footer-logo {
      margin-bottom: 25px;
    }

    .footer-desc {
      max-width: 650px;
      margin: 0 auto 30px auto;
      color: #000000;
      line-height: 1.8;
    }

    .social-links a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #222222;
      color: #ffffff;
      font-size: 18px;
      transition: all 0.3s ease;
    }

    .social-links a:hover {
      background: var(--primary-blue);
      transform: translateY(-3px);
    }

    .footer-copy {
      padding: 25px 0;
      background-color: #0a0a0a;
    }

    .footer-copy-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 15px;
    }

    .copyright {
      color: #888888;
      font-weight: 400;
    }

    .footer-nav ul {
      display: flex;
      list-style: none;
      gap: 20px;
    }

    .footer-nav a {
      color: #aaaaaa;
      font-size: 13px;
      transition: color 0.3s ease;
    }

    .footer-nav a:hover {
      color: #ffffff;
    }

    .back-to-top {
      position: fixed;
      bottom: 25px;
      right: 25px;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background-color: var(--primary-blue);
      color: #ffffff;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      z-index: 999;
      transition: all 0.3s ease;
    }

    .back-to-top:hover {
      background-color: var(--accent-cyan);
      transform: translateY(-3px);
    }

    @media (max-width: 767px) {
      .footer-copy-inner {
        flex-direction: column;
        text-align: center;
      }

      .footer-nav ul {
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
