import { memo } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

function FooterBase() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="CloudCo" width={32} height={32} className="h-8 w-8" />
            <span className="font-display text-lg font-bold">CloudCo</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Ingeniería de software de alto nivel para empresas que no se
            conforman con lo convencional. Engineered for Results.
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Twitter, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="Social"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-primary">
            Recursos
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#servicios" className="hover:text-primary transition-colors">Nuestros Servicios</a></li>
            <li><a href="#beneficios" className="hover:text-primary transition-colors">Casos de Éxito</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Blog Tech</a></li>
            <li><a href="#contacto" className="hover:text-primary transition-colors">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-primary">
            Legal
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/politica" className="hover:text-primary transition-colors">
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link to="/terminos" className="hover:text-primary transition-colors">
                Términos y Condiciones
              </Link>
            </li>
            <li><a href="#" className="hover:text-primary transition-colors">Seguridad de Datos</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          © 2026 CloudCo S.A.S. Todos los derechos reservados. · Santa Marta, Colombia
        </p>
      </div>
    </footer>
  );
}

export const Footer = memo(FooterBase);