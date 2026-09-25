import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { submitDiagnosisLead } from "@/server-functions/Diagnosis-leads.server";

const WHATSAPP_NUMBER = "558391247521";

const goalOptions = [
  "Vender mais",
  "Gerar mais leads",
  "Melhorar posicionamento",
  "Organizar marketing",
  "Melhorar redes sociais",
  "Outro",
];

const investmentOptions = [
  "Ainda não investe",
  "Até R$ 1.000/mês",
  "R$ 1.000 a R$ 3.000/mês",
  "R$ 3.000 a R$ 10.000/mês",
  "Acima de R$ 10.000/mês",
];

type FormValues = {
  name: string;
  company: string;
  role: string;
  whatsapp: string;
  email: string;
  websiteOrInstagram: string;
  goal: string;
  investment: string;
  message: string;
};

type FieldName = keyof FormValues;

const initialValues: FormValues = {
  name: "",
  company: "",
  role: "",
  whatsapp: "",
  email: "",
  websiteOrInstagram: "",
  goal: "",
  investment: "",
  message: "",
};

type FormErrors = Partial<Record<FieldName, string>>;

function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

function normalizeBrazilianWhatsAppDigits(value: string) {
  const digits = onlyDigits(value);
  const localDigits = digits.length > 11 && digits.startsWith("55") ? digits.slice(2) : digits;

  return localDigits.slice(0, 11);
}

function formatWhatsApp(value: string) {
  const digits = normalizeBrazilianWhatsAppDigits(value);

  if (digits.length <= 2) {
    return digits;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function normalizeValues(values: FormValues): FormValues {
  return {
    ...values,
    name: values.name.trim(),
    company: values.company.trim(),
    role: values.role.trim(),
    whatsapp: normalizeBrazilianWhatsAppDigits(values.whatsapp),
    email: values.email.trim(),
    websiteOrInstagram: values.websiteOrInstagram.trim(),
    goal: values.goal.trim(),
    investment: values.investment.trim(),
    message: values.message.trim(),
  };
}

function validateValues(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name) errors.name = "Informe seu nome.";
  if (!values.email) errors.email = "Informe seu e-mail.";
  if (values.email && !isValidEmail(values.email)) errors.email = "Use um e-mail válido.";
  if (!values.whatsapp) errors.whatsapp = "Informe seu WhatsApp.";
  if (values.whatsapp && onlyDigits(values.whatsapp).length < 10) {
    errors.whatsapp = "Informe o DDD e o número.";
  }
  if (!values.company) errors.company = "Informe o nome da empresa.";
  if (!values.goal) errors.goal = "Selecione o objetivo principal.";
  if (!values.investment) errors.investment = "Selecione o investimento atual.";

  return errors;
}

function buildMainChallenge(values: FormValues) {
  return [
    `Objetivo principal: ${values.goal}`,
    `Investimento atual em marketing: ${values.investment}`,
    values.role ? `Cargo: ${values.role}` : "",
    values.message ? `Mensagem: ${values.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function buildWhatsAppMessage(values: FormValues) {
  return [
    "Olá, Matheus. Quero tomar decisões melhores no marketing.",
    "",
    `Nome: ${values.name || "—"}`,
    `Empresa: ${values.company || "—"}`,
    values.role ? `Cargo: ${values.role}` : "",
    `E-mail: ${values.email || "—"}`,
    `WhatsApp: ${values.whatsapp || "—"}`,
    values.websiteOrInstagram ? `Site/Instagram: ${values.websiteOrInstagram}` : "",
    `Objetivo principal: ${values.goal || "—"}`,
    `Investimento atual: ${values.investment || "—"}`,
    values.message ? `Mensagem: ${values.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function buildWhatsAppUrl(values: FormValues) {
  const message = buildWhatsAppMessage(values);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getTrackingData() {
  if (typeof window === "undefined") {
    return {
      pagePath: "",
      utmSource: "",
      utmMedium: "",
      utmCampaign: "",
      utmContent: "",
      utmTerm: "",
    };
  }

  const searchParams = new URLSearchParams(window.location.search);

  return {
    pagePath: window.location.pathname,
    utmSource: searchParams.get("utm_source") ?? "",
    utmMedium: searchParams.get("utm_medium") ?? "",
    utmCampaign: searchParams.get("utm_campaign") ?? "",
    utmContent: searchParams.get("utm_content") ?? "",
    utmTerm: searchParams.get("utm_term") ?? "",
  };
}

const inputClassName =
  "mt-2 min-h-[52px] w-full rounded-2xl border border-steel/20 bg-deep/40 px-4.5 text-base text-mist placeholder:text-steel/40 transition-all duration-200 focus-visible:border-mist/60 focus-visible:bg-deep/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel";

const labelClassName = "block text-xs font-semibold uppercase tracking-wider text-steel";

function RequiredMark() {
  return <span className="text-mist/80"> *</span>;
}

export function DiagnosisSection() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [whatsAppFallbackUrl, setWhatsAppFallbackUrl] = useState("");

  function updateValue(key: FieldName) {
    return (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const nextValue = key === "whatsapp" ? formatWhatsApp(event.target.value) : event.target.value;

      setValues((current) => ({ ...current, [key]: nextValue }));
      setErrors((current) => {
        if (!current[key]) return current;
        const nextErrors = { ...current };
        delete nextErrors[key];
        return nextErrors;
      });
    };
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "loading") return;

    const formData = new FormData(event.currentTarget);
    const honeypot = String(formData.get("honeypot") ?? "").trim();
    const normalizedValues = normalizeValues(values);

    const nextErrors = validateValues(normalizedValues);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus("idle");
      setStatusMessage("Revise os campos destacados antes de enviar.");
      const firstInvalidField = Object.keys(nextErrors)[0];
      if (firstInvalidField) {
        document.getElementById(firstInvalidField)?.focus();
      }
      return;
    }

    const fallbackUrl = buildWhatsAppUrl(normalizedValues);
    setStatus("loading");
    setStatusMessage("");
    setWhatsAppFallbackUrl(fallbackUrl);

    try {
      const result = await submitDiagnosisLead({
        data: {
          name: normalizedValues.name,
          email: normalizedValues.email,
          phone: normalizedValues.whatsapp,
          companyName: normalizedValues.company,
          segment: "",
          websiteOrInstagram: normalizedValues.websiteOrInstagram,
          mainChallenge: buildMainChallenge(normalizedValues),
          honeypot,
          ...getTrackingData(),
        },
      });

      if (!result?.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setStatusMessage(
        "Recebemos seu pedido de diagnóstico. Se quiser adiantar o contato, fale também pelo WhatsApp."
      );
    } catch {
      setStatus("error");
      setStatusMessage(
        "Não foi possível enviar o formulário agora. Você ainda pode continuar pelo WhatsApp."
      );
    }
  }

  const isLoading = status === "loading";
  const showWhatsAppLink = status === "success" || status === "error";

  return (
    <section
      id="diagnostico"
      className="veil-atmosphere relative isolate overflow-hidden pt-20 pb-28 text-mist scroll-mt-8 sm:pt-28 sm:pb-36 lg:pt-32 lg:pb-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-steel/10 blur-[130px] sm:h-[32rem] sm:w-[32rem]"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-16 lg:items-start">
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

          <div className="lg:col-span-7">
            <form
              className="glass-panel-dark rounded-[2.5rem] p-6 shadow-2xl sm:p-10"
              onSubmit={handleSubmit}
              noValidate
            >
              <input name="honeypot" type="hidden" tabIndex={-1} autoComplete="off" />

              <div className="space-y-5 sm:space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClassName}>
                      Nome
                      <RequiredMark />
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Ex.: Ana Souza"
                      value={values.name}
                      onChange={updateValue("name")}
                      aria-invalid={Boolean(errors.name)}
                      className={inputClassName}
                    />
                    {errors.name ? <p className="mt-1.5 text-xs text-amber-300">{errors.name}</p> : null}
                  </div>
                  <div>
                    <label htmlFor="company" className={labelClassName}>
                      Empresa
                      <RequiredMark />
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Nome da empresa"
                      value={values.company}
                      onChange={updateValue("company")}
                      aria-invalid={Boolean(errors.company)}
                      className={inputClassName}
                    />
                    {errors.company ? <p className="mt-1.5 text-xs text-amber-300">{errors.company}</p> : null}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="role" className={labelClassName}>
                      Cargo
                    </label>
                    <input
                      id="role"
                      name="role"
                      type="text"
                      autoComplete="organization-title"
                      placeholder="Ex.: Diretor comercial"
                      value={values.role}
                      onChange={updateValue("role")}
                      className={inputClassName}
                    />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className={labelClassName}>
                      WhatsApp
                      <RequiredMark />
                    </label>
                    <input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="(83) 91234-7521"
                      value={values.whatsapp}
                      onChange={updateValue("whatsapp")}
                      aria-invalid={Boolean(errors.whatsapp)}
                      className={inputClassName}
                    />
                    {errors.whatsapp ? (
                      <p className="mt-1.5 text-xs text-amber-300">{errors.whatsapp}</p>
                    ) : null}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className={labelClassName}>
                      E-mail
                      <RequiredMark />
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="voce@empresa.com"
                      value={values.email}
                      onChange={updateValue("email")}
                      aria-invalid={Boolean(errors.email)}
                      className={inputClassName}
                    />
                    {errors.email ? <p className="mt-1.5 text-xs text-amber-300">{errors.email}</p> : null}
                  </div>
                  <div>
                    <label htmlFor="websiteOrInstagram" className={labelClassName}>
                      Site ou Instagram
                    </label>
                    <input
                      id="websiteOrInstagram"
                      name="websiteOrInstagram"
                      type="text"
                      placeholder="@empresa ou site.com"
                      value={values.websiteOrInstagram}
                      onChange={updateValue("websiteOrInstagram")}
                      className={inputClassName}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="goal" className={labelClassName}>
                      Qual principal objetivo hoje?
                      <RequiredMark />
                    </label>
                    <select
                      id="goal"
                      name="goal"
                      value={values.goal}
                      onChange={updateValue("goal")}
                      aria-invalid={Boolean(errors.goal)}
                      className={inputClassName}
                    >
                      <option value="" disabled>
                        Selecione uma opção
                      </option>
                      {goalOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.goal ? <p className="mt-1.5 text-xs text-amber-300">{errors.goal}</p> : null}
                  </div>
                  <div>
                    <label htmlFor="investment" className={labelClassName}>
                      Quanto a empresa investe hoje em marketing?
                      <RequiredMark />
                    </label>
                    <select
                      id="investment"
                      name="investment"
                      value={values.investment}
                      onChange={updateValue("investment")}
                      aria-invalid={Boolean(errors.investment)}
                      className={inputClassName}
                    >
                      <option value="" disabled>
                        Selecione uma opção
                      </option>
                      {investmentOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.investment ? (
                      <p className="mt-1.5 text-xs text-amber-300">{errors.investment}</p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClassName}>
                    Mensagem opcional
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Conte rapidamente o contexto da empresa."
                    value={values.message}
                    onChange={updateValue("message")}
                    className="mt-2 w-full resize-none rounded-2xl border border-steel/20 bg-deep/40 px-4.5 py-3.5 text-base leading-relaxed text-mist placeholder:text-steel/40 transition-all duration-200 focus-visible:border-mist/60 focus-visible:bg-deep/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel"
                  />
                </div>
              </div>

              <p className="mt-5 text-xs leading-relaxed text-steel/70">
                Campos com <span className="text-mist">*</span> são obrigatórios. O diagnóstico é
                gratuito e sem compromisso.
              </p>

              <button
                type="submit"
                disabled={isLoading}
                className="group luminous-button mt-6 inline-flex min-h-[58px] w-full items-center justify-between gap-4 rounded-2xl border border-mist/80 bg-mist px-7 text-left text-[0.9375rem] font-semibold text-ink transition-all duration-300 active:scale-[0.98] hover:bg-paper hover:shadow-[0_0_35px_rgba(227,228,232,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel disabled:cursor-wait disabled:opacity-75 sm:text-base"
              >
                <span>{isLoading ? "Enviando..." : "Quero tomar decisões melhores no marketing"}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-ink/10 text-ink transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-ink group-hover:text-mist">
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </button>

              {statusMessage ? (
                <div
                  className={`mt-4 rounded-2xl border px-4 py-3 ${
                    status === "success"
                      ? "border-mist/30 bg-mist/5"
                      : status === "error"
                        ? "border-amber-300/30 bg-amber-300/5"
                        : "border-steel/20 bg-deep/30"
                  }`}
                  aria-live="polite"
                >
                  <p
                    className={`text-sm leading-relaxed ${
                      status === "success"
                        ? "text-mist"
                        : status === "error"
                          ? "text-amber-300"
                          : "text-steel"
                    }`}
                  >
                    {statusMessage}
                  </p>
                  {showWhatsAppLink && whatsAppFallbackUrl ? (
                    <a
                      href={whatsAppFallbackUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-mist underline underline-offset-4 hover:text-paper"
                    >
                      Falar pelo WhatsApp
                    </a>
                  ) : null}
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}