export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-white">

      {/* HEADER */}
      <header className="w-full flex justify-between items-center px-8 py-6 bg-transparent">
        <h1 className="text-3xl font-bold text-[#ffb000] tracking-wider">
          BILLIONMIND AI
        </h1>

        <nav className="flex gap-6 text-lg">
          <a href="/" className="hover:text-[#ffb000]">Início</a>
          <a href="/como-funciona" className="hover:text-[#ffb000]">Como funciona</a>
          <a href="/jornadas" className="hover:text-[#ffb000]">Jornadas</a>
          <a href="/planos" className="hover:text-[#ffb000]">Planos</a>
        </nav>

        <a
          href="/entrar"
          className="px-6 py-2 bg-[#ffb000] text-black rounded-lg font-semibold hover:bg-[#ffcc33]"
        >
          Entrar
        </a>
      </header>

      {/* HERO SECTION */}
      <section className="px-10 mt-10 max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold leading-tight">
          Transforme sua mente em uma BillionMind: disciplina, luxo e liberdade em um único chat.
        </h1>

        <p className="text-gray-300 text-lg mt-6">
          BillionMind AI é um assistente de Alta Performance que transforma hábitos,
          mentalidade e comportamento em uma versão 10× superior de você mesmo.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="/criar"
            className="px-8 py-3 bg-[#ffb000] text-black rounded-lg font-semibold text-lg hover:bg-[#ffcc33]"
          >
            Começar agora
          </a>

          <a
            href="/entrar"
            className="px-8 py-3 border border-[#ffb000] text-[#ffb000] rounded-lg text-lg hover:bg-[#ffb000] hover:text-black"
          >
            Entrar
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-20 px-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="p-6 bg-[#111] rounded-xl border border-[#222]">
          <h3 className="text-xl font-bold text-[#ffb000] mb-2">Chat de Alta Performance</h3>
          <p className="text-gray-300">
            Converse com uma IA preparada para disciplina, foco e mentalidade de riqueza.
          </p>
        </div>

        <div className="p-6 bg-[#111] rounded-xl border border-[#222]">
          <h3 className="text-xl font-bold text-[#ffb000] mb-2">Planos Diários</h3>
          <p className="text-gray-300">
            Estruturas de 7, 21 e 30 dias para transformar sua mentalidade.
          </p>
        </div>

        <div className="p-6 bg-[#111] rounded-xl border border-[#222]">
          <h3 className="text-xl font-bold text-[#ffb000] mb-2">Imagens Motivacionais IA</h3>
          <p className="text-gray-300">
            Gere imagens com inteligência artificial para motivação, lifestyle e disciplina.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full text-center text-gray-400 py-10 mt-20 border-t border-[#222]">
        BillionMind AI © 2025 — Todos os direitos reservados.
      </footer>
    </div>
  );
}
