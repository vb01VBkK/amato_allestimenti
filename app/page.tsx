"use client";

import { FormEvent, useMemo, useState } from "react";

const WHATSAPP = "393929453296";

const CONFIG_OPTIONS = [
  { id: "scaffale-sx", title: "Scaffalatura sinistra", group: "Organizzazione", short: "Scaffale SX" },
  { id: "scaffale-dx", title: "Scaffalatura destra", group: "Organizzazione", short: "Scaffale DX" },
  { id: "cassettiera", title: "Cassettiere portaminuteria", group: "Organizzazione", short: "Cassettiere" },
  { id: "banco", title: "Banco da lavoro", group: "Operatività", short: "Banco lavoro" },
  { id: "pianale", title: "Pianale antiscivolo", group: "Protezione", short: "Pianale" },
  { id: "rivestimenti", title: "Rivestimenti protettivi", group: "Protezione", short: "Rivestimenti" },
  { id: "elettrico", title: "Impianto elettrico 12/230V", group: "Impianti", short: "Impianto 12/230V" },
  { id: "led", title: "Illuminazione LED", group: "Impianti", short: "Luci LED" },
  { id: "inverter", title: "Inverter e prese di servizio", group: "Impianti", short: "Inverter" },
  { id: "fermacarico", title: "Ganci e sistemi fermacarico", group: "Sicurezza", short: "Fermacarico" },
  { id: "portatutto", title: "Portatutto esterno", group: "Esterno", short: "Portatutto" },
  { id: "grafica", title: "Logo e grafica aziendale", group: "Esterno", short: "Grafica esterna" },
];

function Icon({ name }: { name: "arrow" | "check" | "phone" | "whatsapp" | "menu" }) {
  if (name === "arrow") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
  }
  if (name === "check") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>;
  }
  if (name === "phone") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.9Z" /></svg>;
  }
  if (name === "whatsapp") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.7 11.7 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.4 1.3h.1C18.7 23.6 24 18.3 24 11.8c0-3.1-1.3-6.1-3.5-8.3Zm-8.4 18.1c-1.7 0-3.5-.5-5-1.4l-.4-.2-3.9 1 1-3.8-.2-.4a9.8 9.8 0 1 1 8.5 4.8Zm5.4-7.4c-.3-.2-1.8-.9-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-1.7-.9-2.8-1.6-3.9-3.6-.3-.5.3-.5.9-1.7.1-.2 0-.4 0-.6l-.9-2.1c-.2-.6-.5-.5-.7-.5H8c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9 0 1.7 1.2 3.3 1.4 3.5.2.2 2.4 3.7 5.9 5.2 2.2.9 3.1 1 4.2.8.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.2-.2-.4-.2-.7-.4Z" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

function openWhatsApp(message: string) {
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

export default function Home() {
  const [vehicleSize, setVehicleSize] = useState("Furgone medio");
  const [configuration, setConfiguration] = useState<string[]>(["scaffale-sx", "pianale", "elettrico", "led"]);
  const selectedOptions = useMemo(() => CONFIG_OPTIONS.filter((item) => configuration.includes(item.id)), [configuration]);

  function toggleOption(id: string) {
    setConfiguration((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name") || "";
    const phone = data.get("phone") || "";
    const vehicle = data.get("vehicle") || "veicolo da definire";
    openWhatsApp(`Buongiorno Amato Allestimenti, sono ${name}. Vorrei ricevere informazioni per un allestimento ${vehicle}. Potete ricontattarmi al ${phone}?`);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Amato Allestimenti - torna all'inizio">
          <img src="/images/amato-logo.png" alt="Amato Allestimenti Veicoli" />
        </a>
        <nav aria-label="Navigazione principale">
          <a href="#servizi">Servizi</a>
          <a href="#configura">Configura il van</a>
          <a href="#azienda">L&apos;azienda</a>
          <a href="#contatti">Contatti</a>
        </nav>
        <a className="header-phone" href="tel:+39081925169">
          <span className="round-icon"><Icon name="phone" /></span>
          <span><small>Parla con noi</small>081 925169</span>
        </a>
      </header>

      <section className="hero" id="top">
        <img className="hero-image" src="/images/hero-main.jpg" alt="Auto della Polizia Municipale allestita da Amato in movimento su strada" />
        <div className="hero-shade" />
        <div className="hero-grid page-shell">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Dal 1965 · Nocera Inferiore</div>
            <h1>Il veicolo giusto.<br /><em>Per ogni missione.</em></h1>
            <p>Da tre generazioni progettiamo allestimenti su misura per aziende, enti pubblici e forze operative. Dal progetto alla strada, con un unico partner.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#configura">Configura il tuo van <Icon name="arrow" /></a>
              <button className="button button-ghost" onClick={() => openWhatsApp("Buongiorno Amato Allestimenti, vorrei parlare con un vostro tecnico.")}><Icon name="whatsapp" /> WhatsApp diretto</button>
            </div>
            <div className="hero-points">
              <span><i><Icon name="check" /></i> Soluzioni su misura</span>
              <span><i><Icon name="check" /></i> Assistenza tecnica</span>
              <span><i><Icon name="check" /></i> Consegna chiavi in mano</span>
            </div>
          </div>

          <aside className="lead-card" aria-label="Richiedi un contatto">
            <div className="lead-card-top">
              <p className="mini-label">Preventivo gratuito</p>
              <h2>Raccontaci il tuo progetto</h2>
              <p>Ti ricontattiamo per capire mezzo, lavoro e priorità operative.</p>
            </div>
            <form onSubmit={submitLead}>
              <label>Nome e cognome<input name="name" type="text" placeholder="Come ti chiami?" required /></label>
              <label>Telefono<input name="phone" type="tel" placeholder="Il tuo numero" required /></label>
              <label>Tipo di allestimento
                <select name="vehicle" defaultValue="">
                  <option value="" disabled>Seleziona un servizio</option>
                  <option>officina mobile</option>
                  <option>Polizia Municipale</option>
                  <option>Protezione Civile</option>
                  <option>mobilità accessibile</option>
                  <option>altro veicolo speciale</option>
                </select>
              </label>
              <label className="privacy"><input type="checkbox" required /><span>Accetto di essere ricontattato per questa richiesta.</span></label>
              <button className="button button-dark" type="submit">Richiedi un contatto <Icon name="arrow" /></button>
            </form>
            <button className="whatsapp-line" onClick={() => openWhatsApp("Buongiorno Amato Allestimenti, vorrei richiedere un preventivo.")}><Icon name="whatsapp" /><span><strong>Preferisci scriverci?</strong> Rispondiamo su WhatsApp</span><Icon name="arrow" /></button>
          </aside>
        </div>
        <div className="hero-stats page-shell">
          <div><strong>60+</strong><span>anni di esperienza</span></div>
          <div><strong>360°</strong><span>dal progetto alla consegna</span></div>
          <div><strong>1</strong><span>partner per ogni fase</span></div>
        </div>
      </section>

      <section className="services-preview" id="servizi">
        <div className="page-shell">
          <div className="section-heading">
            <div><p className="mini-label">Competenze</p><h2>Allestimenti pensati<br />per ogni missione</h2></div>
            <p>Funzionalità, sicurezza e affidabilità in ogni dettaglio. Ogni mezzo nasce intorno a chi dovrà usarlo.</p>
          </div>
          <div className="service-grid">
            <article className="service-card service-featured">
              <img src="/images/van-workshop.jpg" alt="Furgone attrezzato come officina mobile" />
              <div><span>01</span><h3>Officine mobili</h3><p>Scaffalature, pianali e impianti per avere strumenti e materiali sempre al posto giusto.</p><a href="#configura">Configura il van <Icon name="arrow" /></a></div>
            </article>
            <article className="service-card"><img src="/images/polizia-municipale.jpg" alt="Veicolo per Polizia Municipale" /><div><span>02</span><h3>Polizia Municipale</h3><p>Auto, fuoristrada e motocicli pronti per il lavoro sul territorio.</p></div></article>
            <article className="service-card"><img src="/images/mobilita-accessibile.jpg" alt="Van con pedana per mobilità accessibile" /><div><span>03</span><h3>Mobilità accessibile</h3><p>Soluzioni dedicate alla guida e al trasporto, nel rispetto di comfort e sicurezza.</p></div></article>
            <article className="service-card"><img src="/images/protezione-civile.jpg" alt="Pick-up della Protezione Civile" /><div><span>04</span><h3>Protezione Civile</h3><p>Mezzi robusti e operativi per soccorso e interventi sul territorio.</p></div></article>
          </div>
        </div>
      </section>

      <section className="configurator" id="configura">
        <div className="configurator-head page-shell">
          <div>
            <p className="mini-label">Configuratore interattivo</p>
            <h2>Configura il tuo van.<br /><em>Partiamo dal tuo lavoro.</em></h2>
          </div>
          <p>Scegli dimensione e dotazioni. Otterrai una prima configurazione da inviare ai nostri tecnici: la trasformeremo in un progetto su misura.</p>
        </div>

        <div className="configurator-layout page-shell">
          <div className="van-stage">
            <img src="/images/van-workshop.jpg" alt="Interno di un van Amato con scaffalature e attrezzature" />
            <div className="van-stage-shade" />
            <div className="van-stage-top"><span>Anteprima configurazione</span><strong>{vehicleSize}</strong></div>
            <div className="van-badges" aria-live="polite">
              {selectedOptions.slice(0, 6).map((item) => <span key={item.id}><i><Icon name="check" /></i>{item.short}</span>)}
              {selectedOptions.length > 6 && <span className="more-badge">+{selectedOptions.length - 6} dotazioni</span>}
            </div>
            <div className="van-stage-bottom"><span>Amato / Configurazione officina mobile</span><b>{selectedOptions.length.toString().padStart(2, "0")} dotazioni</b></div>
          </div>

          <div className="config-panel">
            <div className="config-step">
              <div className="config-title"><span>01</span><div><small>Il veicolo</small><h3>Scegli la dimensione</h3></div></div>
              <div className="size-picker" role="group" aria-label="Dimensione del van">
                {["Van compatto", "Furgone medio", "Van Maxi"].map((size) => <button key={size} type="button" aria-pressed={vehicleSize === size} onClick={() => setVehicleSize(size)}>{size}</button>)}
              </div>
            </div>
            <div className="config-step">
              <div className="config-title"><span>02</span><div><small>Le dotazioni</small><h3>Componi lo spazio di lavoro</h3></div></div>
              <div className="option-grid">
                {CONFIG_OPTIONS.map((item) => (
                  <button key={item.id} type="button" className={configuration.includes(item.id) ? "option active" : "option"} aria-pressed={configuration.includes(item.id)} onClick={() => toggleOption(item.id)}>
                    <i>{configuration.includes(item.id) ? <Icon name="check" /> : "+"}</i>
                    <span><small>{item.group}</small>{item.title}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="config-summary">
              <div><small>La tua selezione</small><strong>{vehicleSize} · {selectedOptions.length} dotazioni</strong></div>
              <button type="button" className="button button-primary" onClick={() => openWhatsApp(`Buongiorno Amato Allestimenti, vorrei un preventivo per questa configurazione: ${vehicleSize}; dotazioni: ${selectedOptions.map((item) => item.title).join(", ") || "da definire"}.`)}>Invia la configurazione <Icon name="whatsapp" /></button>
            </div>
          </div>
        </div>
      </section>

      <section className="story" id="azienda">
        <div className="story-grid page-shell">
          <div className="story-copy">
            <p className="mini-label">La nostra storia</p>
            <h2>60 anni nel settore automotive.</h2>
            <p>Da tre generazioni trasformiamo esigenze operative in veicoli efficienti, sicuri e riconoscibili. Ogni progetto nasce dall&apos;ascolto e prende forma attraverso competenza tecnica, precisione e attenzione ai dettagli.</p>
            <p>Dalla sede di Nocera Inferiore realizziamo allestimenti personalizzati per realtà pubbliche e private in tutta Italia.</p>
            <div className="story-numbers">
              <div><strong>1965</strong><span>anno di fondazione</span></div>
              <div><strong>Su misura</strong><span>ogni spazio pensato per lavorare meglio</span></div>
              <div><strong>360°</strong><span>dal progetto alla consegna</span></div>
            </div>
          </div>
          <div className="story-image">
            <img src="/images/servizi-speciali.jpg" alt="Allestimento speciale realizzato nell'officina Amato" />
            <div className="story-quote"><span>“</span><p>Non adattiamo il lavoro al veicolo.<br /><strong>Costruiamo il veicolo intorno al lavoro.</strong></p></div>
          </div>
        </div>
      </section>

      <section className="method">
        <div className="page-shell">
          <div className="section-heading method-heading">
            <div><p className="mini-label">Metodo</p><h2>Dall&apos;idea alla strada</h2></div>
            <p>Un unico partner per seguire ogni fase, con precisione, dall&apos;ascolto alla consegna.</p>
          </div>
          <div className="method-grid">
            <article><span>01</span><h3>Ascolto</h3><p>Analizziamo il mezzo, il lavoro da svolgere e le priorità operative.</p></article>
            <article><span>02</span><h3>Progetto</h3><p>Definiamo spazi, attrezzature, impianti e personalizzazioni.</p></article>
            <article><span>03</span><h3>Realizzazione</h3><p>Costruiamo e installiamo ogni elemento con cura artigianale.</p></article>
            <article><span>04</span><h3>Consegna</h3><p>Verifichiamo funzionalità e finiture prima della messa su strada.</p></article>
          </div>
          <div className="aftercare"><span>Revisione veicoli</span><i /> <span>Assistenza tecnica</span><i /> <span>Noleggio auto di cortesia</span></div>
        </div>
      </section>

      <section className="contact" id="contatti">
        <img src="/images/van-workshop.jpg" alt="Officina Amato Allestimenti" />
        <div className="contact-shade" />
        <div className="contact-grid page-shell">
          <div>
            <p className="mini-label">Parliamo del tuo prossimo allestimento</p>
            <h2>Costruiamo il veicolo che serve davvero al tuo lavoro.</h2>
            <p>Richiedi informazioni o un preventivo personalizzato. Ti risponderà direttamente il nostro team tecnico.</p>
            <div className="contact-links">
              <a href="tel:+39081925169"><span><Icon name="phone" /></span><small>Telefono</small><strong>081 925169</strong></a>
              <button onClick={() => openWhatsApp("Buongiorno Amato Allestimenti, vorrei ricevere informazioni per un nuovo allestimento.")}><span><Icon name="whatsapp" /></span><small>WhatsApp</small><strong>392 945 32 96</strong></button>
            </div>
          </div>
          <div className="contact-card">
            <p className="mini-label">Contatto rapido</p>
            <h3>Da quale progetto partiamo?</h3>
            <form onSubmit={submitLead}>
              <div className="field-row"><label>Nome<input name="name" required placeholder="Nome e cognome" /></label><label>Telefono<input name="phone" required type="tel" placeholder="Numero di telefono" /></label></div>
              <label>Mi interessa<select name="vehicle" defaultValue="officina mobile"><option>officina mobile</option><option>Polizia Municipale</option><option>Protezione Civile</option><option>mobilità accessibile</option><option>altro veicolo speciale</option></select></label>
              <label className="privacy"><input type="checkbox" required /><span>Accetto di essere ricontattato per questa richiesta.</span></label>
              <button className="button button-primary" type="submit">Parla con un tecnico <Icon name="arrow" /></button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-main page-shell">
          <img src="/images/amato-logo.png" alt="Amato Allestimenti Veicoli" />
          <p>Soluzioni su misura. Sicurezza certificata.<br />Tecnologia e assistenza dedicate.</p>
          <div><small>Sede operativa</small><strong>Via Giovanni Pepe, 9<br />Nocera Inferiore (SA)</strong></div>
          <div><small>Contatti</small><a href="mailto:info@amatoallestimenti.it">info@amatoallestimenti.it</a><a href="tel:+39081925169">081 925169</a></div>
        </div>
        <div className="footer-bottom page-shell"><span>© 2026 Amato Allestimenti Veicoli</span><span>Il veicolo giusto, per ogni missione.</span></div>
      </footer>

      <button className="floating-whatsapp" aria-label="Contatta Amato Allestimenti su WhatsApp" onClick={() => openWhatsApp("Buongiorno Amato Allestimenti, vorrei ricevere informazioni.")}><Icon name="whatsapp" /><span>WhatsApp</span></button>
    </main>
  );
}
