import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";

export const Route = createFileRoute("/a-quien-atendemos")({
  head: () => ({
    meta: [
      { title: "A quién atendemos | Fundación por un Mundo Mejor" },
      {
        name: "description",
        content:
          "Acompañamos a jóvenes y adultos con consumo problemático de sustancias y patología dual, con o sin causa judicial, y a sus familias.",
      },
      { property: "og:title", content: "A quién atendemos | Fundación por un Mundo Mejor" },
      {
        property: "og:description",
        content: "Perfil de las personas que acompañamos y modalidades de atención.",
      },
    ],
  }),
  component: AQuienAtendemos,
});

const perfiles = [
  {
    title: "Personas con consumo problemático",
    text: "Jóvenes y adultos afectados por el uso de sustancias psicotrópicas, en distintos momentos de su recorrido: primeras consultas, tratamientos en curso y sostén posterior.",
  },
  {
    title: "Situaciones de patología dual",
    text: "Personas que atraviesan a la vez un consumo problemático y un padecimiento de salud mental, con un abordaje que contempla ambas dimensiones.",
  },
  {
    title: "Personas con causa judicial",
    text: "Acompañamos también a quienes llegan derivados por el sistema judicial, con el mismo cuidado y sin distinciones en el trato.",
  },
  {
    title: "Familias y personas cercanas",
    text: "La orientación familiar es parte del tratamiento: quienes acompañan también necesitan escucha y herramientas.",
  },
];

const modalidades = [
  { title: "Ambulatorio", text: "Encuentros terapéuticos con continuidad de la vida cotidiana." },
  { title: "Hospital de día", text: "Dispositivo intensivo con actividades a lo largo de la jornada." },
  { title: "Orientación familiar", text: "Espacio de trabajo con el entorno afectivo de la persona." },
];

function AQuienAtendemos() {
  return (
    <Layout>
      <PageHero
        eyebrow="Atención"
        title="A quién atendemos"
        lead="Recibimos a cada persona sin etiquetas. Escuchamos su historia, evaluamos su situación y construimos juntos un recorrido posible."
      />

      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
          {perfiles.map((p) => (
            <article key={p.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-card-foreground">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold sm:text-3xl">Modalidades de atención</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Los tratamientos se desarrollan habitualmente entre 14 y 18 meses, con seguimiento
            personalizado.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {modalidades.map((m) => (
              <div key={m.title} className="rounded-2xl border border-border bg-card p-6">
                <span className="iso-orb block size-8" />
                <h3 className="mt-4 font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.text}</p>
              </div>
            ))}
          </div>
          {/* TODO: contenido metodología pendiente — detalle de programas terapéuticos actualizado */}
          <p className="mt-8 text-sm text-muted-foreground">
            El detalle de los programas terapéuticos se publicará próximamente.{" "}
            <Link to="/contacto" className="font-medium text-primary hover:underline">
              Consultanos
            </Link>{" "}
            mientras tanto.
          </p>
        </div>
      </section>
    </Layout>
  );
}
