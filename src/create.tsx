export const metadata = {
  title: "Criar Produto Digital • BillionMind",
};

export default function CreateProductPage() {
  return (
    <main style={{ padding: "100px 20px 40px", color: "white" }}>
      <h1 style={{
        fontSize: "28px",
        fontWeight: "800",
        background: "linear-gradient(90deg,#00ff9d,#00d0ff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginBottom: "20px"
      }}>
        Criar Produto Digital
      </h1>

      <p style={{ opacity: 0.7, marginBottom: "20px" }}>
        Use a inteligência artificial do BillionMind para gerar um produto completo,
        pronto para vender. Basta preencher abaixo.
      </p>

      <div style={{
        background: "rgba(255,255,255,0.05)",
        padding: "20px",
        borderRadius: "16px",
        marginBottom: "20px",
        border: "1px solid rgba(0,255,157,0.3)"
      }}>
        <label>Título do produto</label>
        <input
          type="text"
          placeholder="Ex: Guia Definitivo do Dinheiro"
          style={{
            width: "100%",
            marginTop: "6px",
            background: "rgba(255,255,255,0.1)",
            border: "none",
            padding: "12px",
            borderRadius: "10px",
            color: "white"
          }}
        />

        <label style={{ marginTop: "20px", display: "block" }}>Descrição</label>
        <textarea
          placeholder="Descreva o produto que deseja criar"
          rows={5}
          style={{
            width: "100%",
            marginTop: "6px",
            background: "rgba(255,255,255,0.1)",
            border: "none",
            padding: "12px",
            borderRadius: "10px",
            color: "white"
          }}
        />

        <button
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "2px solid #00ff9d",
            background: "transparent",
            color: "#00ff9d",
            fontWeight: "800",
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: "0 0 20px rgba(0,255,157,0.4)"
          }}
          onClick={() => alert("IA criando seu produto digital...")}
        >
          GERAR COM IA
        </button>
      </div>
    </main>
  );
}
