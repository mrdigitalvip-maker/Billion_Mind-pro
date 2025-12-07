import Stripe from "stripe";

export const config = {
  api: {
    bodyParser: false, // necessário para validar a assinatura
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Método não permitido");
  }

  const buf = await buffer(req);
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET // seu whsec_
    );
  } catch (err) {
    return res.status(400).send(`Erro no webhook: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const email = session.customer_details.email;
    const priceId = session.metadata?.price_id;

    let plan = "free";
    if (priceId === "price_1SYaniARia0ROQXBL4xAFQBo") plan = "pro";
    if (priceId === "price_1SYaspARia0ROQXBunnpCkml") plan = "premium";

    // Atualizar no Supabase
    await fetch(`${process.env.SUPABASE_URL}/rest/v1/profiles?email=eq.${email}`, {
      method: "PATCH",
      headers: {
        apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plan }),
    });

    console.log("Plano atualizado:", email, plan);
  }

  res.json({ received: true });
}

// Função para capturar o body bruto
function buffer(req) {
  return new Promise((resolve, reject) => {
    let chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}
