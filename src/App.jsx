import Header from "./components/Header";
import LinkList from "./components/LinkList";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <main className="w-full max-w-sm mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
          <div className="px-8 py-10 bg-gradient-to-br from-cilabOrange/40 via-cilabBlue/25 to-cilabCoral/25 backdrop-blur-md text-white text-center">
            <Header />
            <LinkList />
          </div>

          <div className="bg-white rounded-b-3xl px-6 py-5 flex items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/cilab.ufersa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir Instagram"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md border border-gray-100"
            >
              <img
                src={`${import.meta.env.BASE_URL}icones/Instagram.svg`}
                alt="Instagram"
                className="w-5 h-5"
              />
            </a>

            <a
              href="https://github.com/cilab-ufersa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir GitHub"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md border border-gray-100"
            >
              <img
                src={`${import.meta.env.BASE_URL}icones/Github.svg`}
                alt="GitHub"
                className="w-5 h-5"
              />
            </a>

            <a
              href="https://www.linkedin.com/company/cilab-ufersa/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir LinkedIn"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md border border-gray-100"
            >
              <img
                src={`${import.meta.env.BASE_URL}icones/LinkedIN.svg`}
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </a>

            <a
              href="mailto:cilab@ufersa.edu.br"
              aria-label="Abrir E-mail"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md border border-gray-100"
            >
              <img
                src={`${import.meta.env.BASE_URL}icones/Mail.svg`}
                alt="E-mail"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
