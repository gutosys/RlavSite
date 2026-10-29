import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollRevealDirective],
  template: `
    <section class="page-banner">
      <div class="container text-center" appScrollReveal revealClass="reveal-fade-up">
        <h1>Fale Conosco</h1>
        <p class="text-into-banner">Estamos prontos para atender você e tirar todas as suas dúvidas</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="row">
          <!-- Form -->
          <div class="one-second" appScrollReveal revealClass="reveal-fade-right">
            <div class="card-box contact-form-card">
              <h3>Envie uma Mensagem</h3>
              <p>Preencha os campos abaixo e nossa equipe retornará em breve.</p>

              <div *ngIf="formSubmitted" class="success-alert">
                <i class="fa-solid fa-circle-check"></i> Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>

              <form (ngSubmit)="onSubmit()" #contactForm="ngForm" *ngIf="!formSubmitted">
                <div class="form-group">
                  <label for="nome">Nome Completo *</label>
                  <input type="text" id="nome" name="nome" [(ngModel)]="formData.nome" required placeholder="Seu nome" class="form-control">
                </div>

                <div class="form-group">
                  <label for="email">E-mail *</label>
                  <input type="email" id="email" name="email" [(ngModel)]="formData.email" required placeholder="seu@email.com" class="form-control">
                </div>

                <div class="form-group">
                  <label for="telefone">Telefone / WhatsApp *</label>
                  <input type="tel" id="telefone" name="telefone" [(ngModel)]="formData.telefone" required placeholder="(19) 98969-4588" class="form-control">
                </div>

                <div class="form-group">
                  <label for="mensagem">Mensagem *</label>
                  <textarea id="mensagem" name="mensagem" [(ngModel)]="formData.mensagem" required placeholder="Como podemos ajudar?" class="form-control"></textarea>
                </div>

                <button type="submit" [disabled]="!contactForm.valid" class="button button_dark" style="width: 100%;">
                  ENVIAR MENSAGEM
                </button>
              </form>
            </div>
          </div>

          <!-- Contact Details -->
          <div class="one-second" appScrollReveal revealClass="reveal-fade-left">
            <div class="contact-info-list">
              <h3>Informações de Contato</h3>
              <p>Visite nossa unidade em Americana ou entre em contato pelos canais digitais.</p>

              <div class="info-item">
                <div class="info-icon"><i class="fa-solid fa-location-dot"></i></div>
                <div>
                  <h5>Endereço Principal</h5>
                  <p>Av Nossa Senhora de Fátima, 380 - Vila Israel, Americana SP<br>Supermercado Crema - Loja 08</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon"><i class="fa-brands fa-whatsapp"></i></div>
                <div>
                  <h5>WhatsApp Atendimento</h5>
                  <p><a href="https://api.whatsapp.com/send?phone=5519989694588" target="_blank" rel="noopener">(19) 98969-4588</a></p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon"><i class="fa-brands fa-instagram"></i></div>
                <div>
                  <h5>Instagram</h5>
                  <p><a href="https://www.instagram.com/rlav_lavanderia/" target="_blank" rel="noopener">&#64;rlav_lavanderia</a></p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon"><i class="fa-regular fa-clock"></i></div>
                <div>
                  <h5>Horário de Funcionamento</h5>
                  <p>Segunda a Sábado: 8h às 22h<br>Domingos e Feriados: 8h às 20h</p>
                </div>
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

    .contact-info-list {
      padding: 20px;
    }

    .info-item {
      display: flex;
      gap: 20px;
      margin-top: 25px;
    }

    .info-icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--bg-light-blue);
      color: var(--primary-blue);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      flex-shrink: 0;
    }

    .info-item h5 {
      margin-bottom: 4px;
      font-size: 18px;
    }
  `]
})
export class ContatoComponent {
  formData = {
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  };

  formSubmitted = false;

  onSubmit() {
    this.formSubmitted = true;
  }
}
