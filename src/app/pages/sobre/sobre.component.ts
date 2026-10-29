import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollRevealDirective],
  template: `
    <!-- PAGE TITLE BANNER -->
    <section class="page-banner">
      <div class="container text-center" appScrollReveal revealClass="reveal-fade-up">
        <h1>Sobre Nós</h1>
        <p>Inovação, tecnologia e sustentabilidade em lavagem autônoma</p>
      </div>
    </section>

    <!-- CONTENT SECTION -->
    <section class="section">
      <div class="container">
        <div class="row align-items-center">
          <div class="one-second" appScrollReveal revealClass="reveal-fade-right">
            <img src="wp-content/uploads/2023/08/rlav-logo-site-01.png" alt="RLAV Logo" class="sobre-logo">
            <h2>Revolucionando o cuidado com as suas roupas</h2>
            <p>
              A Rlav Lavanderia Autônoma é uma referência em serviços de lavanderia automatizada localizada na cidade de Americana, São Paulo. Nossa empresa nasceu com a missão de revolucionar a forma como as pessoas encaram o cuidado com suas roupas, trazendo praticidade, eficiência e tecnologia para o cenário da lavanderia.
            </p>
            <p>
              Com equipamentos industriais de ponta e um sistema 100% autônomo, permitimos que você lave e seque suas peças com facilidade, rapidez e o melhor custo-benefício da região.
            </p>
          </div>

          <div class="one-second" appScrollReveal revealClass="reveal-fade-left">
            <div class="card-box sobre-highlight-box">
              <div class="highlight-icon"><i class="fa-solid fa-seedling"></i></div>
              <h3>Nosso Compromisso com a Sustentabilidade</h3>
              <p>
                Desde a escolha dos equipamentos até os processos de lavagem, cada detalhe é pensado para minimizar nosso impacto ambiental. Otimizamos o consumo de recursos hídricos e elétricos em até 63%.
              </p>
              <a routerLink="/contato" class="button button_dark">Fale Conosco</a>
            </div>
          </div>
        </div>

        <!-- THREE COLUMNS PHILOSOPHY -->
        <div class="row" style="margin-top: 60px;">
          <div class="one-third" appScrollReveal revealClass="reveal-zoom" revealDelay="delay-100">
            <div class="card-box">
              <img src="wp-content/uploads/2025/09/missao-1-150x150.png" alt="Missão" class="card-icon-img">
              <h3>Sua Rotina Mais Leve</h3>
              <p>Proporcionamos aos nossos clientes mais tempo livre para o que realmente importa, cuidando da limpeza e higienização das roupas de forma ágil e intuitiva.</p>
            </div>
          </div>

          <div class="one-third" appScrollReveal revealClass="reveal-zoom" revealDelay="delay-200">
            <div class="card-box">
              <img src="wp-content/uploads/2025/09/visao-150x150.png" alt="Visão" class="card-icon-img">
              <h3>Tecnologia de Ponta</h3>
              <p>Nossas máquinas de lavar e secar utilizam ciclos precisos e produtos profissionais OMO e Comfort dosados automaticamente.</p>
            </div>
          </div>

          <div class="one-third" appScrollReveal revealClass="reveal-zoom" revealDelay="delay-300">
            <div class="card-box">
              <img src="wp-content/uploads/2025/09/valores-150x150.png" alt="Valores" class="card-icon-img">
              <h3>Transparência e Economia</h3>
              <p>Sem mensalidades ou surpresas: você paga apenas o que usar por ciclo por apenas R$ 16,90.</p>
            </div>
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
      margin-bottom: 10px;
    }

    .page-banner p {
      color: #d0e2ff;
      font-size: 18px;
    }

    .sobre-logo {
      margin-bottom: 25px;
      max-width: 200px;
    }

    .sobre-highlight-box {
      background: var(--bg-light-blue);
      border: 1px solid #d8e5f2;
      padding: 40px;
      text-align: center;
    }

    .highlight-icon {
      font-size: 48px;
      color: var(--accent-cyan);
      margin-bottom: 20px;
    }

    .card-icon-img {
      width: 70px;
      height: 70px;
      margin-bottom: 20px;
    }
  `]
})
export class SobreComponent {}

