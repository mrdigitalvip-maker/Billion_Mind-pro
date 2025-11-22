<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BillionMind AI – Seu chat de alta performance</title>
  <style>
    :root {
      --bg-main: #05060a;
      --bg-card: #0c0d16;
      --bg-soft: #101121;
      --gold: #f4c86c;
      --gold-soft: rgba(244, 200, 108, 0.18);
      --white: #ffffff;
      --text-soft: #c2c3d6;
      --accent: #45b3ff;
      --success: #33d17a;
      --radius-lg: 18px;
      --radius-xl: 26px;
      --shadow-soft: 0 20px 44px rgba(0, 0, 0, 0.85);
      --max-width: 1180px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background:
        radial-gradient(circle at top, rgba(244, 200, 108, 0.15) 0, transparent 50%),
        radial-gradient(circle at bottom, rgba(69, 179, 255, 0.16) 0, transparent 55%),
        #05060a;
      color: var(--white);
      line-height: 1.6;
      scroll-behavior: smooth;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    .page {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* BANNER DE CONTAGEM REGRESSIVA */

    #countdownBanner {
      width: 100%;
      text-align: center;
      padding: 9px 6px;
      background: linear-gradient(
        90deg,
        rgba(244, 200, 108, 0.24),
        rgba(5, 6, 12, 0.95),
        rgba(244, 200, 108, 0.24)
      );
      border-bottom: 1px solid rgba(244, 200, 108, 0.4);
      font-size: 0.88rem;
      font-weight: 600;
      color: #f4c86c;
      backdrop-filter: blur(10px);
      position: sticky;
      top: 0;
      z-index: 60;
    }

    .countdown-text {
      margin-right: 6px;
      color: #f4c86c;
    }

    #countdownTimer {
      font-weight: 700;
      color: #ffffff;
    }

    header {
      position: sticky;
      top: 36px; /* fica logo abaixo do banner */
      z-index: 40;
      backdrop-filter: blur(16px);
      background: linear-gradient(
        to bottom,
        rgba(5, 6, 12, 0.98),
        rgba(5, 6, 12, 0.88),
        transparent
      );
      border-bottom: 1px solid rgba(244, 200, 108, 0.18);
    }

    .nav {
      max-width: var(--max-width);
      margin: 0 auto;
      padding: 14px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      font-size: 0.85rem;
    }

    .logo-mark {
      width: 32px;
      height: 32px;
      border-radius: 999px;
      background:
        radial-gradient(circle at 20% 0, #ffffff, #f4c86c 30%, #b6822a 70%),
        radial-gradient(circle at 100% 100%, #45b3ff, transparent 60%);
      box-shadow: 0 0 22px rgba(244, 200, 108, 0.9);
      position: relative;
      overflow: hidden;
    }

    .logo-mark::after {
      content: "";
      position: absolute;
      inset: 5px;
      border-radius: inherit;
      border: 1px solid rgba(5, 6, 12, 0.7);
      box-shadow: inset 0 0 18px rgba(0, 0, 0, 0.9);
    }

    .logo span:last-child {
      color: var(--gold);
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 18px;
      font-size: 0.9rem;
      color: var(--text-soft);
    }

    .nav-links a {
      position: relative;
      padding-bottom: 2px;
    }

    .nav-links a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 1px;
      background: linear-gradient(90deg, var(--gold), var(--accent));
      transition: width 0.18s ease-out;
    }

    .nav-links a:hover::after {
      width: 100%;
    }

    .nav-cta {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 9px 20px;
      border-radius: 999px;
      border: none;
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 600;
      transition:
        transform 0.15s ease-out,
        box-shadow 0.15s ease-out,
        background 0.15s ease-out,
        opacity 0.15s ease-out;
      white-space: nowrap;
    }

    .btn-gold {
      background: linear-gradient(135deg, #f9dc8e, #f4c86c, #c7902c);
      color: #090909;
      box-shadow: 0 12px 28px rgba(244, 200, 108, 0.55);
    }

    .btn-gold:hover {
      transform: translateY(-1px);
      box-shadow: 0 16px 38px rgba(244, 200, 108, 0.75);
    }

    .btn-outline {
      background: transparent;
      border: 1px solid rgba(244, 200, 108, 0.4);
      color: var(--gold);
    }

    .btn-outline:hover {
      background: rgba(244, 200, 108, 0.06);
      transform: translateY(-1px);
    }

    main {
      flex: 1;
    }

    section {
      padding: 60px 18px;
    }

    .container {
      max-width: var(--max-width);
      margin: 0 auto;
    }

    /* HERO */

    #inicio {
      padding-top: 76px;
    }

    .hero {
      display: grid;
      grid-template-columns: minmax(0, 1.15fr) minmax(0, 1.1fr);
      gap: 32px;
      align-items: stretch;
    }

    .pill-top {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 4px 12px 4px 4px;
      border-radius: 999px;
      border: 1px solid rgba(244, 200, 108, 0.35);
      background: rgba(5, 6, 12, 0.9);
      font-size: 0.75rem;
      color: var(--text-soft);
      margin-bottom: 18px;
    }

    .pill-dot {
      width: 20px;
      height: 20px;
      border-radius: 999px;
      background:
        conic-gradient(from 220deg, #f4c86c, #45b3ff, #f4c86c);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 16px rgba(244, 200, 108, 0.7);
    }

    .pill-dot span {
      width: 13px;
      height: 13px;
      border-radius: inherit;
      border: 1px solid rgba(5, 6, 12, 0.8);
      background: radial-gradient(circle at 30% 0, #ffffff, #f4c86c);
    }

    .hero-title {
      font-size: clamp(2.2rem, 3.3vw, 3rem);
      line-height: 1.05;
      margin-bottom: 12px;
      letter-spacing: 0.02em;
    }

    .hero-title span {
      background: linear-gradient(100deg, #ffffff, #f4c86c);
      -webkit-background-clip: text;
      color: transparent;
    }

    .hero-subtitle {
      font-size: 0.98rem;
      color: var(--text-soft);
      max-width: 480px;
      margin-bottom: 20px;
    }

    .hero-bullets {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 14px;
      max-width: 430px;
      margin-bottom: 22px;
      font-size: 0.8rem;
      color: var(--text-soft);
    }

    .hero-bullets span {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .hero-bullets span::before {
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 999px;
      background: var(--gold);
    }

    .hero-cta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: center;
      margin-bottom: 10px;
    }

    .hero-note {
      font-size: 0.78rem;
      color: var(--text-soft);
    }

    .hero-note strong {
      color: var(--gold);
    }

    /* CHAT + PAINEL */

    .chat-shell {
      border-radius: var(--radius-xl);
      background:
        radial-gradient(circle at 0 0, rgba(244, 200, 108, 0.28), transparent 55%),
        radial-gradient(circle at 100% 100%, rgba(69, 179, 255, 0.32), transparent 60%),
        var(--bg-card);
      border: 1px solid rgba(244, 200, 108, 0.24);
      box-shadow: var(--shadow-soft);
      padding: 16px 14px 14px;
      display: grid;
      grid-template-rows: auto auto minmax(0, 1fr) auto;
      gap: 10px;
      min-height: 400px;
    }

    .chat-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      font-size: 0.8rem;
    }

    .chat-header-left {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .chat-status-dot {
      width: 9px;
      height: 9px;
      border-radius: 999px;
      background: radial-gradient(circle at 30% 0, #ffffff, #33d17a);
      box-shadow: 0 0 10px rgba(51, 209, 122, 0.8);
    }

    .chat-header-right {
      font-size: 0.7rem;
      color: var(--text-soft);
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .chip-small {
      padding: 3px 8px;
      border-radius: 999px;
      border: 1px solid rgba(244, 200, 108, 0.35);
      background: rgba(5, 6, 12, 0.9);
    }

    .chat-meta {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 8px;
      font-size: 0.74rem;
    }

    .meta-card {
      background: rgba(5, 6, 14, 0.96);
      border-radius: 14px;
      border: 1px solid rgba(244, 200, 108, 0.2);
      padding: 8px 9px;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .meta-label {
      color: var(--text-soft);
      font-size: 0.72rem;
    }

    .meta-value {
      font-size: 0.86rem;
      font-weight: 600;
    }

    .meta-value.gold {
      color: var(--gold);
    }

    .meta-value.green {
      color: var(--success);
    }

    .meta-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-top: 2px;
    }

    .meta-badge {
      padding: 2px 7px;
      border-radius: 999px;
      border: 1px solid rgba(69, 179, 255, 0.5);
      background: rgba(9, 12, 20, 0.9);
      color: var(--accent);
      font-size: 0.7rem;
    }

    .chat-window {
      background: rgba(5, 6, 12, 0.96);
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.02);
      padding: 10px;
      overflow-y: auto;
      max-height: 260px;
    }

    .msg {
      font-size: 0.8rem;
      max-width: 94%;
      padding: 7px 10px;
      border-radius: 12px;
      margin-bottom: 8px;
    }

    .msg-system {
      margin-inline: auto;
      text-align: center;
      font-size: 0.72rem;
      color: var(--text-soft);
      background: transparent;
    }

    .msg-ai {
      background: #10121f;
      border: 1px solid rgba(244, 200, 108, 0.3);
      border-bottom-left-radius: 3px;
    }

    .msg-user {
      margin-left: auto;
      background: #151732;
      border: 1px solid rgba(69, 179, 255, 0.35);
      border-bottom-right-radius: 3px;
    }

    .quick-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      font-size: 0.72rem;
    }

    .quick-chip {
      padding: 4px 9px;
      border-radius: 999px;
      background: rgba(8, 9, 18, 0.93);
      border: 1px solid rgba(244, 200, 108, 0.26);
      cursor: pointer;
      color: var(--text-soft);
    }

    .quick-chip span {
      color: var(--gold);
      margin-right: 3px;
    }

    .chat-input-row {
      display: flex;
      gap: 6px;
      align-items: center;
      margin-top: 4px;
    }

    .chat-input {
      flex: 1;
      padding: 9px 11px;
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.04);
      background: rgba(10, 11, 22, 0.95);
      color: var(--white);
      font-size: 0.8rem;
      outline: none;
    }

    .chat-input::placeholder {
      color: #6d6f85;
    }

    .chat-send {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: none;
      background: linear-gradient(135deg, var(--gold), #f8dd93);
      color: #05060a;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 0.9rem;
      box-shadow: 0 8px 18px rgba(244, 200, 108, 0.75);
    }

    /* SEÇÕES */

    .section-title {
      font-size: 1.7rem;
      margin-bottom: 10px;
    }

    .section-subtitle {
      font-size: 0.95rem;
      color: var(--text-soft);
      max-width: 540px;
      margin-bottom: 26px;
    }

    #como-funciona {
      background: radial-gradient(circle at top, rgba(244, 200, 108, 0.08), transparent 55%);
    }

    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    .card {
      background: rgba(8, 9, 18, 0.98);
      border-radius: var(--radius-lg);
      border: 1px solid rgba(244, 200, 108, 0.18);
      padding: 18px 16px;
      box-shadow: 0 14px 32px rgba(0, 0, 0, 0.9);
      font-size: 0.9rem;
    }

    .card-icon {
      width: 28px;
      height: 28px;
      border-radius: 999px;
      background: var(--gold-soft);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      margin-bottom: 8px;
    }

    .card-title {
      font-weight: 600;
      margin-bottom: 6px;
    }

    .card p {
      font-size: 0.86rem;
      color: var(--text-soft);
    }

    /* JORNADAS */

    #jornadas {
      background: radial-gradient(circle at bottom, rgba(69, 179, 255, 0.1), transparent 56%);
    }

    .journeys {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    .journey {
      background: rgba(8, 9, 18, 0.98);
      border-radius: 18px;
      border: 1px solid rgba(69, 179, 255, 0.4);
      padding: 16px 14px;
      font-size: 0.86rem;
    }

    .journey-tag {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--accent);
      margin-bottom: 4px;
    }

    .journey h3 {
      font-size: 0.96rem;
      margin-bottom: 6px;
    }

    .journey ul {
      margin-top: 6px;
      list-style: none;
      padding-left: 0;
      color: var(--text-soft);
    }

    .journey ul li {
      margin-bottom: 4px;
      display: flex;
      align-items: flex-start;
      gap: 5px;
    }

    .journey ul li::before {
      content: "•";
      color: var(--accent);
      font-size: 0.8rem;
      margin-top: 1px;
    }

    /* PLANOS */

    #planos {
      background: #05060a;
      border-top: 1px solid rgba(244, 200, 108, 0.25);
      border-bottom: 1px solid rgba(244, 200, 108, 0.2);
    }

    .plans-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 14px;
      flex-wrap: wrap;
      margin-bottom: 20px;
    }

    .billing-toggle {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border-radius: 999px;
      border: 1px solid rgba(244, 200, 108, 0.3);
      background: rgba(8, 9, 18, 0.98);
      padding: 4px;
      font-size: 0.78rem;
    }

    .billing-toggle button {
      border: none;
      background: transparent;
      padding: 6px 10px;
      border-radius: 999px;
      color: var(--text-soft);
      cursor: pointer;
      font-size: 0.78rem;
    }

    .billing-toggle button.active {
      background: rgba(244, 200, 108, 0.2);
      color: var(--gold);
      font-weight: 600;
    }

    .plans-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    .plan {
      background: rgba(8, 9, 18, 0.98);
      border-radius: 22px;
      border: 1px solid rgba(244, 200, 108, 0.18);
      padding: 18px 16px 16px;
      box-shadow: 0 18px 40px rgba(0, 0, 0, 0.95);
      position: relative;
    }

    .plan.highlight {
      border-color: rgba(244, 200, 108, 0.7);
      box-shadow: 0 20px 46px rgba(244, 200, 108, 0.5);
      transform: translateY(-2px);
    }

    .plan-tag {
      position: absolute;
      top: 14px;
      right: 14px;
      font-size: 0.7rem;
      padding: 3px 8px;
      border-radius: 999px;
      background: rgba(244, 200, 108, 0.16);
      color: var(--gold);
      border: 1px solid rgba(244, 200, 108, 0.6);
    }

    .plan-name {
      font-size: 0.96rem;
      font-weight: 600;
      margin-bottom: 4px;
    }

    .plan-desc {
      font-size: 0.8rem;
      color: var(--text-soft);
      margin-bottom: 10px;
    }

    .plan-price-row {
      display: flex;
      align-items: baseline;
      gap: 4px;
      margin-bottom: 10px;
    }

    .plan-price {
      font-size: 1.35rem;
      font-weight: 700;
    }

    .plan-price small {
      font-size: 0.8rem;
      color: var(--text-soft);
    }

    .plan-list {
      list-style: none;
      padding-left: 0;
      margin: 10px 0 14px;
      font-size: 0.8rem;
      color: var(--text-soft);
    }

    .plan-list li {
      display: flex;
      align-items: flex-start;
      gap: 6px;
      margin-bottom: 6px;
    }

    .plan-list li::before {
      content: "✓";
      color: var(--success);
      font-size: 0.75rem;
      margin-top: 2px;
    }

    .plan-footnote {
      font-size: 0.7rem;
      color: var(--text-soft);
      margin-top: 8px;
    }

    .plan button {
      width: 100%;
      margin-top: 4px;
    }

    /* CTA FINAL */

    #cta-final {
      background: #05060a;
      padding-top: 30px;
      padding-bottom: 40px;
    }

    .cta-box {
      border-radius: 22px;
      border: 1px solid rgba(244, 200, 108, 0.5);
      background:
        radial-gradient(circle at top, rgba(244, 200, 108, 0.25), transparent 58%),
        linear-gradient(145deg, #05060a, #090b18);
      padding: 20px 18px;
      text-align: center;
      box-shadow: 0 20px 44px rgba(0, 0, 0, 0.9);
    }

    .cta-box h2 {
      font-size: 1.4rem;
      margin-bottom: 8px;
    }

    .cta-box p {
      font-size: 0.9rem;
      color: var(--text-soft);
      margin-bottom: 14px;
    }

    .cta-small {
      font-size: 0.72rem;
      color: var(--text-soft);
      margin-top: 6px;
    }

    /* FOOTER */

    footer {
      background: #03040a;
      border-top: 1px solid rgba(244, 200, 108, 0.18);
      padding: 18px;
      font-size: 0.78rem;
      color: var(--text-soft);
    }

    .footer-inner {
      max-width: var(--max-width);
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }

    .footer-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .footer-chip {
      padding: 4px 10px;
      border-radius: 999px;
      border: 1px solid rgba(244, 200, 108, 0.28);
      background: rgba(7, 8, 16, 0.96);
    }

    /* RESPONSIVO */

    @media (max-width: 960px) {
      header {
        top: 38px;
      }
      .hero {
        grid-template-columns: minmax(0, 1fr);
        gap: 22px;
      }
    }

    @media (max-width: 720px) {
      section {
        padding-inline: 14px;
        padding-top: 46px;
        padding-bottom: 46px;
      }
      #inicio {
        padding-top: 70px;
      }
      .hero-bullets {
        grid-template-columns: minmax(0, 1fr);
      }
      .grid-3,
      .journeys,
      .plans-grid {
        grid-template-columns: minmax(0, 1fr);
      }
      .journeys {
        gap: 14px;
      }
      .chat-shell {
        min-height: 360px;
      }
    }
  </style>
</head>
<body>
  <!-- BANNER DE LANÇAMENTO -->
  <div id="countdownBanner">
    <span class="countdown-text">🚀 App em processo de lançamento · estreia em:</span>
    <span id="countdownTimer">00h 00m 00s</span>
  </div>

  <div class="page">
    <!-- NAVBAR -->
    <header>
      <nav class="nav">
        <div class="logo">
          <div class="logo-mark"></div>
          <span>BILLIONMIND</span><span>AI</span>
        </div>
        <div class="nav-links">
          <a href="#inicio">Início</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#jornadas">Jornadas</a>
          <a href="#planos">Planos</a>
        </div>
        <div class="nav-cta">
          <button class="btn btn-outline" onclick="scrollToSection('planos')">Entrar</button>
          <button class="btn btn-gold" onclick="scrollToSection('planos')">Começar agora</button>
        </div>
      </nav>
    </header>

    <main>
      <!-- HERO + CHAT -->
      <section id="inicio">
        <div class="container hero">
          <div>
            <div class="pill-top">
              <div class="pill-dot"><span></span></div>
              <span>Seu chat de alta performance, estilo de vida e disciplina.</span>
            </div>
            <h1 class="hero-title">
              Transforme sua mente em uma <span>BillionMind</span>:
              disciplina, luxo e liberdade em um único chat.
            </h1>
            <p class="hero-subtitle">
              BillionMind AI é um assistente de alta performance criado para qualquer pessoa
              que queira organizar rotina, riqueza, hábitos e mentalidade em uma experiência
              simples de chat, direto no navegador.
            </p>

            <div class="hero-bullets">
              <span>Rotinas diárias prontas para executar.</span>
              <span>Mensagens motivacionais personalizadas.</span>
              <span>Geração de imagens de lifestyle e riqueza via IA.</span>
            </div>

            <div class="hero-cta-row">
              <button class="btn btn-gold" onclick="scrollToSection('planos')">
                Criar minha conta PRO
              </button>
              <button class="btn btn-outline" onclick="scrollToSection('como-funciona')">
                Ver como funciona
              </button>
            </div>
            <p class="hero-note">
              <strong>Página única, uso global.</strong> Basta abrir, escrever e deixar a IA
              guiar sua rotina de disciplina, dinheiro e lifestyle – sem menus confusos.
            </p>
          </div>

          <!-- Chat / Painel -->
          <div class="chat-shell">
            <div class="chat-header">
              <div class="chat-header-left">
                <div class="chat-status-dot"></div>
                <div>
                  <div style="font-size:0.8rem;font-weight:600;">Sessão BillionMind · Ativa</div>
                  <div style="font-size:0.7rem;color:var(--text-soft);">
                    Foco: rotina, metas e mentalidade hoje.
                  </div>
                </div>
              </div>
              <div class="chat-header-right">
                <span>Modo</span>
                <span class="chip-small">Alta performance</span>
              </div>
            </div>

            <div class="chat-meta">
              <div class="meta-card">
                <div class="meta-label">Meta principal de hoje</div>
                <div class="meta-value gold">Trabalhar 90 min em um objetivo importante.</div>
                <div class="meta-badges">
                  <span class="meta-badge">Disciplina</span>
                  <span class="meta-badge">Renda extra</span>
                </div>
              </div>
              <div class="meta-card">
                <div class="meta-label">Sequência de dias disciplinados</div>
                <div class="meta-value green">12 dias seguidos</div>
                <div class="meta-label">Você está construindo consistência.</div>
              </div>
            </div>

            <div class="chat-window" id="chatWindow">
              <div class="msg msg-system">
                BillionMind AI: escreva seu objetivo e eu organizo em passos diários, tarefas,
                frases de foco e ideias de imagens para você visualizar e postar.
              </div>
              <div class="msg msg-user">
                Quero organizar minha vida para ter disciplina, rotina e dinheiro, sem perder
                meu estilo de vida.
              </div>
              <div class="msg msg-ai">
                Excelente objetivo. Vamos montar sua base de alta performance:<br /><br />
                <strong>• Pilar 1 — Rotina diária:</strong> blocos de foco, descanso e tempo
                livre com horário definido.<br />
                <strong>• Pilar 2 — Renda:</strong> 1 ação de dinheiro por dia que você pode
                executar mesmo cansado.<br />
                <strong>• Pilar 3 — Mentalidade:</strong> frases, perguntas e reflexões para
                pensar como dono, não como vítima.<br /><br />
                A partir daqui, cada mensagem sua vira um plano prático para aplicar hoje.
              </div>
            </div>

            <div class="quick-actions">
              <div class="quick-chip" onclick="quickPrompt('Crie uma rotina de disciplina de 30 dias para mim.')">
                <span>●</span> Rotina 30 dias
              </div>
              <div class="quick-chip" onclick="quickPrompt('Gere 5 frases de motivação em estilo de luxo para hoje.')">
                <span>●</span> Frases motivacionais
              </div>
              <div class="quick-chip" onclick="quickPrompt('Descreva 3 ideias de imagens de riqueza e liberdade para eu criar via IA.')">
                <span>●</span> Ideias de imagens
              </div>
              <div class="quick-chip" onclick="quickPrompt('Liste minhas 3 prioridades financeiras da semana.')">
                <span>●</span> Prioridades da semana
              </div>
            </div>

            <div class="chat-input-row">
              <input
                id="chatInput"
                class="chat-input"
                type="text"
                placeholder="Digite sua próxima meta, dúvida ou pedido (ex: ‘quero rotina para acordar 5h’)..."
              />
              <button class="chat-send" onclick="fakeSend()">➤</button>
            </div>
          </div>
        </div>
      </section>

      <!-- COMO FUNCIONA -->
      <section id="como-funciona">
        <div class="container">
          <h2 class="section-title">Como BillionMind AI funciona na prática.</h2>
          <p class="section-subtitle">
            O app foi projetado para qualquer pessoa no mundo: você abre, escreve o que quer
            mudar e o chat monta rotinas, tarefas, frases e imagens para apoiar sua nova
            mentalidade – tudo em uma única página.
          </p>

          <div class="grid-3">
            <div class="card">
              <div class="card-icon">💬</div>
              <div class="card-title">Chat de alta performance</div>
              <p>
                Você conversa com a IA como se estivesse falando com um mentor: fala da sua
                rotina, da sua vida e dos seus objetivos, e recebe respostas diretas, práticas e
                aplicáveis no mesmo dia.
              </p>
            </div>
            <div class="card">
              <div class="card-icon">📆</div>
              <div class="card-title">Planos diários e tarefas</div>
              <p>
                O app cria planos estruturados de 7, 21 ou 30 dias com tarefas diárias, metas
                de foco e checagens simples para você seguir sem se perder no excesso de
                informação.
              </p>
            </div>
            <div class="card">
              <div class="card-icon">🖼️</div>
              <div class="card-title">Imagens de lifestyle via IA</div>
              <p>
                Você pede e a IA sugere prompts de imagens de carros, cidades, viagens,
                escritórios e cenas de luxo para você gerar em qualquer gerador de imagem e
                usar como motivação ou postagem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- JORNADAS -->
      <section id="jornadas">
        <div class="container">
          <h2 class="section-title">Jornadas guiadas que qualquer pessoa pode seguir.</h2>
          <p class="section-subtitle">
            Em vez de só responder perguntas, BillionMind AI organiza sua evolução em
            “caminhos” claros. Você escolhe a jornada e o chat mostra o que fazer hoje, amanhã e
            nas próximas semanas.
          </p>

          <div class="journeys">
            <div class="journey">
              <div class="journey-tag">Jornada 01</div>
              <h3>30 dias de disciplina absoluta</h3>
              <p>
                Foco em construir consistência. Ideal para quem sente que sempre começa e
                para.
              </p>
              <ul>
                <li>Despertar com propósito e horários definidos.</li>
                <li>Blocos de foco para trabalho, estudo ou projeto.</li>
                <li>Rituais noturnos para encerrar o dia com consciência.</li>
              </ul>
            </div>

            <div class="journey">
              <div class="journey-tag">Jornada 02</div>
              <h3>Renda extra e mentalidade de dono</h3>
              <p>
                Direcionada para quem quer sair do “só sobreviver” e começar a construir renda
                a partir do que já sabe.
              </p>
              <ul>
                <li>Mapeamento de habilidades e oportunidades.</li>
                <li>Uma ação de dinheiro por dia (simples e objetiva).</li>
                <li>Revisão semanal de ganhos, erros e ajustes.</li>
              </ul>
            </div>

            <div class="journey">
              <div class="journey-tag">Jornada 03</div>
              <h3>Lifestyle de luxo consciente</h3>
              <p>
                Para quem gosta de carro, viagem, roupa e cidade bonita, mas quer fazer isso com
                estrutura e responsabilidade.
              </p>
              <ul>
                <li>Planejamento de metas de lifestyle (viagem, carro, casa).</li>
                <li>Conexão entre imagem, trabalho e disciplina.</li>
                <li>Prompts de imagens para visualizar sua vida futura.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- PLANOS -->
      <section id="planos">
        <div class="container">
          <div class="plans-header">
            <div>
              <h2 class="section-title">Planos simples para qualquer realidade.</h2>
              <p class="section-subtitle">
                Escolha se quer experimentar gratuitamente ou destravar todo o poder da
                BillionMind AI com acesso PRO e ELITE. Você pode mudar ou cancelar o plano a
                qualquer momento.
              </p>
            </div>
            <div>
              <div class="billing-toggle">
                <button class="active" type="button">Mensal</button>
                <button type="button" disabled style="opacity:0.4;cursor:not-allowed;">
                  Anual em breve
                </button>
              </div>
              <div style="font-size:0.7rem;color:var(--text-soft);margin-top:6px;">
                Pagamento 100% online, com acesso imediato após a confirmação.
              </div>
            </div>
          </div>

          <div class="plans-grid">
            <div class="plan">
              <div class="plan-name">FREE · Começar hoje</div>
              <div class="plan-desc">
                Para qualquer pessoa dar o primeiro passo sem pagar nada.
              </div>
              <div class="plan-price-row">
                <div class="plan-price">R$ 0</div>
                <small>/ mês</small>
              </div>
              <ul class="plan-list">
                <li>Acesso ao chat com respostas básicas.</li>
                <li>1 jornada liberada (30 dias de disciplina).</li>
                <li>Ideias limitadas de prompts para imagens.</li>
                <li>Resumo semanal simples de progresso.</li>
              </ul>
              <button class="btn btn-outline" onclick="openCheckout('FREE')">
                Começar de graça
              </button>
              <div class="plan-footnote">
                Ideal para testar a experiência e sentir a mudança na prática.
              </div>
            </div>

            <div class="plan highlight">
              <div class="plan-tag">Recomendado</div>
              <div class="plan-name">PRO · Rotina e Renda</div>
              <div class="plan-desc">
                Para quem quer viver na prática o que a BillionMind AI sugere todos os dias.
              </div>
              <div class="plan-price-row">
                <div class="plan-price">R$ 49</div>
                <small>/ mês</small>
              </div>
              <ul class="plan-list">
                <li>Acesso completo ao chat de alta performance.</li>
                <li>Jornadas completas de disciplina, renda e lifestyle.</li>
                <li>Rotinas personalizadas a partir da sua realidade.</li>
                <li>Mais prompts e ideias de imagens de luxo via IA.</li>
                <li>Exportar planos em PDF ou copiar para notas.</li>
              </ul>
              <button class="btn btn-gold" onclick="openCheckout('PRO')">
                Assinar plano PRO
              </button>
              <div class="plan-footnote">
                Plano ideal para quem quer resultado real com investimento acessível.
              </div>
            </div>

            <div class="plan">
              <div class="plan-name">ELITE · Jogo grande</div>
              <div class="plan-desc">
                Para quem leva disciplina, dinheiro e lifestyle como projeto de vida.
              </div>
              <div class="plan-price-row">
                <div class="plan-price">R$ 99</div>
                <small>/ mês</small>
              </div>
              <ul class="plan-list">
                <li>Tudo do PRO incluso.</li>
                <li>Limite ainda maior de planos e jornadas ativas.</li>
                <li>Mais ideias de imagens por semana.</li>
                <li>Espaço para planejar projetos grandes (negócios, viagens, etc.).</li>
                <li>Prioridade máxima em suporte e novidades.</li>
              </ul>
              <button class="btn btn-outline" onclick="openCheckout('ELITE')">
                Subir para o ELITE
              </button>
              <div class="plan-footnote">
                Para quem decidiu construir uma vida em nível bilionário de visão e disciplina.
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA FINAL -->
      <section id="cta-final">
        <div class="container">
          <div class="cta-box">
            <h2>Pronto para viver com mente disciplinada e visão de luxo?</h2>
            <p>
              BillionMind AI foi criada para ser seu parceiro diário de foco, dinheiro e
              lifestyle. Em poucos minutos por dia você organiza metas, tarefas e imagens da
              vida que quer viver – e começa a caminhar na direção delas.
            </p>
            <button class="btn btn-gold" onclick="scrollToSection('planos')">
              Escolher meu plano e começar
            </button>
            <div class="cta-small">
              Assim que seu plano for ativado, você já pode usar o chat para montar sua rotina
              de hoje e iniciar a próxima jornada.
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <footer>
      <div class="footer-inner">
        <div>© <span id="year"></span> BillionMind AI. Todos os direitos reservados.</div>
        <div class="footer-tags">
          <div class="footer-chip">Feito para criadores e pessoas comuns.</div>
          <div class="footer-chip">Uso global · Página única · Alta performance.</div>
        </div>
      </div>
    </footer>
  </div>

  <script>
    // ===== CONTAGEM REGRESSIVA DO LANÇAMENTO =====
    // ALTERE A DATA PARA O DIA/HORA REAL DO SEU LANÇAMENTO:
    // Formato: "YYYY-MM-DDTHH:MM:SS"
    const LAUNCH_DATE = new Date("2025-11-24T19:30:00");

    function updateCountdown() {
      const bannerTimer = document.getElementById("countdownTimer");
      if (!bannerTimer) return;

      const now = new Date();
      const diff = LAUNCH_DATE - now;

      if (diff <= 0) {
        bannerTimer.textContent = "Lançado!";
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      bannerTimer.textContent = `${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // ===== FUNÇÕES DO APP =====
    function scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function fakeSend() {
      const input = document.getElementById("chatInput");
      const chat = document.getElementById("chatWindow");
      if (!input || !chat) return;
      const text = input.value.trim();
      if (!text) return;

      const userMsg = document.createElement("div");
      userMsg.className = "msg msg-user";
      userMsg.textContent = text;
      chat.appendChild(userMsg);

      const aiMsg = document.createElement("div");
      aiMsg.className = "msg msg-ai";
      aiMsg.innerHTML =
        "Entendido. Vamos transformar isso em ação:<br><br>" +
        "<strong>1)</strong> Defina uma tarefa clara para os próximos 30 minutos ligada ao seu objetivo.<br>" +
        "<strong>2)</strong> Elimine distrações até concluir essa tarefa.<br>" +
        "<strong>3)</strong> Quando terminar, volte aqui e peça o próximo passo.<br><br>" +
        "A mente BillionMind funciona assim: um passo de cada vez, todos os dias.";
      chat.appendChild(aiMsg);

      chat.scrollTop = chat.scrollHeight;
      input.value = "";
    }

    function quickPrompt(promptText) {
      const input = document.getElementById("chatInput");
      if (!input) return;
      input.value = promptText;
      input.focus();
    }

    function openCheckout(planName) {
      alert(
        "Você selecionou o plano: " +
          planName +
          ".\n\nNa versão completa, este botão leva para a página de pagamento ou área de login do seu plano."
      );
    }

    document.getElementById("year").textContent = new Date().getFullYear();
  </script>
</body>
</html>
