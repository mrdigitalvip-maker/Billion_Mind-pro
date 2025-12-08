import OpenAI from "openai";

// Carrega a API Key da Vercel (NUNCA coloque a chave fixa no código)
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return Response.json({ reply: "Nenhuma mensagem recebida." });
    }

    // Chamada à IA
    const completion = await client.chat.completions.create({
      model: "gpt-4.1",
      messages: [
        { role: "system", content: "Você é a IA BillionMind, direta, inteligente e moderna." },
        { role: "user", content: message }
      ],
    });

    const aiMessage = completion.choices[0].message.content;

    return Response.json({ reply: aiMessage });
  } catch (error) {
    console.error("ERRO NO CHAT:", error);
    return Response.json({ reply: "Erro ao gerar resposta da IA." });
  }
}
