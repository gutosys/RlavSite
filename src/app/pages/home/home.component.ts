import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { AnimatedCounterDirective } from '../../directives/animated-counter.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollRevealDirective, AnimatedCounterDirective],
  template: `

      <section class="section first-section">
      <div class="container">

      <div class="franqueado-container">
        <div class="franqueado-esquerda" appScrollReveal revealClass="reveal-fade-right">
          <h6 class="franqueado-tag">Oportunidade de Negócio</h6>
          <h2 class="franqueado-titulo">Seja um Franqueado <span class="titulo-destaque">RLAV</span></h2>

          <div class="franqueado-rating">
            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <span class="rating-text">Qualidade, Confiança, Satisfação garantida</span>
          </div>

          <p class="franqueado-desc">Invista no mercado de lavanderias autônomas que mais cresce no Brasil. Operação automatizada, baixo custo operacional e retorno atrativo.</p>

          <div class="franqueado-beneficios">
            <div class="beneficio-item">
              <i class="fa-solid fa-robot"></i>
              <span>Operação 100% autônoma</span>
            </div>
            <div class="beneficio-item">
              <i class="fa-solid fa-chart-line"></i>
              <span>Alta margem de lucro</span>
            </div>
            <div class="beneficio-item">
              <i class="fa-solid fa-headset"></i>
              <span>Suporte completo da rede</span>
            </div>
          </div>

          <a href="https://franquias.rlav.com.br/#cadastro" class="button button_dark franqueado-cta" target="_blank">
            <i class="fa-solid fa-arrow-right"></i> Faça Parte da Rede
          </a>
        </div>

        <div class="franqueado-direita" appScrollReveal revealClass="reveal-fade-left">
          <div class="franqueado-img-wrapper">
            <img src="wp-content/inicial.jpg" alt="RLAV Lavanderia Autônoma">
            <div class="franqueado-float-card card-top" appScrollReveal revealClass="reveal-zoom" revealDelay="delay-200">
              <i class="fa-solid fa-store"></i>
              <div>
                <strong [appAnimatedCounter]="3" prefix="+">3</strong> Unidades
                <span>em operação</span>
              </div>
            </div>
            <div class="franqueado-float-card card-bottom" appScrollReveal revealClass="reveal-zoom" revealDelay="delay-300">
              <i class="fa-solid fa-leaf"></i>
              <div>
                <strong [appAnimatedCounter]="100" suffix="%">100%</strong> Eco
                <span>Tecnologia sustentável</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
    </section>

    <!-- HERO SLIDER SECTION -->
    <section class="hero-slider">
      <div class="slider-container">
        <div class="slide" *ngFor="let slide of slides; let i = index" [class.active]="currentSlide === i" [style.backgroundImage]="'url(' + slide.image + ')'">
          <div class="hero-overlay"></div>
          <div class="container hero-content">
            <div class="hero-text-box">
              <span class="hero-badge">RLAV Lavanderia Autônoma</span>
              <h1>{{ slide.title }}</h1>
              <p class="hero-desc">{{ slide.subtitle }}</p>
              <div class="hero-actions">
                <a routerLink="/promocoes" class="button button_yellow">Promoções da Semana</a>
                <a routerLink="/unidades" class="button button_dark">Conheça as Unidades</a>
              </div>
            </div>

            <div class="hero-eco-badge">
              <div class="badge-icon"><i class="fa-solid fa-leaf"></i></div>
              <h3>ECO TECNOLOGIA</h3>
              <p>Máquinas de última geração projetadas para otimizar o consumo de energia e água.</p>
            </div>
          </div>
        </div>

        <!-- Slider Controls -->
        <div class="slider-dots">
          <span *ngFor="let slide of slides; let i = index" [class.active]="currentSlide === i" (click)="setSlide(i)"></span>
        </div>
      </div>
    </section>



    <!-- SOBRE PREVIEW SECTION -->
    <section class="section">
      <div class="container">
        <div class="section-title text-center" appScrollReveal revealClass="reveal-fade-up">
          <h6>Sobre</h6>
          <h2>Conheça a RLav Lavanderia Autônoma</h2>
        </div>

        <div class="row align-items-center" style="margin-top: 40px;">
          <div class="one-second" appScrollReveal revealClass="reveal-fade-right">
            <div class="about-card">
              <img src="wp-content/uploads/2023/08/rlav-logo-site-01.png" alt="RLAV" class="about-logo">
              <h5>Sobre a Rlav Lavanderia</h5>
              <p>
                A Rlav Lavanderia Autônoma, uma referência em serviços de lavanderia automatizada localizada na encantadora cidade de Americana, São Paulo. Nossa empresa nasceu com a missão de revolucionar a forma como as pessoas encaram o cuidado com suas roupas, trazendo praticidade, eficiência e tecnologia para o cenário da lavanderia.
              </p>
              <a routerLink="/sobre" class="button button_dark">SOBRE NÓS</a>
            </div>
          </div>

          <div class="one-fourth" appScrollReveal revealClass="reveal-zoom" revealDelay="delay-100">
            <div class="card-box">
              <div class="card-icon">
                <img src="wp-content/uploads/2023/09/rlav-sustentabilidade-150x150.png" alt="Sustentabilidade">
              </div>
              <h5>Sustentabilidade</h5>
              <p>Desde a escolha dos equipamentos até os processos de lavagem, cada detalhe é pensado para minimizar nosso impacto ambiental.</p>
            </div>
          </div>

          <div class="one-fourth" appScrollReveal revealClass="reveal-zoom" revealDelay="delay-200">
            <div class="card-box">
              <div class="card-icon">
                <img src="wp-content/uploads/2023/09/lavanderia-sustentavel.png" alt="Eficiência Energética">
              </div>
              <h5>Eficiência Energética</h5>
              <p>Nossas máquinas de última geração são projetadas para otimizar o consumo de energia, reduzindo a pegada de carbono.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MISSÃO, VISÃO E VALORES -->
    <section class="section bg-light">
      <div class="container">
        <div class="row">
          <div class="one-third" appScrollReveal revealClass="reveal-fade-up" revealDelay="delay-100">
            <div class="card-box mvv-card">
              <img src="wp-content/uploads/2025/09/missao-1-150x150.png" alt="Missão" class="mvv-icon">
              <h3>MISSÃO</h3>
              <p>Tornar o dia a dia das pessoas mais leve e prático, oferecendo uma lavanderia de autoatendimento moderna, rápida e acessível, que une economia de tempo e dinheiro com qualidade e sustentabilidade.</p>
            </div>
          </div>

          <div class="one-third" appScrollReveal revealClass="reveal-fade-up" revealDelay="delay-200">
            <div class="card-box mvv-card">
              <img src="wp-content/uploads/2025/09/visao-150x150.png" alt="Visão" class="mvv-icon">
              <h3>VISÃO</h3>
              <p>Ser reconhecida como a rede de lavanderias de autoatendimento mais prática e confiável do Brasil, transformando a forma como as pessoas cuidam de suas roupas por meio da inovação, autonomia e economia.</p>
            </div>
          </div>

          <div class="one-third" appScrollReveal revealClass="reveal-fade-up" revealDelay="delay-300">
            <div class="card-box mvv-card text-left">
              <img src="wp-content/uploads/2025/09/valores-150x150.png" alt="Valores" class="mvv-icon align-center">
              <h3 class="text-center">VALORES</h3>
              <ul class="valores-list">
                <li><strong>Praticidade:</strong> facilitar a vida dos clientes com processos simples e rápidos.</li>
                <li><strong>Autonomia:</strong> oferecer liberdade para que cada pessoa cuide de suas roupas no seu tempo.</li>
                <li><strong>Acessibilidade:</strong> preços justos democratizando o acesso.</li>
                <li><strong>Eficiência:</strong> otimizar tempo e recursos.</li>
                <li><strong>Sustentabilidade:</strong> incentivar uso consciente da água e energia.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- STORE SHOWCASE IMAGE -->
    <section class="store-showcase" appScrollReveal revealClass="reveal-zoom">
      <img src="wp-content/uploads/2023/08/rlav-home-lavanderia.png" alt="RLAV Lavanderia Autônoma">
    </section>

    <!-- PREÇOS & INSUMOS -->
    <section class="section">
      <div class="container">
        <div class="section-title text-center" appScrollReveal revealClass="reveal-fade-up">
          <h6>Valores e Insumos</h6>
          <h2>Usamos sabão líquido Omo e Amaciante Confort</h2>
        </div>

        <div class="row" style="margin-top: 40px;">
          <div class="one-second" appScrollReveal revealClass="reveal-fade-right">
            <div class="pricing-card card-box">
              <div class="pricing-header">
                <img src="wp-content/uploads/2023/09/lavagem-autonoma-rlav-150x150.png" alt="Para Lavar">
                <div class="price-tag">
                  <span>Por</span> <h2>R$ 16,90</h2>
                </div>
              </div>
              <div class="pricing-body">
                <h3>Para Lavar</h3>
                <p>Nosso processo autônomo combina a precisão da tecnologia com a experiência da lavagem tradicional, resultando em roupas limpas com a mais alta qualidade.</p>
                <ul class="check-list">
                  <li><i class="fa-solid fa-check"></i> Precisão na Lavagem</li>
                  <li><i class="fa-solid fa-check"></i> Detergentes OMO de Alta Qualidade</li>
                  <li><i class="fa-solid fa-check"></i> Amaciante Comfort Incluído</li>
                  <li><i class="fa-solid fa-check"></i> Ciclos Otimizados de Alta Performance</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="one-second" appScrollReveal revealClass="reveal-fade-left">
            <div class="pricing-card card-box">
              <div class="pricing-header">
                <img src="wp-content/uploads/2023/09/secar-lavanderia-autonoma-rlav.png" alt="Para Secar">
                <div class="price-tag cyan">
                  <span>Por</span> <h2 class="cyan-color">R$ 16,90</h2>
                </div>
              </div>
              <div class="pricing-body">
                <h3>Para Secar</h3>
                <p>Com nossas tecnologias avançadas, garantimos que suas roupas saiam das secadoras prontas para vestir, com a máxima qualidade preservada.</p>
                <ul class="check-list">
                  <li><i class="fa-solid fa-check"></i> Tecnologia de Secagem Inteligente</li>
                  <li><i class="fa-solid fa-check"></i> Preservação do Tecido</li>
                  <li><i class="fa-solid fa-check"></i> Roupas Quentinhas e Prontas</li>
                  <li><i class="fa-solid fa-check"></i> Praticidade Total em Minutos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ECO FRIENDLY METRICS -->
    <section class="section bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="one-second" appScrollReveal revealClass="reveal-fade-right">
            <h6>Eco-friendly</h6>
            <h2>Em nosso trabalho, nós também nos preocupamos com o meio ambiente.</h2>
            <p>Implementamos tecnologias modernas que reduzem de maneira expressiva o gasto de recursos naturais sem comprometer a limpeza profunda.</p>
          </div>

          <div class="one-fourth" appScrollReveal revealClass="reveal-zoom" revealDelay="delay-100">
            <div class="card-box metric-card">
              <img src="wp-content/uploads/2019/07/clean-home-icon-6.png" alt="Eletricidade">
              <h5>Eletricidade</h5>
              <p>Conseguimos minimizar o consumo de energia durante cada ciclo de lavagem.</p>
              <h2 class="metric-number cyan-color" [appAnimatedCounter]="58" prefix="-" suffix="%">-58%</h2>
            </div>
          </div>

          <div class="one-fourth" appScrollReveal revealClass="reveal-zoom" revealDelay="delay-200">
            <div class="card-box metric-card">
              <img src="wp-content/uploads/2019/07/clean-home-icon-7.png" alt="Consumo de Água">
              <h5>Consumo de Água</h5>
              <p>Conseguimos minimizar drasticamente a quantidade de água necessária em cada ciclo.</p>
              <h2 class="metric-number themecolor" [appAnimatedCounter]="63" prefix="-" suffix="%">-63%</h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LOCATION BANNER & GALLERY -->
    <section class="section">
      <div class="container">
        <div class="location-banner" appScrollReveal revealClass="reveal-fade-up">
          <div class="location-info">
            <div class="location-badge"><i class="fa-solid fa-location-dot"></i> Unidade Principal</div>
            <h3>Estamos no Supermercado Crema (Americana)</h3>
            <h4 class="themecolor">Av Nossa Senhora de Fátima, 380 - Vila Israel, Americana<br>Anexo Comércio 01, Loja 08</h4>
            <p><i class="fa-regular fa-clock"></i> <strong>Horário de Funcionamento:</strong><br>Segunda a sábado das 8h às 22h e domingos das 8h às 20h</p>
          </div>
          <div class="location-images">
            <img src="wp-content/uploads/2023/10/rlav-crema-americana-ok.jpg" alt="RLAV Crema Americana" class="loc-img-main">
          </div>
        </div>

        <div class="units-gallery row" style="margin-top: 50px;">
          <div class="one-fourth" appScrollReveal revealClass="reveal-zoom" revealDelay="delay-100">
            <div class="gallery-card">
              <img src="wp-content/uploads/2026/06/RlavAmer-240x300.jpeg" alt="Unidade Americana">
              <h6>Americana</h6>
            </div>
          </div>
          <div class="one-fourth" appScrollReveal revealClass="reveal-zoom" revealDelay="delay-200">
            <div class="gallery-card">
              <img src="wp-content/uploads/2026/06/RlavNo-240x300.jpeg" alt="Unidade Nova Odessa">
              <h6>Nova Odessa</h6>
            </div>
          </div>
          <div class="one-fourth" appScrollReveal revealClass="reveal-zoom" revealDelay="delay-300">
            <div class="gallery-card">
              <img src="wp-content/uploads/2026/06/RlavSbo-240x300.jpeg" alt="Unidade Santa Bárbara">
              <h6>Santa Bárbara d'Oeste</h6>
            </div>
          </div>
          <div class="one-fourth" appScrollReveal revealClass="reveal-zoom" revealDelay="delay-400">
            <div class="gallery-card">
              <img src="wp-content/uploads/2025/11/EmBreve-300x300.png" alt="Paulínia Em Breve">
              <h6>Paulínia (Em Breve)</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Hero Slider Styles */
    .hero-slider {
      position: relative;
      height: 600px;
      overflow: hidden;
    }

    .slider-container {
      height: 100%;
      position: relative;
    }

    .slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      opacity: 0;
      transition: opacity 0.8s ease-in-out;
      display: flex;
      align-items: center;
    }

    .slide.active {
      opacity: 1;
      z-index: 1;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, rgba(0, 122, 255, 0.85) 0%, rgba(46, 90, 168, 0.7) 100%);
    }

    .hero-content {
      position: relative;
      z-index: 2;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;
    }

    .hero-text-box {
      max-width: 650px;
    }

    .hero-badge {
      display: inline-block;
      padding: 6px 16px;
      background: rgba(255,255,255,0.2);
      backdrop-filter: blur(5px);
      border-radius: 20px;
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 20px;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .hero-text-box h1 {
      color: #ffffff;
      font-size: 52px;
      margin-bottom: 20px;
      text-shadow: 0 2px 10px rgba(0,0,0,0.2);
    }

    .hero-desc {
      color: #f0f6ff;
      font-size: 18px;
      margin-bottom: 30px;
      line-height: 1.6;
    }

    .hero-actions {
      display: flex;
      gap: 15px;
    }

    .hero-eco-badge {
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      padding: 30px;
      border-radius: 16px;
      border: 1px solid rgba(255,255,255,0.3);
      max-width: 320px;
      text-align: center;
    }

    .badge-icon {
      font-size: 40px;
      color: var(--accent-yellow);
      margin-bottom: 15px;
    }

    .hero-eco-badge h3 {
      color: #ffffff;
      font-size: 20px;
      margin-bottom: 10px;
    }

    .hero-eco-badge p {
      color: #e0edff;
      font-size: 13px;
      margin: 0;
    }

    .slider-dots {
      position: absolute;
      bottom: 25px;
      right: 30px;
      z-index: 10;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .slider-dots span {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 2px solid #ffffff;
      background: transparent;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .slider-dots span.active {
      background: #ffffff;
      transform: scale(1.3);
    }

    /* About section */
    .about-card {
      padding: 20px;
    }

    .about-logo {
      margin-bottom: 20px;
    }

    .mvv-card {
      padding: 40px 25px;
    }

    .mvv-icon {
      width: 80px;
      height: 80px;
      margin-bottom: 20px;
    }

    .valores-list {
      list-style: none;
      font-size: 13px;
    }

    .valores-list li {
      margin-bottom: 10px;
      position: relative;
      padding-left: 15px;
    }

    .valores-list li::before {
      content: '•';
      color: var(--primary-blue);
      position: absolute;
      left: 0;
      font-weight: bold;
    }

    .store-showcase {
      width: 100%;
      overflow: hidden;
    }

    .store-showcase img {
      width: 100%;
      height: auto;
      max-height: 500px;
      object-fit: cover;
    }

    /* Pricing Cards */
    .pricing-card {
      align-items: stretch;
      text-align: left;
    }

    .pricing-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      border-bottom: 1px solid #eeeeee;
      padding-bottom: 20px;
      margin-bottom: 20px;
    }

    .pricing-header img {
      width: 90px;
      height: 90px;
    }

    .price-tag span {
      font-size: 14px;
      color: #777777;
    }

    .price-tag h2 {
      color: var(--primary-blue);
      font-size: 38px;
      margin: 0;
    }

    .check-list {
      list-style: none;
      margin-top: 20px;
    }

    .check-list li {
      margin-bottom: 12px;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .check-list i {
      color: var(--primary-blue);
    }

    /* Eco Metrics */
    .metric-number {
      font-size: 46px;
      margin-top: 15px;
      margin-bottom: 0;
    }

    /* Location Banner */
    .location-banner {
      background: var(--bg-light-blue);
      border-radius: 20px;
      padding: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.04);
    }

    .location-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--primary-blue);
      color: #ffffff;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 15px;
    }

    .loc-img-main {
      border-radius: 16px;
      max-width: 450px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }

    .gallery-card {
      text-align: center;
      background: #ffffff;
      border-radius: 12px;
      padding: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.05);
      transition: transform 0.3s ease;
    }

    .gallery-card:hover {
      transform: translateY(-5px);
    }

    .gallery-card img {
      border-radius: 8px;
      width: 100%;
      height: 250px;
      object-fit: cover;
      margin-bottom: 15px;
    }

    /* Franqueado */

    .first-section {
      padding: 60px 0;
    }

    .franqueado-container {
      display: flex;
      gap: 60px;
      align-items: center;
      flex-wrap: wrap;
    }

    .franqueado-esquerda {
      flex: 1;
      min-width: 320px;
    }

    .franqueado-direita {
      flex: 1;
      min-width: 340px;
    }

    .franqueado-tag {
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--primary-blue);
      font-weight: 600;
      margin-bottom: 10px;
    }

    .franqueado-titulo {
      font-size: 38px;
      line-height: 1.15;
      margin-bottom: 18px;
      color: var(--text-dark);
    }

    .titulo-destaque {
      background: linear-gradient(135deg, var(--primary-blue), var(--accent-cyan));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .franqueado-rating {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 20px;
      flex-wrap: wrap;
    }

    .franqueado-rating .stars {
      display: flex;
      gap: 3px;
    }

    .franqueado-rating .stars i {
      color: #f5a623;
      font-size: 16px;
    }

    .franqueado-rating .rating-text {
      font-size: 14px;
      color: var(--text-muted);
      font-weight: 500;
    }

    .franqueado-desc {
      font-size: 15px;
      line-height: 1.7;
      color: var(--text-body);
      margin-bottom: 24px;
    }

    .franqueado-beneficios {
      display: flex;
      flex-direction: column;
      gap: 14px;
      margin-bottom: 32px;
    }

    .beneficio-item {
      display: flex;
      align-items: center;
      gap: 14px;
      font-size: 15px;
      font-weight: 500;
      color: var(--text-dark);
    }

    .beneficio-item i {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background: linear-gradient(135deg, rgba(46,90,168,0.1), rgba(68,214,254,0.1));
      color: var(--primary-blue);
      font-size: 15px;
      flex-shrink: 0;
    }

    .franqueado-cta {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 16px 36px;
      font-size: 14px;
    }

    .franqueado-cta i {
      transition: transform 0.3s ease;
    }

    .franqueado-cta:hover i {
      transform: translateX(4px);
    }

    /* Franqueado Direita - Imagem com cards flutuantes */

    .franqueado-img-wrapper {
      position: relative;
      border-radius: 20px;
      overflow: visible;
    }

    .franqueado-img-wrapper img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 20px;
      box-shadow: 0 20px 50px rgba(28, 60, 120, 0.15);
      display: block;
    }

    .franqueado-float-card {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 12px;
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      padding: 14px 20px;
      border-radius: 14px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
      animation: floatCard 3s ease-in-out infinite alternate;
    }

    .franqueado-float-card i {
      font-size: 22px;
      color: var(--primary-blue);
      flex-shrink: 0;
    }

    .franqueado-float-card div {
      display: flex;
      flex-direction: column;
    }

    .franqueado-float-card strong {
      font-size: 15px;
      color: var(--text-dark);
      font-family: var(--font-body);
      line-height: 1.2;
    }

    .franqueado-float-card span {
      font-size: 12px;
      color: var(--text-muted);
    }

    .card-top {
      top: -15px;
      right: -15px;
      animation-delay: 0s;
    }

    .card-bottom {
      bottom: -15px;
      left: -15px;
      animation-delay: 1.5s;
    }

    .card-bottom i {
      color: #25d366;
    }

    @keyframes floatCard {
      0% { transform: translateY(0); }
      100% { transform: translateY(-8px); }
    }

    @media (max-width: 991px) {
      .franqueado-container {
        flex-direction: column;
        gap: 40px;
      }
      .franqueado-esquerda {
        text-align: center;
      }
      .franqueado-rating {
        justify-content: center;
      }
      .franqueado-beneficios {
        align-items: center;
      }
      .franqueado-titulo {
        font-size: 32px;
      }
      .card-top {
        right: 10px;
        top: -10px;
      }
      .card-bottom {
        left: 10px;
        bottom: -10px;
      }
    }

    @media (max-width: 991px) {
      .hero-slider { height: auto; min-height: 500px; }
      .hero-content { flex-direction: column; text-align: center; padding: 60px 20px; }
      .hero-text-box h1 { font-size: 36px; }
      .location-banner { flex-direction: column; text-align: center; padding: 30px; }
      .loc-img-main { max-width: 100%; }
    }
  `]
})
export class HomeComponent implements OnInit, OnDestroy {
  slides = [
    {
      title: 'Promoção Cestão por R$16,90 Lave ou Seque',
      subtitle: 'Suas roupas só precisam ser inseridas, e as máquinas cuidarão do resto do processo com a melhor tecnologia.',
      image: 'wp-content/uploads/2023/08/clean-slider-slide-3-2.jpg'
    },
    {
      title: 'Lavagem Autônoma Inteligente',
      subtitle: 'Sabão Omo e Amaciante Comfort já inclusos na dosagem perfeita para suas roupas.',
      image: 'wp-content/uploads/2023/08/clean-slider-slide-3-3.jpg'
    },
    {
      title: 'Praticidade, Economia e Sustentabilidade',
      subtitle: 'Economize até 63% de água e 58% de eletricidade em cada ciclo.',
      image: 'wp-content/uploads/2023/08/clean-slider-slide-3-2-1.jpg'
    }
  ];

  currentSlide = 0;
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  setSlide(index: number) {
    this.currentSlide = index;
  }
}
