import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Layout, PageHero } from "@/components/Layout";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto y derivaciones | Fundación por un Mundo Mejor" },
      {
        name: "description",
        content:
          "Consultá por vos o por un familiar, gestioná una derivación institucional o pedí información sobre capacitaciones. Córdoba, Argentina.",
      },
      { property: "og:title", content: "Contacto y derivaciones | Fundación por un Mundo Mejor" },
      {
        property: "og:description",
        content: "Consultas de familias, derivaciones institucionales y formación.",
      },
    ],
  }),
  component: Contacto,
});

const tipos = [
  { id: "familia", label: "Por un familiar o paciente" },
  { id: "institucional", label: "Derivación institucional" },
  { id: "formacion", label: "Quiero capacitarme" },
] as const;

// TODO: conectar el envío a n8n/Make en la etapa 2. Por ahora se usa mailto.
const EMAIL_DESTINO = "contacto@porunmundomejor.org"; // placeholder

function Contacto() {
  const [tipo, setTipo] = useState<(typeof tipos)[number]["id"]>("familia");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const asunto = `Consulta web — ${tipos.find((t) => t.id === tipo)?.label}`;
    const cuerpo = [
      `Tipo de consulta: ${tipos.find((t) => t.id === tipo)?.label}`,
      `Nombre: ${data.get("nombre")}`,
      `Email: ${data.get("email")}`,
      `Teléfono: ${data.get("telefono")}`,
      tipo === "institucional" ? `Institución: ${data.get("institucion")}` : "",
      "",
      `${data.get("mensaje")}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${EMAIL_DESTINO}?subject=${encodeURIComponent(
      asunto,
    )}&body=${encodeURIComponent(cuerpo)}`;
  }

  return (
    <Layout>
      <PageHero
        eyebrow="Contacto"
        title="Estamos para escucharte"
        lead="Contanos brevemente tu situación y un integrante del equipo se comunica con vos. Toda consulta es confidencial."
      />

      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <fieldset>
              <legend className="text-sm font-semibold">Tipo de consulta</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {tipos.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTipo(t.id)}
                    aria-pressed={tipo === t.id}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      tipo === t.id
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Nombre y apellido" name="nombre" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Teléfono" name="telefono" type="tel" />
              {tipo === "institucional" && <Field label="Institución u obra social" name="institucion" />}
            </div>

            <label className="mt-4 block text-sm font-medium" htmlFor="mensaje">
              Mensaje
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                required
                placeholder={
                  tipo === "familia"
                    ? "Contanos brevemente qué está pasando y cómo podemos ayudarte."
                    : tipo === "institucional"
                      ? "Detallanos el motivo de la derivación y los datos de contacto institucional."
                      : "Contanos qué formación te interesa."
                }
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
              />
            </label>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
            >
              Enviar consulta
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              Al enviar se abrirá tu cliente de correo con el mensaje listo para despachar.
            </p>
          </form>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-7">
              <h2 className="text-lg font-semibold">Datos de contacto</h2>
              {/* TODO: reemplazar datos placeholder por los definitivos */}
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  Ciudad de Córdoba, Argentina (dirección a confirmar)
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                  +54 351 000 0000 (placeholder)
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                  {EMAIL_DESTINO}
                </li>
                <li className="flex items-start gap-2">
                  <MessageCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                  WhatsApp institucional (a integrar)
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-secondary/60 p-7">
              <h2 className="text-lg font-semibold">Horarios de atención</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Lunes a viernes, de 8 a 18 h. <em>(Horario placeholder, a confirmar)</em>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium" htmlFor={name}>
      {label}
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
      />
    </label>
  );
}
