export default function Home() {
  return (
    <div style={{
      background: "#05060a",
      minHeight: "100vh",
      color: "white",
      padding: "40px",
      fontFamily: "system-ui"
    }}>
      
      <h1 style={{ textAlign: "center", color: "#f4c86c" }}>
        BillionMind AI • Seu Chat de Alta Performance
      </h1>

      <p style={{ textAlign: "center", marginTop: "10px", opacity: 0.8 }}>
        Escolha um plano para começar sua jornada de evolução.
      </p>

      <div style={{
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}>

        {/* Plano Free */}
        <div style={{
          background: "#0c0d16",
          padding: "20px",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.1)"
        }}>
          <h2>Plano FREE</h2>
          <p>Acesso básico, limitado a 30 prompts/mês.</p>
          <a href="/signup" style={buttonStyle}>Criar conta grátis</a>
        </div>

        {/* Plano PRO */}
        <div style={{
          background: "#0c0d16",
          padding: "20px",
          borderRadius: "16px",
          border: "1px solid rgba(244,200,108,0.3)"
        }}>
          <h2>Plano PRO – R$ 49/mês</h2>
          <p>Acesso completo ao chat de alta performance.</p>

          <a href="/api/checkout?plan=pro" style={buttonStyleGold}>
            Assinar Plano PRO
          </a>
        </div>

        {/* Plano PREMIUM */}
        <div style={{
          background: "#0c0d16",
          padding: "20px",
          borderRadius: "16px",
          border: "1px solid rgba(244,200,108,0.3)"
        }}>
          <h2>Plano PREMIUM – R$ 99/mês</h2>
          <p>Recursos ilimitados + imagens + prioridades.</p>

          <a href="/api/checkout?plan=premium" style={buttonStyleGold}>
            Assinar Plano Premium
          </a>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <a href="/login" style={{ color: "#f4c86c" }}>Já tenho conta</a>
      </div>
    </div>
  );
}

const buttonStyle = {
  display: "inline-block",
  marginTop: "10px",
  padding: "12px 20px",
  background: "rgba(255,255,255,0.1)",
  borderRadius: "8px",
  color: "#fff",
  textDecoration: "none"
};

const buttonStyleGold = {
  display: "inline-block",
  marginTop: "10px",
  padding: "12px 20px",
  background: "linear-gradient(120deg,#f4c86c,#e1a93f)",
  borderRadius: "8px",
  color: "#000",
  fontWeight: "bold",
  textDecoration: "none"
};
