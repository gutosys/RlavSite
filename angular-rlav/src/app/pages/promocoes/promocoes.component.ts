import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-promocoes',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollRevealDirective],
  template: `
    <section class="page-banner yellow-banner">
      <div class="container text-center" appScrollReveal revealClass="reveal-fade-up">
        <h1>Promoções Especiais</h1>
        <p>Aproveite os melhores preços para lavar e secar suas roupas com alta qualidade</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="promo-box" appScrollReveal revealClass="reveal-zoom">
          <div class="promo-badge">PROMOÇÃO DA SEMANA</div>
          <h2>Cestão RLAV por apenas <span>R$ 16,90</span></h2>
          <p class="promo-sub">Válido para Lavar ou Secar cada cesto padronizado!</p>

          <div class="promo-features row" style="margin-top: 40px;">
            <div class="one-third" appScrollReveal revealClass="reveal-fade-up" revealDelay="delay-100">
              <div class="card-box">
                <i class="fa-solid fa-shirt feature-icon"></i>
                <h5>Até 10kg por Cesto</h5>
                <p>Capacidade para lavar ou secar um volume completo de roupas com máxima eficiência.</p>
              </div>
            </div>

            <div class="one-third" appScrollReveal revealClass="reveal-fade-up" revealDelay="delay-200">
              <div class="card-box">
                <i class="fa-solid fa-bottle-droplet feature-icon"></i>
                <h5>Insumos Inclusos</h5>
                <p>Detergentes OMO concentrado e Amaciante Comfort adicionados automaticamente.</p>
              </div>
            </div>

            <div class="one-third" appScrollReveal revealClass="reveal-fade-up" revealDelay="delay-300">
              <div class="card-box">
                <i class="fa-solid fa-bolt feature-icon"></i>
                <h5>Rápido e Prático</h5>
                <p>Ciclos ultra-rápidos para você economizar tempo no seu dia a dia.</p>
              </div>
            </div>
          </div>

          <div class="promo-cta text-center" style="margin-top: 50px;">
            <a routerLink="/unidades" class="button button_yellow">Ver Unidades Próximas</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .yellow-banner {
      background: linear-gradient(135deg, #ffcc00 0%, #e6b800 100%);
      color: #222222;
      padding: 70px 0;
    }

    .yellow-banner h1 {
      color: #222222;
      font-size: 46px;
    }

    .yellow-banner p {
      color: #333333;
      font-size: 18px;
    }

    .promo-box {
      background: #ffffff;
      border-radius: 20px;
      padding: 50px 30px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.08);
      border: 2px solid #ffcc00;
      position: relative;
    }

    .promo-badge {
      display: inline-block;
      background: #ffcc00;
      color: #222222;
      font-weight: 700;
      padding: 8px 20px;
      border-radius: 20px;
      font-size: 13px;
      letter-spacing: 1px;
      margin-bottom: 20px;
    }

    .promo-box h2 {
      font-size: 40px;
      margin-bottom: 10px;
    }

    .promo-box h2 span {
      color: var(--primary-blue);
      font-weight: 800;
    }

    .promo-sub {
      font-size: 18px;
      color: #666666;
    }

    .feature-icon {
      font-size: 42px;
      color: var(--primary-blue);
      margin-bottom: 15px;
    }
  `]
})
export class PromocoesComponent {}

