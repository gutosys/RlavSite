import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-franqueado',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollRevealDirective],
  template: `
    <section class="page-banner franchise-hero">
      <div class="container text-center" appScrollReveal revealClass="reveal-fade-up">
        <h1>Seja Um Franqueado RLAV</h1>
        <p class="seja-franqueado-desc">Invista no mercado de lavanderias autônomas que mais cresce no Brasil</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-title text-center" appScrollReveal revealClass="reveal-fade-up">
          <h6>Oportunidade de Negócio</h6>
          <h2>Por que investir na Rede RLAV?</h2>
        </div>

        <div class="row" style="margin-top: 40px;">
          <div class="one-fourth" appScrollReveal revealClass="reveal-zoom" revealDelay="delay-100">
            <div class="card-box advantage-card">
              <i class="fa-solid fa-robot adv-icon"></i>
              <h5>100% Autônomo</h5>
              <p>Operação automatizada sem necessidade de funcionários em tempo integral na unidade.</p>
            </div>
          </div>

          <div class="one-fourth" appScrollReveal revealClass="reveal-zoom" revealDelay="delay-200">
            <div class="card-box advantage-card">
              <i class="fa-solid fa-chart-line adv-icon"></i>
              <h5>Alta Margem de Lucro</h5>
              <p>Baixos custos fixos operacionais garantem rentabilidade atrativa mensalmente.</p>
            </div>
          </div>

          <div class="one-fourth" appScrollReveal revealClass="reveal-zoom" revealDelay="delay-300">
            <div class="card-box advantage-card">
              <i class="fa-solid fa-headset adv-icon"></i>
              <h5>Suporte Completo</h5>
              <p>Apoio na escolha do ponto comercial, instalação, marketing e suporte técnico contínuo.</p>
            </div>
          </div>

          <div class="one-fourth" appScrollReveal revealClass="reveal-zoom" revealDelay="delay-400">
            <div class="card-box advantage-card">
              <i class="fa-solid fa-shield-halved adv-icon"></i>
              <h5>Marca Consolidada</h5>
              <p>Rede aprovada pelos clientes com tecnologia de ponta e máxima confiabilidade.</p>
            </div>
          </div>
        </div>

        <div class="franchise-form-wrap row" style="margin-top: 60px;" appScrollReveal revealClass="reveal-fade-up">
          <div class="one-second" style="margin: 0 auto; float: none;">
            <div class="card-box contact-form-card text-center">
              <h3>Quero Ser Franqueado</h3>
              <button type="button" class="button button_yellow" style="width: 100%;" (click)="openFranchiseRegistration()">
                Tenho Interesse
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .franchise-hero {
      background: linear-gradient(135deg, #1c3c78 0%, #007aff 100%);
      color: #ffffff;
      padding: 80px 0;
    }

    .franchise-hero h1 {
      color: #ffffff;
      font-size: 48px;
    }

    .seja-franqueado-desc{
      color: #ffffff;
    }

    .adv-icon {
      font-size: 40px;
      color: var(--primary-blue);
      margin-bottom: 15px;
    }

    .advantage-card {
      padding: 30px 20px;
    }

    .franchise-pitch {
      padding: 20px;
    }

    .franchise-pitch h3 {
      font-size: 32px;
      margin-bottom: 15px;
    }

    .pitch-bullets {
      margin-top: 30px;
    }

    .bullet-item {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 15px;
      color: var(--text-dark);
    }

    .bullet-item i {
      color: #25d366;
      font-size: 20px;
    }

    .contact-form-card {
      align-items: stretch;
      text-align: left;
      padding: 40px;
    }

    .success-alert {
      background: #e6f9ed;
      color: #128c7e;
      border: 1px solid #b3e6c3;
      padding: 16px;
      border-radius: 8px;
      margin-bottom: 20px;
      font-weight: 500;
    }
  `]
})
export class FranqueadoComponent {
  openFranchiseRegistration(): void {
    window.open('https://franquias.rlav.com.br/#cadastro', '_blank', 'noopener,noreferrer');
  }
}
