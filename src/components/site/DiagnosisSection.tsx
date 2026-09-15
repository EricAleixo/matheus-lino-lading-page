import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

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
    <section
      id="diagnostico"
      className="veil-atmosphere relative isolate overflow-hidden pt-20 pb-28 text-mist scroll-mt-8 sm:pt-28 sm:pb-36 lg:pt-32 lg:pb-40"
    >
      {/* Luz ambiente difusa */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-steel/10 blur-[130px] sm:h-[32rem] sm:w-[32rem]"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-16 lg:items-start">
          {/* Coluna Esquerda: Headline de Fechamento */}
          <div className="lg:col-span-5">
            <span className="tag-mono text-[0.6875rem] text-steel">DIAGNÓSTICO INICIAL</span>
            <h2 className="headline mt-4 text-[2.125rem] leading-[1.08] text-mist sm:text-[2.75rem] lg:text-[3.25rem]">
              Você já precisa tomar decisões demais sozinho.
            </h2>
            <div className="mt-8 space-y-3 border-l-2 border-steel/30 pl-4 sm:mt-10 sm:pl-6">
              <p className="text-base leading-[1.8] text-mist sm:text-lg">
                As decisões de marketing continuam sendo suas.
              </p>
              <p className="text-base leading-[1.8] text-steel sm:text-lg">
                Você só não precisa mais tomá-las no escuro.
              </p>
            </div>
          </div>

          {/* Coluna Direita: Formulário de Diagnóstico */}
          <div className="lg:col-span-7">
            <form
              className="glass-panel-dark rounded-[2.5rem] p-6 shadow-2xl sm:p-10"
              onSubmit={(event) => {
                event.preventDefault();
                window.open(href, "_blank", "noopener,noreferrer");
              }}
            >
              <div className="space-y-5 sm:space-y-6">
                {FIELDS.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-xs font-semibold uppercase tracking-wider text-steel"
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
                      className="mt-2 min-h-[52px] w-full rounded-2xl border border-steel/20 bg-deep/40 px-4.5 text-base text-mist placeholder:text-steel/40 transition-all duration-200 focus-visible:border-mist/60 focus-visible:bg-deep/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel"
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="desafio"
                    className="block text-xs font-semibold uppercase tracking-wider text-steel"
                  >
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
                    className="mt-2 w-full resize-none rounded-2xl border border-steel/20 bg-deep/40 px-4.5 py-3.5 text-base leading-relaxed text-mist placeholder:text-steel/40 transition-all duration-200 focus-visible:border-mist/60 focus-visible:bg-deep/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group luminous-button mt-8 inline-flex min-h-[58px] w-full items-center justify-between gap-4 rounded-2xl border border-mist/80 bg-mist px-7 text-left text-[0.9375rem] font-semibold text-ink transition-all duration-300 active:scale-[0.98] hover:bg-paper hover:shadow-[0_0_35px_rgba(227,228,232,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel sm:text-base"
              >
                <span>Quero tomar decisões melhores no marketing</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-ink/10 text-ink transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-ink group-hover:text-mist">
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </button>

              <p className="mt-4 text-xs leading-relaxed text-steel/70">
                Ao enviar, o WhatsApp abre com a mensagem pronta para você conferir antes de mandar.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
