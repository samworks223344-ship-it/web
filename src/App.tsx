const cards = [
  {
    title: "Vite + React + TypeScript",
    body: "The dev server runs inside Docker with hot module reloading enabled.",
  },
  {
    title: "Alloy environment",
    body: ".alloy/environment.json points at docker-compose.alloy.yaml and port 3000.",
  },
  {
    title: "Host networking",
    body: "The compose service uses network_mode: host, so no published ports are needed.",
  },
];

export default function App() {
  return (
    <main
      style={{
        maxWidth: 880,
        margin: "0 auto",
        padding: "64px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 32,
      }}
    >
      <header style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <span
          style={{
            alignSelf: "flex-start",
            padding: "4px 10px",
            borderRadius: 999,
            background: "#e8efff",
            color: "var(--accent)",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          Ready
        </span>
        <h1 style={{ margin: 0, fontSize: 40, lineHeight: 1.15 }}>Web</h1>
        <p style={{ margin: 0, color: "var(--muted)", fontSize: 17, maxWidth: 560 }}>
          A starting point for this repository. Edit <code>src/App.tsx</code> and the page
          updates instantly.
        </p>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
        }}
      >
        {cards.map((card) => (
          <article
            key={card.title}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: 12,
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <h2 style={{ margin: 0, fontSize: 16 }}>{card.title}</h2>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: 14, lineHeight: 1.5 }}>
              {card.body}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
