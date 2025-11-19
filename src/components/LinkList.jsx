import LinkButton from "./LinkButton";

export default function LinkList() {
  const primary = {
    href: "https://cilab-ufersa.github.io/",
    label: "Acesse o nosso site",
    icon: `${import.meta.env.BASE_URL}icones/Navigation.svg`,
  };

  return (
    <section className="w-full mt-4">
      <LinkButton
        href={primary.href}
        label={primary.label}
        icon={primary.icon}
        ariaLabel={`Abrir ${primary.label}`}
        className="max-w-xs mx-auto bg-white/10 backdrop-blur-sm border border-white/20"
      />
    </section>
  );
}
