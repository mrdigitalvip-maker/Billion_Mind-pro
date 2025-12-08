"use client";

export default function Plans() {
  return (
    <div style={container}>
      <div style={card}>
        <h2 style={title}>Escolha seu plano</h2>

        <p style={subtitle}>
          Libere todo o poder do BillionMind e desbloqueie funções avançadas.
        </p>

        {/* PLANO PRO */}
        <div style={planBox}>
          <h3 style={planTitle}>BillionMind PRO</h3>
          <p style={price}>R$ 29,98 / mês</p>
          <p style={desc}>
            • Funções extras<br />• Mais processamento<br />• IA mais rápida
          </p>

          <a
            style={btn}
            href="https://buy.stripe.com/14AcN5buodjRewI8cQcAo01"
          >
            Assinar PRO
          </a>
        </div>

        {/* PLANO PREMIUM */}
        <div style={planBoxPremium}>
          <h3 style={planTitle}>BillionMind PREMIUM</h3>
          <p style={price}>R$ 39,90 / mês</p>
          <p style={desc}>
            • Tudo do PRO<br />
            • Ferramentas avançadas<br />
            • Prioridade máxima<br />
            • Experiência 100%
          </p>

          <a
            style={btnPremium}
            href="https://buy.stripe.com/cNiaEX1TOfrZ2O08cQcAo02"
          >
            Assinar PREMIUM
          </a>
        </div>

        <a href="/dashboard" style={backLink}>
          Voltar ao Dashboard
        </a>
      </div>
    </div>
  );
}

/* Estilos */

const container = {
  background: "#020308",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  paddingTop: "60px",
  fontFamily: "system-ui",
};

const card = {
  width: "92%",
  maxWidth: "440px",
  padding: "26px",
  borderRadius: "18px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#fff",
  backdropFilter: "blur(10px)",
};

const title = {
  textAlign: "center",
  color: "#f4c86c",
  marginBottom: "6px",
  fontSize: "1.4rem",
};

const subtitle = {
  textAlign: "center",
  color: "#ccc",
  marginBottom: "20px",
};

const planBox = {
  background: "rgba(255,255,255,0.04)",
  padding: "18px",
  borderRadius: "14px",
  marginBottom: "20px",
  border: "1px solid rgba(255,255,255,0.1)",
};

const planBoxPremium = {
  background: "rgba(244,200,108,0.10)",
  padding: "18px",
  borderRadius: "14px",
  marginBottom: "20px",
  border: "1px solid rgba(244,200,108,0.5)",
};

const planTitle = {
  fontSize: "1.2rem",
  color: "#fff",
  marginBottom: "6px",
};

const price = {
  fontSize: "1.1rem",
  color: "#f4c86c",
  fontWeight: "bold",
  marginBottom: "8px",
};

const desc = {
  fontSize: "0.9rem",
  color: "#ddd",
  marginBottom: "12px",
  lineHeight: "1.4em",
};

const btn = {
  width: "100%",
  display: "block",
  background: "#f4c86c",
  padding: "12px",
  borderRadius: "10px",
  textAlign: "center",
  textDecoration: "none",
  color: "#000",
  fontWeight: "bold",
  marginTop: "10px",
};

const btnPremium = {
  width: "100%",
  display: "block",
  background: "linear-gradient(120deg,#f4c86c,#d9a63f)",
  padding: "12px",
  borderRadius: "10px",
  textAlign: "center",
  textDecoration: "none",
  color: "#000",
  fontWeight: "bold",
  marginTop: "10px",
};

const backLink = {
  display: "block",
  textAlign: "center",
  marginTop: "20px",
  color: "#ccc",
  textDecoration: "none",
};
