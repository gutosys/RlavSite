import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="wptwa-container">
      <!-- Popup Card -->
      <div class="wptwa-card" [class.open]="isOpen">
        <div class="wptwa-header">
          <div class="wptwa-avatar">
            <img src="wp-content/uploads/2023/09/favicon.png" alt="RLAV Support">
          </div>
          <div class="wptwa-info">
            <h4>RLAV Lavanderia</h4>
            <span>Atendimento via WhatsApp</span>
          </div>
          <button class="wptwa-close" (click)="toggleWidget()">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div class="wptwa-body">
          <div class="wptwa-msg">
            <p>Olá! 👋 Como podemos ajudar você hoje na RLAV Lavanderia Autônoma?</p>
            <span class="wptwa-time">Agora</span>
          </div>
        </div>

        <div class="wptwa-action">
          <a [href]="whatsappUrl" target="_blank" rel="noopener" class="wptwa-btn">
            <i class="fa-brands fa-whatsapp"></i> Iniciar Conversa
          </a>
        </div>
      </div>

      <!-- Trigger Button -->
      <button class="wptwa-trigger" (click)="toggleWidget()" aria-label="Abrir WhatsApp">
        <i class="fa-brands fa-whatsapp"></i>
        <span class="wptwa-pulse"></span>
      </button>
    </div>
  `,
  styles: [`
    .wptwa-container {
      position: fixed;
      bottom: 25px;
      left: 25px;
      z-index: 1040;
    }

    .wptwa-trigger {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #25d366;
      color: #ffffff;
      border: none;
      font-size: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
      transition: all 0.3s ease;
      position: relative;
    }

    .wptwa-trigger:hover {
      transform: scale(1.08);
      background-color: #20ba5a;
    }

    .wptwa-pulse {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: rgba(37, 211, 102, 0.4);
      animation: pulse 2s infinite;
      z-index: -1;
    }

    @keyframes pulse {
      0% { transform: scale(1); opacity: 0.8; }
      100% { transform: scale(1.5); opacity: 0; }
    }

    .wptwa-card {
      position: absolute;
      bottom: 75px;
      left: 0;
      width: 320px;
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.15);
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px);
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .wptwa-card.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .wptwa-header {
      background-color: #075e54;
      color: #ffffff;
      padding: 16px 20px;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .wptwa-avatar img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #ffffff;
      padding: 2px;
    }

    .wptwa-info {
      flex: 1;
    }

    .wptwa-info h4 {
      color: #ffffff;
      margin: 0;
      font-size: 15px;
      font-family: var(--font-body);
    }

    .wptwa-info span {
      font-size: 12px;
      opacity: 0.85;
    }

    .wptwa-close {
      background: none;
      border: none;
      color: #ffffff;
      font-size: 18px;
      cursor: pointer;
      opacity: 0.8;
    }

    .wptwa-close:hover {
      opacity: 1;
    }

    .wptwa-body {
      padding: 20px;
      background-color: #e5ddd5;
      min-height: 100px;
    }

    .wptwa-msg {
      background: #ffffff;
      padding: 12px 16px;
      border-radius: 0 12px 12px 12px;
      max-width: 90%;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      position: relative;
    }

    .wptwa-msg p {
      margin: 0 0 5px 0;
      font-size: 13px;
      color: #333333;
    }

    .wptwa-time {
      font-size: 10px;
      color: #999999;
      float: right;
    }

    .wptwa-action {
      padding: 15px 20px;
      background: #ffffff;
      text-align: center;
    }

    .wptwa-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: 100%;
      padding: 12px;
      background-color: #25d366;
      color: #ffffff !important;
      font-weight: 600;
      border-radius: 25px;
      font-size: 14px;
      transition: background-color 0.3s ease;
    }

    .wptwa-btn:hover {
      background-color: #128c7e;
    }
  `]
})
export class WhatsappWidgetComponent {
  isOpen = false;
  whatsappUrl = 'https://api.whatsapp.com/send?phone=5519989694588&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20RLAV%20Lavanderia.';

  toggleWidget() {
    this.isOpen = !this.isOpen;
  }
}
