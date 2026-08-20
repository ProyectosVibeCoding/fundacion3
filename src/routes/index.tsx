import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartHandshake, ShieldCheck, GraduationCap, Users, MapPin, Building2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import logo from "@/assets/logo-fundacion.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fundación por un Mundo Mejor | Adicciones y salud mental en Córdoba" },
      {
        name: "description",
        content:
          "20 años acompañando en prevención, asistencia y capacitación en adicciones y salud mental en Córdoba, Argentina. Atención ambulatoria, hospital de día y orientación familiar.",
      },
      { property: "og:title", content: "Fundación por un Mundo Mejor" },
      {
        property: "og:description",
        content:
          "Prevención, asistencia y formación en adicciones y salud mental. 20 años de trayectoria en Córdoba.",
      },
    ],
  }),
  component: Home,
});

const ejes = [
  {
    icon: ShieldCheck,
    title: "Preventivo",
    text: "Trabajo comunitario y barrial con niños, adolescentes y familias para evitar el ingreso al consumo problemático y favorecer la inclusión social y laboral.",
  },
  {
    icon: HeartHandshake,
    title: "Asistencial",
    text: "Acompañamiento en la recuperación, detección temprana, intervención oportuna y estrategias de reducción de daños que mejoran la calidad de vida.",
  },
  {
    icon: GraduationCap,
    title: "Formativo",
    text: "Investigación, capacitación permanente del equipo y divulgación comunitaria de conceptos que transforman la mirada sobre las adicciones.",
  },
];

function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="iso-orb pointer-events-none absolute -left-32 top-10 size-96 opacity-15" />
        <div className="iso-orb pointer-events-none absolute -right-20 bottom-0 size-64 opacity-10" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Córdoba, Argentina · 20 años de trayectoria
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Acompañamos el camino hacia una vida con autonomía
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Promovemos la salud mental y la educación integral de poblaciones vulnerables.
              Trabajamos junto a personas y familias afectadas por el consumo problemático de
              alcohol y drogas, con una mirada humana, profesional y sin estigmatización.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contacto"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-primary/90"
              >
                Necesito ayuda
              </Link>
              <Link
                to="/institucional"
                className="rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                Quiero saber más
              </Link>
            </div>
          </div>
          <div className="relative mx-auto flex max-w-sm items-center justify-center">
            <div className="iso-orb absolute inset-6 opacity-20 blur-2xl" />
            <img
              src={logo.url}
              alt="Isotipo de la Fundación por un Mundo Mejor"
              className="relative w-full"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Nuestros tres ejes</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Una misma tarea, tres formas de sostenerla: prevenir, asistir y formar.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ejes.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="iso-orb flex size-11 items-center justify-center">
                  <Icon className="size-5 text-primary-foreground" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-card-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 rounded-3xl border border-border bg-card p-8 shadow-soft md:grid-cols-3">
            <Trayectoria
              icon={Users}
              title="20 años de trabajo"
              text="Acompañamos a población juvenil y adulta con tratamientos de 14 a 18 meses en modalidad ambulatoria, hospital de día y orientación familiar."
            />
            <Trayectoria
              icon={Building2}
              title="Convenios vigentes"
              text="Trabajamos en convenio con obras sociales y organismos de gobierno, facilitando el acceso al tratamiento."
            />
            <Trayectoria
              icon={MapPin}
              title="Alcance regional"
              text="Recibimos consultas y derivaciones de Córdoba y de otras provincias del país."
            />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl bg-primary px-8 py-12 text-center">
            <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
              ¿Necesitás orientación por vos o por un familiar?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-primary-foreground/85">
              Escribinos y un integrante del equipo se comunica para orientarte sobre los pasos a
              seguir. También recibimos consultas institucionales y de derivación.
            </p>
            <Link
              to="/contacto"
              className="mt-7 inline-block rounded-full bg-background px-6 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
            >
              Escribinos
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Trayectoria({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Users;
  title: string;
  text: string;
}) {
  return (
    <div>
      <Icon className="size-6 text-primary" />
      <h3 className="mt-3 font-semibold text-card-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}
