const features = [
  {
    title: "Faturamento Geral",
    text: "Líquido, quantidade e desconto com comparativo entre ano anterior e atual, por unidade, refeição, modalidade e dia da semana.",
  },
  {
    title: "Categorias e Produtos",
    text: "Descubra o que realmente sustenta o seu cardápio e o que ocupa espaço sem render.",
  },
  {
    title: "Mapa de Calor",
    text: "Veja os horários e as mesas que mais faturam e escale a equipe com base em dados.",
  },
  {
    title: "Ticket Médio",
    text: "Acompanhe atendimentos e ticket médio ao longo do tempo, por unidade.",
  },
  {
    title: "Vendedores",
    text: "Ranking da equipe e o dinheiro que fica na mesa quando o time está abaixo da média.",
  },
  {
    title: "Multiempresa",
    text: "Alterne entre as unidades e empresas do grupo sem trocar de login.",
  },
];

const steps = [
  {
    n: "01",
    title: "Conectamos seus dados",
    text: "O faturamento do seu sistema de gestão é importado e organizado automaticamente.",
  },
  {
    n: "02",
    title: "Você filtra como quiser",
    text: "Mês, ano, turno, unidade, modalidade, categoria e dia da semana em segundos.",
  },
  {
    n: "03",
    title: "Decide com clareza",
    text: "Metas, ranking e comparativos mostram onde agir primeiro.",
  },
];

const bars = [38, 52, 44, 66, 58, 80, 72, 92];

function DashboardPreview() {
  return (
    <div
      aria-hidden="true"
      className="rounded-3xl border border-line bg-white p-4 shadow-[0_30px_80px_-30px_rgba(26,114,209,0.45)] sm:p-6"
    >
      <div className="mb-4 flex items-center justify-between rounded-xl bg-brand px-4 py-3 text-white">
        <span className="text-xs font-semibold tracking-widest">RESTOBI</span>
        <span className="text-xs opacity-90">Faturamento Geral</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {["Líquido", "Atendimentos", "Ticket médio"].map((l, i) => (
          <div key={l} className="rounded-xl bg-brand-soft p-3">
            <p className="text-[11px] text-muted">{l}</p>
            <div
              className="mt-2 h-4 rounded bg-brand/25"
              style={{ width: `${70 - i * 12}%` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex h-40 items-end gap-2 rounded-xl border border-line p-4">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md bg-gradient-to-t from-brand to-sky-400"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line bg-white/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <a href="#" className="text-lg font-bold tracking-tight text-brand">
            Resto<span className="text-foreground">BI</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted md:flex">
            <a href="#recursos" className="hover:text-foreground">Recursos</a>
            <a href="#como-funciona" className="hover:text-foreground">Como funciona</a>
            <a href="#em-breve" className="hover:text-foreground">Novidades</a>
          </div>
          <a
            href="https://restobi.com.br/login"
            className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-dark"
          >
            Entrar
          </a>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft to-white">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="mb-4 inline-block rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-brand">
                Inteligência de dados para restaurantes
              </p>
              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
                Seu restaurante fala em números. O RestoBI traduz.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted">
                Faturamento, ticket médio, horários de pico e desempenho da
                equipe em um só painel, para você decidir com dados e não com
                achismo.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contato"
                  className="rounded-xl bg-brand px-6 py-3 font-medium text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
                >
                  Quero conhecer
                </a>
                <a
                  href="#recursos"
                  className="rounded-xl border border-line bg-white px-6 py-3 font-medium transition hover:border-brand hover:text-brand"
                >
                  Ver recursos
                </a>
              </div>
            </div>
            <DashboardPreview />
          </div>
        </section>

        <section id="recursos" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
          <h2 className="text-3xl font-bold tracking-tight">
            Tudo o que você precisa enxergar
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Seis painéis pensados para a rotina de quem gerencia restaurante.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className="rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10"
              >
                <div className="mb-4 h-1.5 w-10 rounded-full bg-brand" />
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="como-funciona"
          className="scroll-mt-20 bg-foreground py-20 text-white"
        >
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-3xl font-bold tracking-tight">Como funciona</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.n}>
                  <span className="text-sm font-mono text-sky-300">{s.n}</span>
                  <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="em-breve" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
          <div className="rounded-3xl bg-gradient-to-br from-brand to-sky-500 p-8 text-white sm:p-12">
            <p className="text-xs font-semibold tracking-widest opacity-80">
              EM BREVE
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Curva ABC de vendas e relatórios exportáveis
            </h2>
            <p className="mt-3 max-w-2xl opacity-90">
              Identifique os itens classe A que sustentam o seu faturamento e
              leve os relatórios em PDF ou planilha para a reunião.
            </p>
          </div>
        </section>

        <section id="contato" className="mx-auto max-w-3xl scroll-mt-20 px-5 pb-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Pronto para ver seus números com clareza?
          </h2>
          <p className="mt-3 text-muted">
            Já é cliente? Acesse o painel e continue de onde parou.
          </p>
          <a
            href="https://restobi.com.br/login"
            className="mt-8 inline-block rounded-xl bg-brand px-8 py-3.5 font-medium text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
          >
            Acessar o RestoBI
          </a>
        </section>
      </main>

      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        © 2026 RestoBI. Desenvolvido por Dev+.
      </footer>
    </>
  );
}
