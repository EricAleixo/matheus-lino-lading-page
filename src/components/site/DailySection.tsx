import { motion } from "framer-motion";

/**
 * Silhueta de personagem em SVG (cabeça + busto), preenchida com
 * currentColor/Tailwind. Diferente de um ícone de linha (como o "User"
 * do lucide-react), essa forma sólida mantém presença visual mesmo
 * em tamanhos bem grandes — é o que faz o personagem "ocupar" o centro
 * da seção em vez de parecer um ícone pequeno esticado.
 */
function PersonSilhouette({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Cabeça */}
      <circle cx="100" cy="58" r="52" className="fill-mist" />
      {/* Busto / ombros */}
      <path
        d="M6 220 C6 146 46 112 100 112 C154 112 194 146 194 220 Z"
        className="fill-mist/90"
      />
    </svg>
  );
}

const QUESTIONS = [
  "Aumento a verba dos anúncios?",
  "Contrato mais alguém?",
  "Precisamos produzir mais conteúdo?",
  "O problema é o comercial?",
  "Será que deveríamos mexer na marca?",
  "Esse investimento está realmente voltando?",
];

const PIVOTAL_QUESTION = "Qual dessas perguntas deveria vir primeiro?";

/**
 * Posição de cada pergunta ao redor do personagem central.
 * top/bottom/left/right são percentuais relativos ao container orbital
 * (ver abaixo), então funcionam em qualquer largura de tela.
 *
 * center: true → a pergunta fica centralizada horizontalmente (usa
 * left: "50%" + um deslocamento de -50% via x do framer-motion).
 *
 * fromX/fromY: deslocamento (em px) de onde a pergunta "nasce" na
 * animação de entrada — sempre um valor que aponta para o personagem,
 * dando a sensação de que ela está saindo dele até se acomodar perto.
 *
 * Ajuste aqui se quiser abrir/fechar o "raio" da órbita, aproximar
 * ainda mais as perguntas, ou mudar onde cada uma aparece.
 */
// Cada posição sempre declara as mesmas propriedades (com undefined/false/0
// nas que não se aplicam). Isso mantém o formato do objeto idêntico em
// todos os itens, então o TypeScript infere um único tipo consistente
// para o array inteiro — sem erros de "propriedade não existe".
const ORBIT_POSITIONS = [
  { top: "16%", bottom: undefined, left: "6%", right: undefined, center: false, fromX: 90, fromY: 90 }, // 01 - superior esquerda, mais perto do personagem
  { top: "6%", bottom: undefined, left: "50%", right: undefined, center: true, fromX: 0, fromY: 100 }, // 02 - topo, centralizada, mais perto
  { top: "16%", bottom: undefined, left: undefined, right: "6%", center: false, fromX: -90, fromY: 90 }, // 03 - superior direita, mais perto do personagem
  { top: undefined, bottom: "24%", left: "2%", right: undefined, center: false, fromX: 90, fromY: -90 }, // 04 - inferior esquerda, perto do personagem
  { top: undefined, bottom: "2%", left: "50%", right: undefined, center: true, fromX: 0, fromY: -100 }, // 05 - base, centralizada
  { top: undefined, bottom: "12%", left: undefined, right: "-6%", center: false, fromX: -90, fromY: -90 }, // 06 - inferior direita, mais afastada do personagem
];

// Mesmo formato acima, usado como fallback caso o índice não exista —
// garante que "pos" nunca perca as propriedades no acesso abaixo.
const EMPTY_ORBIT_POSITION = {
  top: undefined,
  bottom: undefined,
  left: undefined,
  right: undefined,
  center: false,
  fromX: 0,
  fromY: 0,
};

export function DailySection() {
  return (
    <section className="relative isolate overflow-hidden pt-12 pb-24 text-mist sm:pt-16 sm:pb-32 lg:pt-20 lg:pb-36">
      {/* Luzes difusas de ambiente — gradiente radial em vez de blur(), custo bem menor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/4 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,theme(colors.steel/8%),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,theme(colors.deep/55%),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12">
        {/* Linha divisória de luz suave */}
        <div
          aria-hidden="true"
          className="mb-12 h-px w-full bg-gradient-to-r from-transparent via-steel/20 to-transparent sm:mb-16"
        />

        {/* Headline Centralizada */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="headline text-[2rem] leading-[1.12] text-mist sm:text-[2.625rem] lg:text-[3.125rem]">
            Administrar uma empresa já exige decisões demais.
          </h2>
        </motion.div>

        {/*
          Palco orbital: o personagem fica fixo e grande no centro,
          as 6 perguntas ficam próximas dele e, na animação de entrada,
          nascem de dentro dele (fromX/fromY em ORBIT_POSITIONS) e se
          afastam até seu lugar — como se fossem dúvidas saindo da cabeça
          dele.
        */}
        <div className="relative mx-auto mt-16 h-[820px] w-full max-w-xl sm:mt-20 sm:h-[800px] sm:max-w-2xl lg:h-[720px] lg:max-w-4xl">
          {/* Personagem central */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center will-change-transform"
          >
            <div className="relative flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96 lg:h-[30rem] lg:w-[30rem]">
              {/* Glow difuso atrás do personagem — gradiente radial, sem blur() */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-[radial-gradient(circle,theme(colors.steel/14%),transparent_70%)]"
              />
              {/* Anéis orbitais concêntricos com animação sutil */}
              <div
                aria-hidden="true"
                className="absolute inset-4 rounded-full border border-steel/10 animate-[ring-pulse_4s_ease-in-out_infinite]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-14 rounded-full border border-dashed border-steel/15"
              />

              {/* Personagem — grande o suficiente para parecer a fonte das perguntas */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative z-10 h-[78%] w-[78%] cursor-pointer will-change-transform"
              >
                <PersonSilhouette className="h-full w-full" />
              </motion.div>
            </div>
          </motion.div>

          {/* Perguntas orbitando, surgindo do personagem */}
          {QUESTIONS.map((question, idx) => {
            const questionNumber = String(idx + 1).padStart(2, "0");
            const pos = ORBIT_POSITIONS[idx] ?? EMPTY_ORBIT_POSITION;

            return (
              <div
                key={question}
                style={{
                  position: "absolute",
                  top: pos.top ?? "auto",
                  bottom: pos.bottom ?? "auto",
                  left: pos.left ?? "auto",
                  right: pos.right ?? "auto",
                  transform: pos.center ? "translateX(-50%)" : "none",
                }}
                className="z-10 w-[170px] sm:w-[210px] lg:w-[250px]"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.4, x: pos.fromX, y: pos.fromY }}
                  whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + idx * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="glass-panel-dark group flex flex-col gap-2 rounded-2xl p-4 transition-colors duration-300 will-change-transform hover:border-steel/40 hover:bg-deep/50 hover:shadow-[0_8px_30px_rgba(0,15,37,0.4)] sm:p-5"
                >
                  <span className="tag-mono text-[0.625rem] font-semibold text-steel/60 transition-colors group-hover:text-mist">
                    {questionNumber}
                  </span>
                  <p className="text-[0.875rem] font-medium leading-snug text-mist/90 sm:text-[0.9375rem]">
                    {question}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Destaque Principal: A 7ª Pergunta */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8"
        >
          <div className="glass-panel-accent relative overflow-hidden rounded-2xl p-6 sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full bg-[radial-gradient(circle,theme(colors.steel/25%),transparent_70%)]"
            />
            <div className="relative flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist/15 text-[0.8125rem] font-bold text-mist">
                  07
                </span>
                <p className="headline text-[1.25rem] text-mist sm:text-[1.5rem] lg:text-[1.75rem]">
                  {PIVOTAL_QUESTION}
                </p>
              </div>
              <span className="tag-mono shrink-0 rounded-full border border-mist/30 bg-mist/10 px-4 py-1.5 text-[0.6875rem] text-mist">
                PONTO DE PARTIDA
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}