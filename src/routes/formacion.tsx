import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";

export const Route = createFileRoute("/formacion")({
  head: () => ({
    meta: [
      { title: "Formación y capacitación | Fundación por un Mundo Mejor" },
      {
        name: "description",
        content:
          "Cursos y jornadas abiertas a estudiantes, docentes y comunidad. Unidad de prácticas supervisadas en convenio con UNC, UPC e institutos privados.",
      },
      { property: "og:title", content: "Formación y capacitación | Fundación por un Mundo Mejor" },
      {
        property: "og:description",
        content: "Cursos, jornadas y prácticas supervisadas en convenio con UNC y UPC.",
      },
    ],
  }),
  component: Formacion,
});

function Formacion() {
  return (
    <Layout>
      <PageHero
        eyebrow="Formación"
        title="Capacitación en adicciones y salud mental"
        lead="Compartimos lo que aprendemos: cursos, jornadas y espacios de práctica para estudiantes, docentes, profesionales y la comunidad."
      />

      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <h2 className="text-xl font-semibold">Cursos y jornadas</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Encuentros abiertos sobre prevención, detección temprana, acompañamiento familiar y
              abordaje del consumo problemático. Dirigidos a estudiantes, docentes, equipos de salud
              y organizaciones barriales.
            </p>
            {/* TODO: reemplazar por el calendario real de cursos y jornadas */}
            <ul className="mt-5 space-y-3 text-sm">
              {["Jornada anual de prevención comunitaria", "Curso introductorio en consumos problemáticos", "Taller para familias y referentes barriales"].map(
                (c) => (
                  <li key={c} className="flex items-start gap-2 text-muted-foreground">
                    <span className="iso-orb mt-1.5 size-2 shrink-0" />
                    <span>
                      {c} <em className="text-xs">(fechas a confirmar)</em>
                    </span>
                  </li>
                ),
              )}
            </ul>
          </article>

          <article className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <h2 className="text-xl font-semibold">Convenios y prácticas supervisadas</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Funcionamos como unidad de prácticas supervisadas para carreras de la Universidad
              Nacional de Córdoba (UNC), la Universidad Provincial de Córdoba (UPC) e institutos
              privados. Los estudiantes participan de espacios reales de trabajo, con supervisión
              profesional permanente.
            </p>
            <Link
              to="/contacto"
              className="mt-6 inline-block rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Quiero capacitarme
            </Link>
          </article>
        </div>
      </section>
    </Layout>
  );
}
