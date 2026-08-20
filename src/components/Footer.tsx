import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/logo-fundacion.png.asset.json";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Isotipo de la Fundación por un Mundo Mejor"
              className="h-10 w-10 opacity-90 grayscale"
            />
            <span className="font-display text-sm font-bold text-foreground">
              Fundación por un Mundo Mejor
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Prevención, asistencia y capacitación en adicciones y salud mental. 20 años de
            trayectoria en Córdoba, Argentina.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Secciones</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/institucional" className="hover:text-primary">Institucional</Link></li>
            <li><Link to="/a-quien-atendemos" className="hover:text-primary">A quién atendemos</Link></li>
            <li><Link to="/formacion" className="hover:text-primary">Formación y capacitación</Link></li>
            <li><Link to="/contacto" className="hover:text-primary">Contacto y derivaciones</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              27 de abril 616, Córdoba, Argentina (5000)
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href="tel:+5493516716580" className="hover:text-primary">
                +54 9 351 671-6580
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-primary" />
              <a
                href="https://wa.me/5493516716580"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                WhatsApp: consultas y turnos
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Fundación por un Mundo Mejor. Todos los derechos reservados.
      </div>
    </footer>
  );
}
