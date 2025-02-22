import { useEffect, useState } from "react";
import lupa from "../assets/lupa.svg";
import CardMentor from "../components/layouts/CardMentor";
import { useParams } from "react-router-dom";

function Buscar() {
  const areas_data = [
    { id: 1, nome: "Produto" },
    { id: 2, nome: "UX/UI" },
    { id: 3, nome: "Web" },
    { id: 4, nome: "Starup" },
    { id: 5, nome: "Finanças" },
  ];

  const empresas_data = [
    { id: 1, nome: "Produto" },
    { id: 2, nome: "UX/UI" },
    { id: 3, nome: "Web" },
    { id: 4, nome: "Starup" },
    { id: 5, nome: "Finanças" },
  ];

  const cargos_data = [
    { id: 1, nome: "CEO" },
    { id: 2, nome: "CTO" },
    { id: 3, nome: "Sênior" },
    { id: 4, nome: "Pleno" },
    { id: 5, nome: "Professor" },
  ];

  const mentores_data = [
    {
      id: 2,
      user: { name: "Ana Silva" },
      cargo: { nome: "CTO" },
      empresa: { nome: "Tech Solutions" },
      curriculo: "www.anasilva.com/cv",
      biografia:
        "Especialista em desenvolvimento de sistemas e inovação tecnológica.",
      preco: 22.5,
      avaliacao: 4.7,
      habilidades: [
        { nome: "Python" },
        { nome: "Django" },
        { nome: "Laravel" },
        { nome: "HTML" },
        { nome: "JS" },
      ],
    },
    {
      id: 3,
      user: { name: "Carlos Oliveira" },
      cargo: { nome: "Gerente de TI" },
      empresa: { nome: "InovaTech" },
      curriculo: "www.carlosoliveira.com/cv",
      biografia:
        "Gestor de equipes e projetos de TI com 10 anos de experiência.",
      preco: 18.0,
      avaliacao: 4.5,
      habilidades: [{ nome: "JavaScript" }, { nome: "Node.js" }],
    },
    {
      id: 4,
      user: { name: "Mariana Souza" },
      cargo: { nome: "Analista de Sistemas" },
      empresa: { nome: "Digital Hub" },
      curriculo: "www.marianasouza.com/cv",
      biografia:
        "Analista com foco em melhorar a experiência do usuário e soluções tecnológicas.",
      preco: 20.0,
      avaliacao: 4.9,
      habilidades: [{ nome: "React" }, { nome: "UX/UI Design" }],
    },
  ];

  const [mentors] = useState(mentores_data);
  const [empresas] = useState(empresas_data);
  const [cargos] = useState(cargos_data);
  const [areas] = useState(areas_data);

  useEffect(() => {}, []);

  const {categoria} = useParams();

  console.log(categoria);

  return (
    <>
      <section>
        <div className="container mx-auto flex flex-col md:flex-row md:gap-16 py-4">
          <div className="flex flex-col md:w-1/3 md:p-0 p-6 gap-10">
            <div className="w-full md:w-full mx-auto relative">
              <input
                className="border h-14 rounded-lg w-full px-4"
                type="text"
                placeholder="Busque por habilidades"
              />
              <img
                src={lupa}
                className="absolute top-1/3 right-4"
                alt="Search Icon"
              />
            </div>
            <div className="w-full relative">
              <label
                htmlFor="conhecimento"
                className="text-slate-800 font-semibold"
              >
                Área do Conhecimento
              </label>
              <input
                className="border h-14 rounded-lg w-full px-4"
                type="text"
                id="conhecimento"
              />
              <img
                src={lupa}
                className="absolute top-10 right-4"
                alt="Search Icon"
              />
            </div>
            <div id="area-container" className="flex flex-col gap-3">
              {areas.map((area) => {
                return (
                  <div className="flex gap-3 items-center" key={area.id}>
                    <input
                      type="checkbox"
                      className="appearance-none w-5 h-5 border rounded border-slate-300"
                    />
                    <span className="text-slate-600">{area.nome}</span>
                  </div>
                );
              })}
            </div>
            <div className="w-full relative">
              <label htmlFor="cargo" className="text-slate-800 font-semibold">
                Cargo
              </label>
              <input
                className="border h-14 rounded-lg w-full px-4"
                type="text"
                id="cargo"
              />
              <img
                src={lupa}
                className="absolute top-10 right-4"
                alt="Search Icon"
              />
            </div>
            <div id="cargo-container" className="flex flex-col gap-3">
              {cargos.map((cargo) => {
                return (
                  <div className="flex gap-3 items-center" key={cargo.id}>
                    <input
                      type="checkbox"
                      className="appearance-none w-5 h-5 border rounded border-slate-300"
                    />
                    <span className="text-slate-600">{cargo.nome}</span>
                  </div>
                );
              })}
            </div>
            <div className="w-full relative">
              <label htmlFor="empresa" className="text-slate-800 font-semibold">
                Empresas
              </label>
              <input
                className="border h-14 rounded-lg w-full px-4"
                type="text"
                id="empresa"
              />
              <img
                src={lupa}
                className="absolute top-10 right-4"
                alt="Search Icon"
              />
            </div>
            <div id="empresa-container" className="flex flex-col gap-3">
              {empresas.map((empresa) => {
                return (
                  <div className="flex gap-3 items-center" key={empresa.id}>
                    <input
                      type="checkbox"
                      className="appearance-none w-5 h-5 border rounded border-slate-300"
                    />
                    <span className="text-slate-600">{empresa.nome}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div id="mentor-container" className="flex flex-col md:w-2/3 gap-6">
            {mentors.map((mentor) => (
              <CardMentor key={mentor.id!} mentor={mentor} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Buscar;
