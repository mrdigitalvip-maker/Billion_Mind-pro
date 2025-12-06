export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Método não permitido" });
    }

    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Mensagem ausente" });
    }

    // Chamada para sua Função do Supabase "chat"
    const resposta = await fetch(
      "https://lppjltjoxczooxsbtlyr.supabase.co/functions/v1/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + process.env.SUPABASE_FUNCTION_KEY
        },
        body: JSON.stringify({ message })
      }
    );

    const data = await resposta.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno", details: error.toString() });
  }
}
