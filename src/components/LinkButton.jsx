export default function LinkButton({ href, label, icon, ariaLabel, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={
        "inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-5 rounded-full w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white mb-3 " +
        className
      }
    >
      {icon && <img src={icon} alt="" className="w-5 h-5" aria-hidden="true" />}
      {label}
    </a>
  );
}
