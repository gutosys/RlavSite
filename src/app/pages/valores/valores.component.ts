import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-valores',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollRevealDirective],
  template: `
    <section class="page-banner">
      <div class="container text-center" appScrollReveal revealClass="reveal-fade-up">
        <h1>Nossos Valores</h1>
        <p class="text-into-banner">Transparência total e o melhor custo-benefício em lavanderia autônoma</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="row">
          <!-- Lavar Card -->
          <div class="one-second" appScrollReveal revealClass="reveal-fade-right">
            <div class="card-box service-price-card">
              <div class="service-icon">
                <img src="wp-content/uploads/2023/09/lavagem-autonoma-rlav-150x150.png" alt="Lavar">
              </div>
              <h3>Ciclo de Lavagem</h3>
              <div class="price-badge">R$ 16,90 <span>/ cesto</span></div>
              <p>Lavagem de alta eficiência industrial para até 10kg de roupas.</p>
              <ul class="service-checklist">
                <li><i class="fa-solid fa-check"></i> Dosagem automática de Sabão OMO Líquido</li>
                <li><i class="fa-solid fa-check"></i> Dosagem automática de Amaciante Comfort</li>
                <li><i class="fa-solid fa-check"></i> Água filtrada e higienizada</li>
                <li><i class="fa-solid fa-check"></i> Ciclo completo em ~30 minutos</li>
              </ul>
            </div>
          </div>

          <!-- Secar Card -->
          <div class="one-second" appScrollReveal revealClass="reveal-fade-left">
            <div class="card-box service-price-card">
              <div class="service-icon">
                <img src="wp-content/uploads/2023/09/secar-lavanderia-autonoma-rlav.png" alt="Secar">
              </div>
              <h3>Ciclo de Secagem</h3>
              <div class="price-badge cyan-bg">R$ 16,90 <span>/ cesto</span></div>
              <p>Secagem rápida e cuidadosa que deixa suas roupas prontas para usar.</p>
              <ul class="service-checklist">
                <li><i class="fa-solid fa-check"></i> Temperatura controlada por sensores</li>
                <li><i class="fa-solid fa-check"></i> Proteção de fibras e tecidos delicados</li>
                <li><i class="fa-solid fa-check"></i> Roupas macias e sem amassados profundos</li>
                <li><i class="fa-solid fa-check"></i> Ciclo completo em ~45 minutos</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Formas de Pagamento -->
        <div class="payment-methods text-center" style="margin-top: 60px;" appScrollReveal revealClass="reveal-zoom">
          <h3>Formas de Pagamento Aceitas</h3>
          <p>Facilidade total na hora de pagar direto nos terminais autônomos</p>
          <div class="payment-icons">
            <span class="pay-chip"><i class="fa-solid fa-qrcode"></i> PIX Instantâneo</span>
            <span class="pay-chip"><i class="fa-solid fa-credit-card"></i> Cartão de Crédito</span>
            <span class="pay-chip"><i class="fa-solid fa-credit-card"></i> Cartão de Débito</span>
            <span class="pay-chip"><i class="fa-solid fa-mobile-screen"></i> Pagamento por Aproximação</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-banner {
      background: linear-gradient(135deg, var(--primary-blue) 0%, var(--dark-blue) 100%);
      color: #ffffff;
      padding: 70px 0;
    }

    .page-banner h1 {
      color: #ffffff;
      font-size: 46px;
    }

    .text-into-banner {
      color: #ffffff;
      font-size: 16px;
    }

    .service-price-card {
      align-items: center;
      padding: 40px;
    }

    .service-icon img {
      width: 100px;
      height: 100px;
      margin-bottom: 20px;
    }

    .price-badge {
      font-size: 36px;
      font-weight: 800;
      color: var(--primary-blue);
      background: #eef4ff;
      padding: 10px 25px;
      border-radius: 30px;
      margin: 20px 0;
    }

    .price-badge.cyan-bg {
      color: #0088cc;
      background: #e6f7ff;
    }

    .price-badge span {
      font-size: 14px;
      font-weight: 400;
      color: #666666;
    }

    .service-checklist {
      list-style: none;
      text-align: left;
      width: 100%;
      margin-top: 20px;
    }

    .service-checklist li {
      margin-bottom: 12px;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .service-checklist i {
      color: var(--primary-blue);
    }

    .payment-icons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px;
      margin-top: 25px;
    }

    .pay-chip {
      background: #f0f4f8;
      border: 1px solid #d0deea;
      padding: 12px 24px;
      border-radius: 30px;
      font-weight: 600;
      color: var(--text-dark);
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }
  `]
})
export class ValoresComponent { }
