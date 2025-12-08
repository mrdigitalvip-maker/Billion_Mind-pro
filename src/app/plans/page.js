<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>BillionMind – Planos</title>

<style>
  body {
    margin: 0;
    background: #0a0a0c;
    color: #ffffff;
    font-family: Arial, sans-serif;
  }

  .container {
    max-width: 520px;
    margin: 0 auto;
    padding: 40px 20px;
    min-height: 100vh;
  }

  h1 {
    text-align: center;
    font-size: 28px;
    font-weight: 800;
    margin-bottom: 10px;
  }

  p.subtitle {
    text-align: center;
    font-size: 16px;
    opacity: 0.8;
    margin-bottom: 30px;
  }

  .plan-box {
    background: #111116;
    border-radius: 16px;
    padding: 22px;
    margin-bottom: 25px;
    box-shadow: 0 0 18px rgba(255, 255, 255, 0.05);
  }

  .plan-title {
    font-size: 22px;
    font-weight: 700;
  }

  .price {
    font-size: 20px;
    margin: 8px 0 18px;
    color: #f4c86c;
    font-weight: 700;
  }

  .features {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 20px;
  }

  .btn {
    display: block;
    width: 100%;
    text-align: center;
    padding: 12px 0;
    background: #f4c86c;
    color: #000000;
    border-radius: 10px;
    font-weight: 700;
    text-decoration: none;
    font-size: 16px;
  }
</style>
</head>

<body>

<div class="container">

  <h1>Escolha seu plano</h1>
  <p class="subtitle">Libere todo o poder do BillionMind e desbloqueie funções avançadas.</p>

  <!-- PLANO PRO -->
  <div class="plan-box">
    <h3 class="plan-title">BillionMind PRO</h3>
    <p class="price">R$ 29,98 / mês</p>

    <p class="features">
      ✓ Funções extras<br>
      ✓ Mais processamento<br>
      ✓ IA mais rápida
    </p>

    <a class="btn" href="https://buy.stripe.com/14AcN5buodjRewI8cQcAo01">
      Assinar PRO
    </a>
  </div>

  <!-- PLANO PREMIUM -->
  <div class="plan-box">
    <h3 class="plan-title">BillionMind PREMIUM</h3>
    <p class="price">R$ 39,90 / mês</p>

    <p class="features">
      ✓ Tudo do PRO<br>
      ✓ Maior limite diário<br>
      ✓ Respostas mais rápidas<br>
      ✓ Prioridade total
    </p>

    <a class="btn" href="https://buy.stripe.com/cNiaEX1TOfrZ2O08cQcAo02">
      Assinar PREMIUM
    </a>
  </div>

</div>

</body>
</html>
