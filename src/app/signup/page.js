"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Signup() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function signup(e) {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (!email || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    setSuccess("Conta criada com sucesso! Você será redirecionado...");
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  }

  return (
    <div style={container}>
      <form onSubmit={signup} style={card}>
        <h2 style={{ color: "#f4c86c", textAlign: "center" }}>Criar Conta</h2>

        {error && <div style={errorBox}>{error}</div>}
        {success && <div style={successBox}>{success}</div>}

        <input name="email" placeholder="Seu e-mail" style={input} />
        <input name="password" type="password" placeholder="Crie uma senha" style={input} />

        <button style={button}>Registrar</button>

        <a href="/login" style={link}>Já tenho conta</a>
      </form>
    </div>
  );
}

const container = {
  background: "#020308",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "system-ui",
};

const card = {
  width: "90%",
  maxWidth: "380px",
  padding: "28px",
  borderRadius: "16px",
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(8px)",
  border: "1px solid rgba(255,255,255,0.1)",
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  background: "rgba(255,255,255,0.1)",
  color: "white",
  border: "none",
};

const button = {
  width: "100%",
  padding: "12px",
  background: "linear-gradient(120deg,#f4c86c,#e1a93f)",
  border: "none",
  borderRadius: "8px",
  color: "#000",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "5px",
};

const link = {
  color: "#f4c86c",
  textDecoration: "none",
  display: "block",
  textAlign: "center",
  marginTop: "12px",
};

const errorBox = {
  background: "rgba(255,0,0,0.2)",
  padding: "8px",
  borderRadius: "8px",
  color: "#ff6b6b",
  textAlign: "center",
  marginBottom: "10px",
};

const successBox = {
  background: "rgba(0,255,0,0.2)",
  padding: "8px",
  borderRadius: "8px",
  color: "#6bff6b",
  textAlign: "center",
  marginBottom: "10px",
};
