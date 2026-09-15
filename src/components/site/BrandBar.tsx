import { motion } from "framer-motion";
import qmLogo from "@/assets/qm-logo.png.asset.json";

export function BrandBar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-6 sm:py-8"
    >
      <div className="min-w-0">
        <p className="tag-brand text-[0.75rem] text-mist">Matheus Lino</p>
        <p className="mt-2 text-[0.6875rem] font-medium text-steel">Estratégia de marketing</p>
      </div>
      <div className="shrink-0 pl-3">
        <motion.div
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.98 }}
          className="logo-animated-wrapper inline-flex items-center rounded-lg p-2 transition-all duration-300 cursor-pointer"
        >
          <img
            src={qmLogo.url}
            alt="Quality Master"
            className="relative z-10 h-10 w-auto opacity-95 sm:h-12"
            width={2238}
            height={507}
          />
          <div aria-hidden="true" className="logo-sheen-sweep" />
        </motion.div>
      </div>
    </motion.header>
  );
}