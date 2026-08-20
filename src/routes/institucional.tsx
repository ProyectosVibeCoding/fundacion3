import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";

export const Route = createFileRoute("/institucional")({
  head: () => ({
    meta: [
      { title: "Institucional | Fundación por un Mundo Mejor" },
      {
        name: "description",
        content:
          "Quiénes somos: fundamentación, objeto, objetivos preventivos, asistenciales y formativos de la Fundación por un Mundo Mejor, Córdoba.",
      },
      { property: "og:title", content: "Institucional | Fundación por un Mundo Mejor" },
      {
        name: "og:description",
        content: "Fundamentación, objeto y objetivos de la Fundación por un Mundo Mejor.",
      },
      { property: "og:description", content: "Fundamentación, objeto y objetivos institucionales." },
    ],
  }),
  component: Institucional,
});

const objetivos = [
  {
    title: "Objetivos preventivos",
    items: [
      "Evitar el ingreso al consumo problemático de alcohol y otras drogas.",
      "Promover voluntariados barriales y trabajo comunitario con niños y adolescentes en situación de vulnerabilidad.",
      "Orientar a las familias en la crianza y en la detección de señales tempranas.",
      "Favorecer la inclusión social y laboral de los jóvenes.",
    ],
  },
  {
    title: "Objetivos asistenciales",
    items: [
      "Acompañar la recuperación de las personas afectadas por el consumo.",
      "Facilitar la detección precoz y la intervención oportuna con los adultos responsables de la crianza.",
      "Sostener estrategias de reducción de daños y de mejora de la calidad de vida.",
    ],
  },
  {
    title: "Objetivos formativos",
    items: [
      "Investigar y capacitar en la problemática adictiva.",
      "Sostener la actualización permanente del equipo profesional.",
      "Divulgar en la comunidad conceptos que transforman la mirada sobre el consumo.",
    ],
  },
];

function Institucional() {
  return (
    <Layout>
      <PageHero
        eyebrow="Quiénes somos"
        title="Una fundación cordobesa dedicada a la salud mental y la prevención"
        lead="Trabajamos por la autonomía y el autogobierno de las personas, desalentando alternativas ilusorias de realización personal como el abuso de alcohol y drogas."
      />

      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2">
          <article>
            <h2 className="text-2xl font-bold">Fundamentación</h2>
            <p className="mt-4 text-muted-foreground">
              La Fundación promueve la salud mental y la educación integral de poblaciones
              vulnerables. Estimulamos a nivel comunitario la educación no formal, la organización
              barrial y la contención de niños y jóvenes, priorizando la prevención primaria como la
              herramienta más transformadora.
            </p>
            <p className="mt-4 text-muted-foreground">
              Acompañamos a quienes ya se vieron afectados por el consumo, y también a sus familias,
              con tratamientos que se despliegan entre 14 y 18 meses en modalidad ambulatoria,
              hospital de día y orientación familiar.
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-bold">Objeto de la Fundación</h2>
            <p className="mt-4 text-muted-foreground">
              Prevenir, asistir y capacitar en materia de adicciones y salud mental, articulando con
              obras sociales, organismos de gobierno, universidades e instituciones de la comunidad.
              Nuestra tarea alcanza a población juvenil y adulta de Córdoba y de otras provincias.
            </p>
            <div className="mt-6 rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold">Nuestra mirada</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                El equipo se nutre de distintas corrientes de la psicología y del psicoanálisis
                orientadas a la autonomía y el autogobierno del sujeto. Cada persona es acompañada
                para recuperar su capacidad de decidir sobre su propia vida.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section-pad bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold sm:text-3xl">Objetivos</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {objetivos.map((grupo) => (
              <article key={grupo.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold text-card-foreground">{grupo.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {grupo.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="iso-orb mt-1.5 size-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold sm:text-3xl">Equipo terapéutico</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Un equipo interdisciplinario con formación y supervisión permanente.
          </p>
          {/* TODO: reemplazar placeholders por fotos y bios reales del equipo */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-2xl border border-dashed border-border p-6 text-center">
                <div className="iso-orb mx-auto size-20 opacity-30" />
                <p className="mt-4 font-semibold">Nombre y apellido</p>
                <p className="text-sm text-muted-foreground">
                  Rol profesional (contenido placeholder)
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TODO: contenido metodología pendiente — la sección de Programas Terapéuticos
          se incorporará cuando llegue el material actualizado (ya no hay internación). */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl border border-dashed border-primary/40 bg-secondary/40 p-8">
            <h2 className="text-xl font-semibold">Metodología y programas terapéuticos</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Próximamente. Estamos actualizando la información sobre nuestros programas y
              modalidades de atención.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
