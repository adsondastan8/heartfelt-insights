import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, CheckCircle2, Clock3, MapPin, Menu, MessageCircle, Phone, Stethoscope, UserRound, X } from "lucide-react";

export const Route = createFileRoute("/")({ component: ClinicHome });

const WHATSAPP = "258873735503";

function ClinicHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const whatsapp = (message: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Olá, gostaria de solicitar uma consulta com o Dr. Pedro Santos.",
      `Nome: ${data.get("name")}`,
      `Telefone: ${data.get("phone")}`,
      `Data preferencial: ${data.get("date")}`,
      `Período: ${data.get("period")}`,
      data.get("message") ? `Mensagem: ${data.get("message")}` : "",
    ].filter(Boolean).join("\\n");
    window.open(whatsapp(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#ffffff] text-[#245a78]">
      <header className="sticky top-0 z-50 border-b border-[#dceff8] bg-[#ffffff]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#79bddb] text-white"><Stethoscope size={20} /></span>
            <div><p className="text-[11px] uppercase tracking-[0.18em] text-[#4f7f96]">Cirurgia Plástica</p><p className="mt-1 font-serif text-lg font-semibold leading-none">Dr. Pedro Santos</p></div>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-[#4f7f96] md:flex">
            <a href="#sobre" className="hover:text-[#79bddb]">Sobre</a><a href="#servicos" className="hover:text-[#79bddb]">Serviços</a><a href="#contactos" className="hover:text-[#79bddb]">Contactos</a>
            <a href="#marcacao" className="rounded-full bg-[#79bddb] px-5 py-2.5 text-white hover:bg-[#5fa8c9]">Marcar consulta</a>
          </nav>
          <button className="rounded-lg p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="border-t border-[#dceff8] px-5 py-4 md:hidden"><div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm font-medium">
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a><a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a><a href="#contactos" onClick={() => setMenuOpen(false)}>Contactos</a><a href="#marcacao" onClick={() => setMenuOpen(false)} className="rounded-full bg-[#79bddb] px-5 py-3 text-center text-white">Marcar consulta</a>
        </div></nav>}
      </header>

      <section id="inicio" className="border-b border-[#dceff8]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cfe8f3] bg-white px-3.5 py-2 text-xs font-medium text-[#4f7f96]"><span className="h-2 w-2 rounded-full bg-[#79bddb]" />Atendimento em Maputo</div>
            <h1 className="max-w-2xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">Cuidado especializado, com atenção a cada pessoa.</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#4f7f96] sm:text-lg">Consultas de cirurgia plástica com uma abordagem individualizada, ambiente acolhedor e foco numa relação de confiança entre médico e paciente.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#marcacao" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#79bddb] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#5fa8c9]"><CalendarDays size={18} />Marcar consulta</a>
              <a href={whatsapp("Olá, gostaria de obter informações sobre uma consulta com o Dr. Pedro Santos.")} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cfd6d2] bg-white px-6 py-3.5 text-sm font-semibold text-[#79bddb] hover:bg-[#edf8fc]"><MessageCircle size={18} />Falar no WhatsApp</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#4f7f96]"><span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#79bddb]" />Atendimento personalizado</span><span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#79bddb]" />Marcação simples</span></div>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-[#eaf7fc] shadow-sm">
            <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-[#e7f6fb] via-[#ffffff] to-[#d8eef8] p-8"><div className="max-w-sm text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/80 text-[#79bddb] shadow-sm"><UserRound size={34} strokeWidth={1.5} /></div>
              <p className="mt-6 font-serif text-2xl font-semibold">Dr. Pedro Santos</p><p className="mt-2 text-sm text-[#4f7f96]">Cirurgia Plástica</p><div className="mx-auto mt-7 h-px w-16 bg-[#b8ddec]" />
              <p className="mt-6 text-sm leading-6 text-[#4f7f96]">Um espaço pensado para receber cada paciente com discrição, cuidado e profissionalismo.</p>
            </div></div>
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#79bddb]">Sobre o atendimento</p><h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Uma consulta começa com ouvir.</h2></div>
          <div className="max-w-2xl text-[#4f7f96]"><p className="leading-7">O primeiro passo é uma conversa individual para compreender as necessidades, esclarecer dúvidas e avaliar as possibilidades de tratamento de forma responsável.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">{[["01","Escuta","Conhecer as suas necessidades."],["02","Avaliação","Analisar o caso individualmente."],["03","Orientação","Explicar as opções e próximos passos."]].map(([number,title,text]) => <div key={number} className="rounded-2xl border border-[#dceff8] bg-white p-5"><span className="text-xs font-semibold text-[#79bddb]">{number}</span><h3 className="mt-4 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#5d879b]">{text}</p></div>)}</div>
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-[#f2f9fc]"><div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#79bddb]">Serviços</p><h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Cuidados pensados para cada paciente</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">{[["Consulta de cirurgia plástica","Avaliação inicial e conversa individual sobre as necessidades do paciente."],["Avaliação personalizada","Análise do caso e orientação sobre as possibilidades adequadas para cada pessoa."],["Acompanhamento","Orientação e acompanhamento ao longo do processo de tratamento."]].map(([title,text]) => <article key={title} className="rounded-2xl bg-white p-6 shadow-sm"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e4f4fa] text-[#79bddb]"><Stethoscope size={20} /></div><h3 className="mt-5 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#4f7f96]">{text}</p></article>)}</div>
      </div></section>

      <section id="marcacao" className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid overflow-hidden rounded-[2rem] border border-[#dceff8] bg-white lg:grid-cols-[.85fr_1.15fr]">
          <div className="bg-[#79bddb] p-7 text-white sm:p-10"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d5edf7]">Marcação</p><h2 className="mt-3 font-serif text-3xl font-semibold">Agende a sua consulta</h2><p className="mt-4 text-sm leading-6 text-[#d9eef7]">Preencha os seus dados. Depois da solicitação, a clínica poderá confirmar a disponibilidade consigo.</p>
            <div className="mt-8 space-y-4 text-sm text-[#dceff8]"><p className="flex items-center gap-3"><Clock3 size={18} />Segunda a sexta: 08:00–19:00</p><p className="flex items-center gap-3"><Clock3 size={18} />Sábado: 08:00–12:00</p><p className="flex items-center gap-3"><MapPin size={18} />Rua José Sidumo, 177, Maputo</p></div>
          </div>
          <form onSubmit={handleSubmit} className="p-7 sm:p-10">
            {submitted ? <div className="flex min-h-[330px] flex-col items-center justify-center text-center"><div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e4f5fb] text-[#79bddb]"><CheckCircle2 /></div><h3 className="mt-5 font-serif text-2xl font-semibold">Pedido recebido</h3><p className="mt-2 max-w-sm text-sm leading-6 text-[#4f7f96]">Obrigado. Para confirmar rapidamente a disponibilidade, pode também contactar a clínica pelo WhatsApp.</p><a href={whatsapp("Olá, gostaria de confirmar uma marcação de consulta com o Dr. Pedro Santos.")} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#79bddb] px-5 py-3 text-sm font-semibold text-white"><MessageCircle size={17} />Confirmar pelo WhatsApp</a></div> :
            <><div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium">Nome completo<input required name="name" className="mt-2 w-full rounded-xl border border-[#cfe6f1] bg-[#ffffff] px-4 py-3 outline-none focus:border-[#79bddb]" placeholder="O seu nome" /></label>
              <label className="text-sm font-medium">Telefone<input required name="phone" type="tel" className="mt-2 w-full rounded-xl border border-[#cfe6f1] bg-[#ffffff] px-4 py-3 outline-none focus:border-[#79bddb]" placeholder="+258 ..." /></label>
              <label className="text-sm font-medium">Data preferencial<input required name="date" type="date" className="mt-2 w-full rounded-xl border border-[#cfe6f1] bg-[#ffffff] px-4 py-3 outline-none focus:border-[#79bddb]" /></label>
              <label className="text-sm font-medium">Período<select name="period" className="mt-2 w-full rounded-xl border border-[#cfe6f1] bg-[#ffffff] px-4 py-3 outline-none focus:border-[#79bddb]"><option>Manhã</option><option>Tarde</option></select></label>
            </div><label className="mt-5 block text-sm font-medium">Mensagem (opcional)<textarea name="message" rows={4} className="mt-2 w-full resize-none rounded-xl border border-[#cfe6f1] bg-[#ffffff] px-4 py-3 outline-none focus:border-[#79bddb]" placeholder="Como podemos ajudar?" /></label>
            <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#79bddb] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#5fa8c9]"><CalendarDays size={18} />Solicitar consulta</button><p className="mt-3 text-center text-xs text-[#6b93a7]">A solicitação não substitui a confirmação da consulta pela clínica.</p></>}
          </form>
        </div>
      </section>

      <section id="contactos" className="border-t border-[#dceff8]"><div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 sm:grid-cols-3 lg:px-8">
        <a href={whatsapp("Olá, gostaria de falar com a clínica.")} target="_blank" rel="noreferrer" className="rounded-2xl border border-[#dceff8] bg-white p-5 hover:border-[#b9dce9]"><MessageCircle className="text-[#79bddb]" size={20} /><p className="mt-4 text-sm font-semibold">WhatsApp</p><p className="mt-1 text-sm text-[#4f7f96]">+258 87 373 5503</p></a>
        <a href="tel:+258873735503" className="rounded-2xl border border-[#dceff8] bg-white p-5 hover:border-[#b9dce9]"><Phone className="text-[#79bddb]" size={20} /><p className="mt-4 text-sm font-semibold">Telefone</p><p className="mt-1 text-sm text-[#4f7f96]">+258 87 373 5503</p></a>
        <div className="rounded-2xl border border-[#dceff8] bg-white p-5"><MapPin className="text-[#79bddb]" size={20} /><p className="mt-4 text-sm font-semibold">Localização</p><p className="mt-1 text-sm text-[#4f7f96]">Rua José Sidumo, 177, Maputo</p><a href="https://www.google.com/maps/search/?api=1&query=Rua+Jose+Sidumo+177+Maputo+Mozambique" target="_blank" rel="noreferrer" className="mt-3 inline-block text-xs font-semibold text-[#79bddb] hover:underline">Ver no Google Maps</a></div>
      </div></section>
      <footer className="border-t border-[#dceff8] py-7 text-center text-xs text-[#6b93a7]">© {new Date().getFullYear()} Dr. Pedro Santos — Cirurgia Plástica. Todos os direitos reservados.</footer>
    </main>
  );
}
