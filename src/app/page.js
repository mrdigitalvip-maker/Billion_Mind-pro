"use client";

export default function Home() {
  return (
    <div style={styles.page}>
      {/* ========================= HEADER ========================= */}
      <header style={styles.header}>
        <h1 style={styles.logo}>BILLIONMIND <span style={{ color: "#f4c86c" }}>AI</span></h1>
        <nav style={styles.nav}>
          <a style={styles.navItem} href="#como-funciona">Como funciona</a>
          <a style={styles.navItem} href="#planos">Planos</a>
          <a style={styles.navItem} href="/login">Entrar</a>
        </nav>
      </header>

      {/* ========================= HERO ========================= */}
      <section style={styles.hero}>
        <p style={styles.badge}>Seu chat de alta performance, estilo de vida e disciplina.</p>
        <h1 style={styles.heroTitle}>
          Transforme sua mente em uma <span style={{ color: "#f4c86c" }}>BillionMind</span>:
          disciplina, luxo e liberdade em um único chat.
        </h1>

        <p style={styles.heroSubtitle}>
          BillionMind AI é um assistente de alta performance criado para qualquer pessoa que queira
          organizar rotina, riqueza, hábitos e mentalidade em uma experiência simples de chat.
        </p>

        {/* Botão de assinatura principal */}
        <a
          href="https://buy.stripe.com/14AcN5buodjRewI8cQcAo01"
          style={styles.primaryButton}
        >
          Criar minha conta PRO
        </a>

        <a href="#como-funciona" style={styles.secondaryButton}>
          Ver como funciona
        </a>
      </section>

      {/* ========================= COMO FUNCIONA ========================= */}
      <section id="como-funciona" style={styles.section}>
        <h2 style={styles.sectionTitle}>Como BillionMind AI funciona na prática.</h2>
        <p style={styles.sectionText}>
          O app foi projetado para qualquer pessoa no mundo: você abre, escreve o que quer mudar
          e o chat monta rotinas, tarefas, frases e imagens para apoiar sua nova mentalidade.
        </p>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Chat de alta performance</h3>
          <p style={styles.cardText}>
            Fale com a IA como um mentor: rotina, vida, dinheiro e objetivos. Respostas rápidas,
            práticas e aplicáveis no mesmo dia.
          </p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Planos diários e tarefas</h3>
          <p style={styles.cardText}>
            O app cria planos estruturados de 7, 21 ou 30 dias com tarefas diárias, metas de foco e análises.
          </p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Imagens de lifestyle via IA</h3>
          <p style={styles.cardText}>
            Você pede e a IA gera prompts para imagens de carros, luxo, cidades e lifestyle.
          </p>
        </div>
      </section>

      {/* ========================= PLANOS ========================= */}
      <section id="planos" style={styles.section}>
        <h2 style={styles.sectionTitle}>Planos simples para qualquer realidade.</h2>

        {/* FREE */}
        <div style={styles.planCard}>
          <h3 style={styles.planTitle}>FREE · Começar hoje</h3>
          <p style={styles.planPrice}>R$ 0 / mês</p>
          <ul style={styles.list}>
            <li>Acesso ao chat com respostas básicas.</li>
            <li>1 jornada liberada.</li>
            <li>Ideias limitadas de prompts.</li>
          </ul>

          <a href="/signup" style={styles.secondaryButton}>Começar de graça</a>
        </div>

        {/* PRO */}
        <div style={styles.planCard}>
          <h3 style={styles.planTitle}>PRO · Rotina e Renda</h3>
          <p style={styles.planPrice}>R$ 29,98 / mês</p>

          <ul style={styles.list}>
            <li>Acesso completo ao chat de alta performance.</li>
            <li>Jornadas completas de disciplina e renda.</li>
            <li>Mais prompts de imagens via IA.</li>
          </ul>

          <a
            href="https://buy.stripe.com/14AcN5buodjRewI8cQcAo01"
            style={styles.primaryButton}
          >
            Assinar plano PRO
          </a>
        </div>

        {/* PREMIUM */}
        <div style={styles.planCard}>
          <h3 style={styles.planTitle}>PREMIUM · Jogo grande</h3>
          <p style={styles.planPrice}>R$ 39,90 / mês</p>

          <ul style={styles.list}>
            <li>Tudo do PRO incluso.</li>
            <li>Limite maior de planos e jornadas.</li>
            <li>Mais ideias de imagens por semana.</li>
            <li>Prioridade em novidades e suporte.</li>
          </ul>

          <a
            href="https://buy.stripe.com/cNiaEX1TOfrZ2O08cQcAo02"
            style={styles.primaryButton}
          >
            Assinar plano PREMIUM
          </a>
        </div>

      </section>
    </div>
  );
}

/* ========================= ESTILOS ========================= */

const styles = {
  page: {
    background: "#0a0a0c",
    color: "#e4e4e4",
    paddingBottom: "80px",
    fontFamily: "system-ui, sans-serif",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    alignItems: "center",
  },

  logo: { fontSize: "22px", fontWeight: "bold" },

  nav: { display: "flex", gap: "20px" },

  navItem: { color: "#ccc", textDecoration: "none", fontSize: "15px" },

  hero: {
    padding: "40px 20px",
  },

  badge: {
    background: "rgba(244, 200, 108, 0.1)",
    padding: "8px 12px",
    borderRadius: "12px",
    display: "inline-block",
    fontSize: "14px",
  },

  heroTitle: {
    fontSize: "32px",
    marginTop: "20px",
    marginBottom: "10px",
    fontWeight: "700",
    lineHeight: "38px",
  },

  heroSubtitle: {
    fontSize: "16px",
    color: "#bbbbbb",
    marginBottom: "30px",
    maxWidth: "600px",
  },

  primaryButton: {
    background: "#f4c86c",
    color: "#000",
    padding: "14px 22px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: "600",
    display: "inline-block",
    marginBottom: "15px",
  },

  secondaryButton: {
    border: "1px solid #f4c86c",
    padding: "12px 20px",
    borderRadius: "12px",
    color: "#f4c86c",
    textDecoration: "none",
    display: "inline-block",
    marginTop: "10px",
  },

  section: {
    padding: "40px 20px",
  },

  sectionTitle: { fontSize: "26px", marginBottom: "10px" },

  sectionText: { fontSize: "16px", color: "#bbbbbb", marginBottom: "25px" },

  card: {
    background: "#111116",
    padding: "20px",
    borderRadius: "14px",
    marginBottom: "18px",
  },

  cardTitle: { fontSize: "18px", marginBottom: "8px" },

  cardText: { fontSize: "15px", color: "#cccccc" },

  planCard: {
    background: "#0f0f14",
    padding: "25px",
    borderRadius: "18px",
    marginBottom: "25px",
    border: "1px solid rgba(244,200,108,0.15)",
  },

  planTitle: { fontSize: "20px", marginBottom: "8px" },

  planPrice: {
    color: "#f4c86c",
    fontSize: "22px",
    marginBottom: "18px",
  },

  list: {
    marginBottom: "20px",
    lineHeight: "26px",
  },
};
