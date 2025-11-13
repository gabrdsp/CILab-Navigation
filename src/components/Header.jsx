export default function Header() {
  return (
    <header className="mb-6">
      <div className="mx-auto mb-4 w-24">
        <img
          src="./public/assets/img/logo.png"
          alt="Logo do CILab"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-2xl font-extrabold">Computational<br/>Intelligence Laboratory</h1>
      <p className="italic mt-3 text-sm text-white/90 max-w-[18rem] mx-auto leading-relaxed">
        Desenvolvemos soluções de IA para desafios do mundo real, focando em
        pesquisa, ética e impacto.
      </p>
    </header>
  );
}
