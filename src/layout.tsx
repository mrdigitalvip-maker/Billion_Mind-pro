import "./globals.css";

export const metadata = {
  title: "BillionMind AI",
  description: "Acelerador de riqueza e disciplina com IA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body style={{ margin: 0, padding: 0, backgroundColor: "#000" }}>
        {children}
      </body>
    </html>
  );
}
