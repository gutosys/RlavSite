import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-unidades',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollRevealDirective],
  template: `
    <section class="page-banner">
      <div class="container text-center" appScrollReveal revealClass="reveal-fade-up">
        <h1>Nossas Unidades</h1>
        <p class="text-into-banner">Encontre a RLAV Lavanderia Autônoma mais próxima de você</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="row">
          <!-- Unidades Cards -->
          <div class="one-second" *ngFor="let unidade of unidades; let i = index" appScrollReveal revealClass="reveal-fade-up" [revealDelay]="'delay-' + ((i % 2 + 1) * 100)">
            <div class="card-box unidade-card">
              <div class="unidade-img-wrap">
                <img [src]="unidade.imagem" [alt]="unidade.nome">
                <span class="status-badge" [class.em-breve]="unidade.emBreve">{{ unidade.status }}</span>
              </div>
              <div class="unidade-info">
                <h3>{{ unidade.nome }}</h3>
                <p class="endereco"><i class="fa-solid fa-location-dot"></i> {{ unidade.endereco }}</p>
                <p class="horario"><i class="fa-regular fa-clock"></i> {{ unidade.horario }}</p>
                <a *ngIf="!unidade.emBreve" [href]="unidade.mapaUrl" target="_blank" rel="noopener" class="button button_dark">
                  <i class="fa-solid fa-map-location-dot"></i> Como Chegar
                </a>
              </div>
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
    }

    .text-into-banner {
      color: #ffffff;
      font-size: 16px;
    }


    .unidade-card {
      flex-direction: row;
      text-align: left;
      align-items: center;
      gap: 25px;
      margin-bottom: 30px;
      padding: 25px;
    }

    .unidade-img-wrap {
      position: relative;
      width: 180px;
      height: 220px;
      flex-shrink: 0;
    }

    .unidade-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
    }

    .status-badge {
      position: absolute;
      top: 10px;
      left: 10px;
      background: var(--primary-blue);
      color: #ffffff;
      font-size: 11px;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 12px;
    }

    .status-badge.em-breve {
      background: #ffcc00;
      color: #222222;
    }

    .unidade-info {
      flex: 1;
    }

    .unidade-info h3 {
      font-size: 24px;
      margin-bottom: 12px;
    }

    .endereco, .horario {
      font-size: 14px;
      color: #555555;
      margin-bottom: 10px;
      display: flex;
      gap: 10px;
    }

    .endereco i, .horario i {
      color: var(--primary-blue);
      margin-top: 3px;
    }

    @media (max-width: 767px) {
      .unidade-card {
        flex-direction: column;
        text-align: center;
      }
      .unidade-img-wrap {
        width: 100%;
        height: 240px;
      }
      .endereco, .horario {
        justify-content: center;
      }
    }
  `]
})
export class UnidadesComponent {
  unidades = [
    {
      nome: 'Unidade Americana (Crema)',
      endereco: 'Av Nossa Senhora de Fátima, 380 - Vila Israel, Americana - Anexo Comércio 01, Loja 08',
      horario: 'Segunda a sábado das 8h às 22h e domingos das 8h às 20h',
      imagem: 'wp-content/uploads/2026/06/RlavAmer-240x300.jpeg',
      status: 'Aberta 7 dias',
      emBreve: false,
      mapaUrl: 'https://maps.google.com/?q=Av+Nossa+Senhora+de+Fatima+380+Americana+SP'
    },
    {
      nome: 'Unidade Nova Odessa',
      endereco: 'Região Central - Nova Odessa SP',
      horario: 'Segunda a Domingo das 7h às 22h',
      imagem: 'wp-content/uploads/2026/06/RlavNo-240x300.jpeg',
      status: 'Aberta 7 dias',
      emBreve: false,
      mapaUrl: 'https://maps.google.com/?q=Nova+Odessa+SP'
    },
    {
      nome: 'Unidade Santa Bárbara d\'Oeste',
      endereco: 'Região Central - Santa Bárbara d\'Oeste SP',
      horario: 'Segunda a Domingo das 7h às 22h',
      imagem: 'wp-content/uploads/2026/06/RlavSbo-240x300.jpeg',
      status: 'Aberta 7 dias',
      emBreve: false,
      mapaUrl: 'https://maps.google.com/?q=Santa+Barbara+d+Oeste+SP'
    },
    {
      nome: 'Unidade Paulínia',
      endereco: 'Paulínia - SP',
      horario: 'Inauguração em breve',
      imagem: 'wp-content/uploads/2025/11/EmBreve-300x300.png',
      status: 'Em Breve',
      emBreve: true,
      mapaUrl: '#'
    }
  ];
}
