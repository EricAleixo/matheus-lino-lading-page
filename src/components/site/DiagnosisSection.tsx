import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { Section, Eyebrow } from "./primitives";

const WHATSAPP_NUMBER = "558391247521";

const FIELDS = [
  { name: "nome", label: "Nome", type: "text", placeholder: "Como você se chama" },
  { name: "empresa", label: "Empresa", type: "text", placeholder: "Nome da empresa" },
  { name: "whatsapp", label: "WhatsApp", type: "tel", placeholder: "DDD + número" },
] as const;

export function DiagnosisSection() {
  const [values, setValues] = useState({ nome: "", empresa: "", whatsapp: "", desafio: "" });

  const message = [
    "Olá, Matheus. Quero tomar decisões melhores no marketing.",
    "",
    `Nome: ${values.nome || "—"}`,
    `Empresa: ${values.empresa || "—"}`,
    `WhatsApp: ${values.whatsapp || "—"}`,
    `Principal desafio atual: ${values.desafio || "—"}`,
  ].join("\n");

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <Section id="diagnostico" tone="ink" className="scroll-mt-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-6rem] h-72 w-[80%] -translate-x-1/2 rounded-full bg-mist/[0.05] blur-3xl"
      />
      <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-5">
          <Eyebrow muted>Diagnóstico inicial</Eyebrow>
          <h2 className="headline mt-5 max-w-[18ch] text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem]">
            Você já precisa tomar decisões demais sozinho.
          </h2>
          <div className="mt-8 space-y-4 text-base leading-[1.8] sm:text-[1.125rem]">
            <p className="max-w-[36ch] text-mist/90">
              As decisões de marketing continuam sendo suas.
            </p>
            <p className="max-w-[36ch] text-steel">
              Você só não precisa mais tomá-las no escuro.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <form
            className="glass-surface soft-surface rounded-[2rem] px-5 py-7 sm:px-8 sm:py-9"
            onSubmit={(event) => {
              event.preventDefault();
              window.open(href, "_blank", "noopener,noreferrer");
            }}
          >
            <div className="space-y-5">
              {FIELDS.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-xs font-semibold text-steel"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    required
                    autoComplete="off"
                    placeholder={field.placeholder}
                    value={values[field.name]}
                    onChange={(event) =>
                      setValues((current) => ({ ...current, [field.name]: event.target.value }))
                    }
                    className="mt-2 min-h-14 w-full rounded-2xl border border-steel/25 bg-ink/40 px-4 text-base text-mist placeholder:text-steel/50 transition-colors duration-200 focus-visible:border-steel focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="desafio" className="block text-xs font-semibold text-steel">
                  Principal desafio atual
                </label>
                <textarea
                  id="desafio"
                  name="desafio"
                  required
                  rows={3}
                  placeholder="O que mais pesa hoje na sua decisão"
                  value={values.desafio}
                  onChange={(event) =>
                    setValues((current) => ({ ...current, desafio: event.target.value }))
                  }
                  className="mt-2 w-full resize-none rounded-2xl border border-steel/25 bg-ink/40 px-4 py-3.5 text-base leading-relaxed text-mist placeholder:text-steel/50 transition-colors duration-200 focus-visible:border-steel focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel"
                />
              </div>
            </div>

            <button
              type="submit"
              className="luminous-button mt-7 inline-flex min-h-16 w-full items-center justify-between gap-4 rounded-full border border-mist/70 bg-mist px-6 text-left text-[0.9375rem] font-semibold text-ink transition-[transform,background-color,box-shadow] duration-200 hover:bg-paper active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel sm:text-base"
            >
              Quero tomar decisões melhores no marketing
              <ArrowUpRight aria-hidden="true" className="h-5 w-5 shrink-0" strokeWidth={1.7} />
            </button>
            <p className="mt-4 text-xs leading-relaxed text-steel/80">
              Ao enviar, o WhatsApp abre com a mensagem pronta para você conferir antes de
              mandar.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
}
