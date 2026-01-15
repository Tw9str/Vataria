import QRCode from "react-qr-code";
import WhatsappIcon from "@/components/Icons/WhatsappIcon";
import EmailIcon from "@/components/Icons/EmailIcon";

export default function Home() {
  const contact = {
    company: "Vitaria",
    email: "orders@example.com",
    phone: "+90 535 733 1290",
    whatsapp:
      "https://wa.me/905357331290?text=Hello%20I%20am%20interested%20in%20your%20olive%20oil",
  };

  const qrValue = "https://vataria.us/";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0f1411] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        {/* subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
        {/* olive/amber glows */}
        <div className="absolute left-[-30%] top-[-30%] h-[320px] w-[320px] md:h-[720px] md:w-[720px] rounded-full bg-[#89b36a] opacity-18 blur-3xl" />
        <div className="absolute right-[-35%] top-[0%] h-[320px] w-[320px] md:h-[760px] md:w-[760px] rounded-full bg-[#f0c66a] opacity-12 blur-3xl" />
        <div className="absolute left-[15%] bottom-[-35%] h-[320px] w-[320px] md:h-[760px] md:w-[760px] rounded-full bg-[#3f783c] opacity-10 blur-3xl" />
        {/* soft grain */}
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22600%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22600%22 height=%22600%22 filter=%22url(%23n)%22 opacity=%220.35%22/%3E%3C/svg%3E')]" />{" "}
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        {/* Header */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-[#89b36a] to-[#3f783c] shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
              <span className="text-lg">🫒</span>
            </div>
            <div>
              <div className="font-extrabold tracking-tight">
                {contact.company}
              </div>
              <div className="text-sm text-white/65">Olive oil</div>
            </div>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            🚧 Under Construction
          </div>
        </header>

        {/* Under Construction */}
        <section className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-[1.15fr_.85fr]">
          {/* Big message */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f0c66a]/50 bg-[#f0c66a]/10 px-4 py-2 text-sm font-semibold text-[#ffe6a7]">
              🚧 Site Update In Progress
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              UNDER
              <span className="block text-white/90">CONSTRUCTION</span>
            </h1>

            <div className="mt-5 flex items-center justify-center gap-3">
              <LoadingDots />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/60">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                ✅ Orders by WhatsApp / Email
              </span>
            </div>
          </div>

          {/* Contact card */}
          <aside className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="text-lg font-bold">Contact</div>
                <div className="mt-1 text-sm text-white/65">
                  Reach us anytime. We’ll respond as soon as possible.
                </div>
              </div>

              {/* QR (visible on mobile too, but smaller) */}
              <div className="flex justify-start sm:justify-end">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="bg-white p-2">
                    <QRCode
                      value={qrValue}
                      size={96}
                      className="h-24 w-24 sm:h-[120px] sm:w-[120px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <ContactItem
                icon={
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
                    <WhatsappIcon />
                  </span>
                }
                label="WhatsApp"
                value={contact.phone}
                href={contact.whatsapp}
              />

              <ContactItem
                icon={
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
                    <EmailIcon />
                  </span>
                }
                label="Email"
                value={contact.email}
                href={`mailto:${contact.email}`}
              />
            </div>

            <div className="mt-6 border-t border-white/10 pt-4 text-sm text-white/60">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  © {new Date().getFullYear()} {contact.company}
                </div>
                <div className="text-white/70">
                  <span className="font-semibold text-white">Thanks!</span> 💚
                </div>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

function ContactItem({ icon, label, value, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm transition hover:border-[#89b36a]/60 hover:bg-[#89b36a]/10"
      aria-label={label}
    >
      <span className="shrink-0">{icon}</span>

      <div className="min-w-0 flex flex-col">
        <span className="text-xs uppercase tracking-wide text-white/50">
          {label}
        </span>
        <span className="truncate text-white/80 sm:whitespace-normal sm:break-words">
          {value}
        </span>
      </div>
    </a>
  );
}

function LoadingDots() {
  return (
    <div className="flex items-center gap-2" aria-label="Loading">
      <span className="h-3 w-3 animate-bounce rounded-full bg-white/70 [animation-delay:-0.2s] sm:h-4 sm:w-4" />
      <span className="h-3 w-3 animate-bounce rounded-full bg-white/70 [animation-delay:-0.1s] sm:h-4 sm:w-4" />
      <span className="h-3 w-3 animate-bounce rounded-full bg-white/70 sm:h-4 sm:w-4" />
    </div>
  );
}
