import logo from "../assets/logo-mentorr.svg";
import logo_white from "../assets/logo-white.svg";
import kauan_image from "../assets/kauan.png";
import star from "../assets/star.svg";
import tutor from "../assets/thormes.png";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Testimonals />
      <Tutor />
      <Pricing />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <>
      <header className="px-8 md:px-0">
        <div className="container mx-auto flex flex-col md:flex-row py-6 md:py-0 gap-6 md:gap-0 justify-between items-center md:h-24">
          <div>
            <img src={logo} alt="logotipo Mentorr" />
          </div>
          <div className="flex gap-4 md:gap-12 items-center">
            <div className="flex gap-2">
              <a href="/">For Business</a>
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>

            <button className="bg-blue-600 text-white px-8 py-3 font-semibold rounded-lg">
              Quero ser Mentorr
            </button>
            <a href="/">Login</a>
          </div>
        </div>
      </header>

      <HeaderMenu />
    </>
  );
}

function HeaderMenu() {
  return (
    <div className="md:border h-14 flex items-center">
      <div className="container mx-auto">
        <nav className="hidden md:block">
          <ul className="flex justify-between">
            <li>
              <a href="/">UX/UI</a>
            </li>
            <li>
              <a href="/">Front-end</a>
            </li>
            <li>
              <a href="/">Back-end</a>
            </li>
            <li>
              <a href="/">DevOps</a>
            </li>
            <li>
              <a href="/">Agile</a>
            </li>
            <li>
              <a href="/">Cloud Computing</a>
            </li>
            <li>
              <a href="/">Inteligência Artificial</a>
            </li>
            <li>
              <a href="/">Segurança da Informação</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="flex flex-col justify-center py-14 px-8 md:px-0">
      <div className="flex flex-col text-center gap-6">
        <h3 className="text-md md:text-xl">
          Aprenda uma nova habilidade, lance um projeto e evolua na carreira
        </h3>
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Mentoria{" "}
          <span className="underline decoration-dashed decoration-blue-600">
            especializada
          </span>{" "}
          1 para 1
        </h1>
        <h2 className="text-md md:text-xl text-gray-600">
          Encontre um mentor hoje:
        </h2>

        <div className="flex w-full md:w-1/3 mx-auto gap-4 px-8">
          <input
            className="border h-14 rounded-lg w-full md:w-3/4 px-4"
            type="text"
            placeholder="Busque por habilidades, tecnologias, etc..."
          />
          <button className="md:w-1/4 px-6 bg-blue-600 text-white font-bold rounded-lg">
            Buscar
          </button>
        </div>

        <div className="md:w-1/3 mx-auto">
          <ul className="flex gap-2 flex-wrap justify-center leading-8">
            <li>
              <a className="bg-gray-200 py-1 px-3 rounded-full" href="/">
                tecnologia
              </a>
            </li>
            <li>
              <a className="bg-gray-200 py-1 px-3 rounded-full" href="/">
                ux/ui design
              </a>
            </li>
            <li>
              <a className="bg-gray-200 py-1 px-3 rounded-full" href="/">
                gestão
              </a>
            </li>
            <li>
              <a className="bg-gray-200 py-1 px-3 rounded-full" href="/">
                negócios
              </a>
            </li>
            <li>
              <a className="bg-gray-200 py-1 px-3 rounded-full" href="/">
                financeiro
              </a>
            </li>
            <li>
              <a className="bg-gray-200 py-1 px-3 rounded-full" href="/">
                startups
              </a>
            </li>
          </ul>
        </div>

        <div className="container mx-auto py-6">
          <div className="flex flex-col items-center md:flex-row md:justify-center gap-6 md:gap-24">
            <div className="flex flex-col items-start gap-3">
              <div className="text-3xl md:text-5xl font-bold">5.400+</div>
              <div className="text-md md:text-lg text-gray-600">
                Mentores disponíveis
              </div>
            </div>

            <div className="flex flex-col items-start gap-3">
              <div className="text-3xl md:text-5xl font-bold">23.100+</div>
              <div className="text-md md:text-lg text-gray-600">
                Parcerias firmadas
              </div>
            </div>

            <div className="flex flex-col items-start gap-3">
              <div className="text-3xl md:text-5xl font-bold">130+</div>
              <div className="text-md md:text-lg text-gray-600">
                Países representados
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonals() {
  return (
    <section className="bg-slate-200 px-8 md:px-0 py-14">
      <div className="container mx-auto flex flex-col gap-8">
        <div>
          <figure>
            <svg
              width="151"
              height="31"
              viewBox="0 0 151 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.7027 3.87004C15.0021 2.94873 16.3055 2.94873 16.6048 3.87004L18.7463 10.4607C18.8802 10.8728 19.2641 11.1517 19.6974 11.1517L26.6272 11.1517C27.5959 11.1517 27.9987 12.3913 27.215 12.9607L21.6086 17.034C21.2581 17.2887 21.1115 17.74 21.2454 18.1521L23.3868 24.7428C23.6862 25.6641 22.6317 26.4302 21.848 25.8608L16.2416 21.7875C15.8911 21.5329 15.4165 21.5329 15.066 21.7875L9.45962 25.8608C8.67591 26.4302 7.62143 25.6641 7.92078 24.7428L10.0622 18.1521C10.1961 17.74 10.0494 17.2887 9.69896 17.034L4.09258 12.9607C3.30886 12.3913 3.71164 11.1517 4.68036 11.1517L11.6102 11.1517C12.0435 11.1517 12.4274 10.8728 12.5613 10.4607L14.7027 3.87004Z"
                fill="#F5BF14"
              />
              <path
                d="M44.7027 3.87004C45.0021 2.94873 46.3055 2.94873 46.6048 3.87004L48.7463 10.4607C48.8802 10.8728 49.2641 11.1517 49.6974 11.1517L56.6272 11.1517C57.5959 11.1517 57.9987 12.3913 57.215 12.9607L51.6086 17.034C51.2581 17.2887 51.1115 17.74 51.2454 18.1521L53.3868 24.7428C53.6862 25.6641 52.6317 26.4302 51.848 25.8608L46.2416 21.7875C45.8911 21.5329 45.4165 21.5329 45.066 21.7875L39.4596 25.8608C38.6759 26.4302 37.6214 25.6641 37.9208 24.7428L40.0622 18.1521C40.1961 17.74 40.0494 17.2887 39.699 17.034L34.0926 12.9607C33.3089 12.3913 33.7116 11.1517 34.6804 11.1517L41.6102 11.1517C42.0435 11.1517 42.4274 10.8728 42.5613 10.4607L44.7027 3.87004Z"
                fill="#F5BF14"
              />
              <path
                d="M74.7027 3.87004C75.0021 2.94873 76.3055 2.94873 76.6048 3.87004L78.7463 10.4607C78.8802 10.8728 79.2641 11.1517 79.6974 11.1517L86.6272 11.1517C87.5959 11.1517 87.9987 12.3913 87.215 12.9607L81.6086 17.034C81.2581 17.2887 81.1115 17.74 81.2454 18.1521L83.3868 24.7428C83.6862 25.6641 82.6317 26.4302 81.848 25.8608L76.2416 21.7875C75.8911 21.5329 75.4165 21.5329 75.066 21.7875L69.4596 25.8608C68.6759 26.4302 67.6214 25.6641 67.9208 24.7428L70.0622 18.1521C70.1961 17.74 70.0494 17.2887 69.699 17.034L64.0926 12.9607C63.3089 12.3913 63.7116 11.1517 64.6804 11.1517L71.6102 11.1517C72.0435 11.1517 72.4274 10.8728 72.5613 10.4607L74.7027 3.87004Z"
                fill="#F5BF14"
              />
              <path
                d="M104.703 3.87004C105.002 2.94873 106.305 2.94873 106.605 3.87004L108.746 10.4607C108.88 10.8728 109.264 11.1517 109.697 11.1517L116.627 11.1517C117.596 11.1517 117.999 12.3913 117.215 12.9607L111.609 17.034C111.258 17.2887 111.111 17.74 111.245 18.1521L113.387 24.7428C113.686 25.6641 112.632 26.4302 111.848 25.8608L106.242 21.7875C105.891 21.5329 105.416 21.5329 105.066 21.7875L99.4596 25.8608C98.6759 26.4302 97.6214 25.6641 97.9208 24.7428L100.062 18.1521C100.196 17.74 100.049 17.2887 99.699 17.034L94.0926 12.9607C93.3089 12.3913 93.7116 11.1517 94.6804 11.1517L101.61 11.1517C102.043 11.1517 102.427 10.8728 102.561 10.4607L104.703 3.87004Z"
                fill="#F5BF14"
              />
              <path
                d="M134.703 3.87004C135.002 2.94873 136.305 2.94873 136.605 3.87004L138.746 10.4607C138.88 10.8728 139.264 11.1517 139.697 11.1517L146.627 11.1517C147.596 11.1517 147.999 12.3913 147.215 12.9607L141.609 17.034C141.258 17.2887 141.111 17.74 141.245 18.1521L143.387 24.7428C143.686 25.6641 142.632 26.4302 141.848 25.8608L136.242 21.7875C135.891 21.5329 135.416 21.5329 135.066 21.7875L129.46 25.8608C128.676 26.4302 127.621 25.6641 127.921 24.7428L130.062 18.1521C130.196 17.74 130.049 17.2887 129.699 17.034L124.093 12.9607C123.309 12.3913 123.712 11.1517 124.68 11.1517L131.61 11.1517C132.043 11.1517 132.427 10.8728 132.561 10.4607L134.703 3.87004Z"
                fill="#F5BF14"
              />
            </svg>
          </figure>
        </div>

        <div>
          <p className="md:w-2/3">
            Fazer mentoria com o Thormes foi uma experiência transformadora. Ele
            me ajudou a entender o mercado, aprimorar minhas habilidades e
            traçar metas claras para minha carreira. Hoje, sinto-me muito mais
            confiante para seguir nessa nova jornada.
          </p>
        </div>

        <div className="flex gap-4">
          <div>
            <figure>
              <img src={kauan_image} alt="Kauan Ribeiro" />
            </figure>
          </div>
          <div>
            <div className="font-bold text-slate-600 text-lg">
              Kauan Ribeiro Feijó
            </div>
            <div className="text-slate-600">Desenvolver Web na Google</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tutor() {
  return (
    <section className="px-8 md:px-0">
      <div className="container mx-auto py-14">
        <h2 className="text-3xl font-bold text-slate-900">
          Busque em 5.400+<span className="block">mentores disponíveis</span>
        </h2>
      </div>

      <div className="container mx-auto pb-14">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="col-span-1 border border-gray-300 rounded-lg p-4">
            <div className="flex">
              <div className="w-1/3">
                <figure>
                  <img src={tutor} alt="Thormes F." />
                </figure>
              </div>
              <div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">
                    Thormes F.
                  </h4>
                  <span className="text-gray-600">
                    Desenvolvedor Backend Sênior
                  </span>
                </div>
                <div className="mt-4">
                  <ul className="flex gap-2 flex-wrap leading-6 text-sm">
                    <li>
                      <a
                        className="bg-gray-200 py-1 px-3 rounded-full"
                        href="/"
                      >
                        tecnologia
                      </a>
                    </li>
                    <li>
                      <a
                        className="bg-gray-200 py-1 px-3 rounded-full"
                        href="/"
                      >
                        ux/ui design
                      </a>
                    </li>
                    <li>
                      <a
                        className="bg-gray-200 py-1 px-3 rounded-full"
                        href="/"
                      >
                        gestão
                      </a>
                    </li>
                    <li>
                      <a
                        className="bg-gray-200 py-1 px-3 rounded-full"
                        href="/"
                      >
                        negócios
                      </a>
                    </li>
                    <li>
                      <a
                        className="bg-gray-200 py-1 px-3 rounded-full"
                        href="/"
                      >
                        financeiro
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-start items-start gap-1">
                <img className="w-10" src={star} alt="Rating" />
                <span className="text-slate-900 font-bold">5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="bg-slate-900 text-white py-14">
      <div className="container mx-auto flex flex-col justify-center items-center gap-10">
        <h4 className="md:text-3xl font-bold">
          Que tal monetizar sua experiência?
        </h4>
        <h3 className="text-2xl md:text-4xl font-bold">
          Torne-se um mentorr especializado
        </h3>
        <div className="flex flex-col md:flex-row gap-6">
          <button className="bg-blue-600 px-12 font-bold py-4 rounded-lg hover:bg-blue-700">
            Quero ser Mentorr
          </button>
          <button className="font-bold border border-blue-600 px-12 py-4 rounded-lg hover:bg-blue-600">
            Quero ser aluno
          </button>
        </div>
        <p className="text-slate-300">Não é necessário cartão de crédito.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container mx-auto flex flex-col items-center gap-12 md:gap-0 md:items-start md:flex-row py-14 justify-between">
        <div className="flex items-center">
          <figure>
            <img src={logo_white} alt="Logo Mentorr" />
          </figure>
        </div>
        <div>
          <h5 className="text-blue-600 font-bold text-md mb-4">
            Institucional
          </h5>
          <ul className="text-slate-300 text-md flex flex-col gap-4">
            <li>
              <a href="/">Como funciona</a>
            </li>
            <li>
              <a href="/">Quem Somos</a>
            </li>
            <li>
              <a href="/">Investidores</a>
            </li>
            <li>
              <a href="/">Código de ética</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-blue-600 font-bold text-md mb-4">
            Institucional
          </h5>
          <ul className="text-slate-300 text-md flex flex-col gap-4">
            <li>
              <a href="/">Como funciona</a>
            </li>
            <li>
              <a href="/">Quem Somos</a>
            </li>
            <li>
              <a href="/">Investidores</a>
            </li>
            <li>
              <a href="/">Código de ética</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-blue-600 font-bold text-md mb-4">
            Institucional
          </h5>
          <ul className="text-slate-300 text-md flex flex-col gap-4">
            <li>
              <a href="/">Como funciona</a>
            </li>
            <li>
              <a href="/">Quem Somos</a>
            </li>
            <li>
              <a href="/">Investidores</a>
            </li>
            <li>
              <a href="/">Código de ética</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-blue-600 font-bold text-md mb-4">
            Institucional
          </h5>
          <ul className="text-slate-300 text-md flex flex-col gap-4">
            <li>
              <a href="/">Como funciona</a>
            </li>
            <li>
              <a href="/">Quem Somos</a>
            </li>
            <li>
              <a href="/">Investidores</a>
            </li>
            <li>
              <a href="/">Código de ética</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Home;
