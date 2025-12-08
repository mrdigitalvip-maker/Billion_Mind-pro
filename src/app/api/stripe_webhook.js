import Stripe from "stripe";
import { NextResponse } from "next/server";

// Inicializa Stripe com sua chave secreta
const stripe = new Stripe(process.env.CHAVE_SECRETA_STRIPE);

// DESATIVA o body parser para permitir a verificação do webhook
export const config = {
  api: {
    bodyParser: false,
  },
};

// Função para ler o corpo bruto da requisição
async function getRawBody(req) {
  const chunks = [];
  for await (const chunk of req.body) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export async function POST(req) {
  try {
    const rawBody = await getRawBody(req);
    const signature = req.headers.get("stripe-signature");

    // Verifica assinatura do Stripe
    const event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    // EVENTO DE PAGAMENTO CONFIRMADO
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const email = session.customer_details.email;

      // Plano comprado
      const plano = session.metadata?.plano || "PRO";

      // Aqui você pode integrar com Supabase
      console.log("Pagamento confirmado:", email, plano);

      // Exemplo de atualização no Supabase (se quiser ativamos):
      // await supabase.from("usuarios").update({ plano }).eq("email", email);
    }

    return NextResponse.json({ received: true }, { status: 200 });

  } catch (err) {
    console.error("Erro no Webhook Stripe:", err);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
