"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import {
  experientialMarketingPath,
  experientialMarketingSpanishPath,
  experientialServices,
  experientialServicesEs,
  partialService,
  partialServiceEs,
} from "@/utils/experientialMarketing";
import { ButtonArrow } from "./QuoteButton";

const labelClassName = "flex min-w-0 flex-col gap-0.5 text-[11px] font-semibold tracking-[.22em] uppercase text-[#555] md:text-xs md:tracking-[.24em]";

export default function QuoteForm({ locale = "en" }: { locale?: "en" | "es" }) {
  const isSpanish = locale === "es";
  const router = useRouter();
  const searchParams = useSearchParams();
  const partial = searchParams.get("service") === "partial";
  const serviceOptions = isSpanish ? experientialServicesEs : experientialServices;
  const partialServiceOption = isSpanish ? partialServiceEs : partialService;
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const submitting = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    const name = String(fields.get("name") ?? "").trim();
    const email = String(fields.get("email") ?? "").trim();
    const phone = String(fields.get("phone") ?? "").trim();
    const message = String(fields.get("message") ?? "").trim();
    const eventMonth = String(fields.get("date") ?? "").trim();
    const eventDate = eventMonth
      ? new Intl.DateTimeFormat(isSpanish ? "es-MX" : "en-US", {
          month: "long",
          year: "numeric",
          timeZone: "UTC",
        }).format(new Date(`${eventMonth}-01T00:00:00Z`))
      : isSpanish ? "No especificada" : "Not provided";

    for (const [field, valid, error] of [
      ["name", Boolean(name), isSpanish ? "Escribe tu nombre completo." : "Please enter your full name."],
      ["phone", /^[\d\s()+-]+$/.test(phone) && phone.replace(/\D/g, "").length >= 7, isSpanish ? "Escribe un número de teléfono válido." : "Please enter a valid phone number."],
      ["message", Boolean(message), isSpanish ? "Cuéntanos qué quieres lograr." : "Please tell us what you want to achieve."],
    ] as const) {
      if (!valid) {
        const input = form.elements.namedItem(field) as HTMLInputElement | HTMLTextAreaElement;
        input.setCustomValidity(error);
        input.reportValidity();
        return;
      }
    }

    submitting.current = true;
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: [
            isSpanish ? "Solicitud de cotización de marketing experiencial / BTL" : "Experiential marketing / BTL quote request",
            `${isSpanish ? "Empresa" : "Company"}: ${String(fields.get("company") ?? "").trim() || (isSpanish ? "No especificada" : "Not provided")}`,
            `${isSpanish ? "Servicio" : "Service"}: ${fields.get("service")}`,
            `${isSpanish ? "Fecha del evento" : "Event date"}: ${eventDate}`,
            "",
            message,
          ].join("\n"),
        }),
      });
      const data = await response.json();
      if (!response.ok || data.success !== true) throw new Error("Contact request failed");
      router.push(isSpanish ? `${experientialMarketingSpanishPath}/gracias` : `${experientialMarketingPath}/thank-you`);
    } catch {
      submitting.current = false;
      setStatus("error");
    }
  }

  return (
    <form aria-label={isSpanish ? "Solicita una cotización" : "Get your quote"} aria-busy={status === "sending"} onSubmit={handleSubmit} onInput={(event) => {
      const field = event.target;
      if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) field.setCustomValidity("");
    }} className="grid min-w-0 grid-cols-1 gap-y-[22px] px-6 pt-8 pb-9 md:grid-cols-2 md:gap-x-7 md:gap-y-6 md:p-10 min-[68.75rem]:gap-x-8 min-[68.75rem]:gap-y-[26px] min-[68.75rem]:px-12 min-[68.75rem]:py-14">
      <label className={labelClassName}>{isSpanish ? "Nombre completo" : "Full name"}<span className="sr-only"> ({isSpanish ? "obligatorio" : "required"})</span>
        <input className="btl-input" type="text" name="name" autoComplete="name" placeholder={isSpanish ? "María García" : "Jane Smith"} required maxLength={200} />
      </label>
      <label className={labelClassName}>{isSpanish ? "Empresa" : "Company"}
        <input className="btl-input" type="text" name="company" autoComplete="organization" placeholder={isSpanish ? "Nombre de la empresa" : "Company name"} maxLength={200} />
      </label>
      <label className={labelClassName}>{isSpanish ? "Correo de trabajo" : "Work email"}<span className="sr-only"> ({isSpanish ? "obligatorio" : "required"})</span>
        <input className="btl-input" type="email" name="email" autoComplete="email" placeholder="tu@empresa.com" required maxLength={254} />
      </label>
      <label className={labelClassName}>{isSpanish ? "Teléfono" : "Phone"}<span className="sr-only"> ({isSpanish ? "obligatorio" : "required"})</span>
        <input className="btl-input" type="tel" name="phone" autoComplete="tel" placeholder="+52 (81) 0000 0000" required maxLength={40} />
      </label>
      <label className={labelClassName}>{isSpanish ? "¿Qué necesitas?" : "What do you need?"}
        <select key={`${locale}-${String(partial)}`} className="btl-input" name="service" defaultValue={partial ? partialServiceOption : serviceOptions[0].title}>
          {serviceOptions.map((service) => <option key={service.number}>{service.title}</option>)}
          <option>{isSpanish ? "Posadas y eventos fin de año" : "Holiday parties & year-end events"}</option>
          <option>{partialServiceOption}</option>
        </select>
      </label>
      <label className={labelClassName}>{isSpanish ? "Fecha aproximada del evento" : "Event date (approx.)"}
        <input className="btl-input" type="month" name="date" inputMode="numeric" pattern="[0-9]{4}-(0[1-9]|1[0-2])" placeholder={isSpanish ? "AAAA-MM" : "YYYY-MM"} maxLength={7} />
      </label>
      <label className={`${labelClassName} col-span-full`}>{isSpanish ? "Cuéntanos qué quieres lograr" : "Tell us what you want to achieve"}<span className="sr-only"> ({isSpanish ? "obligatorio" : "required"})</span>
        <textarea className="btl-input resize-y" name="message" rows={3} placeholder={isSpanish ? "Objetivo, ubicación, audiencia, presupuesto…" : "Goal, location, audience, budget range…"} required maxLength={5000} />
      </label>
      <div className="col-span-full flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:justify-between">
        <p className="text-[13px] text-[#555] md:max-w-[300px] min-[68.75rem]:max-w-[320px]">{isSpanish ? "Al enviar este formulario, aceptas nuestro" : "By sending this form you accept our"} <Link href={isSpanish ? "/aviso-de-privacidad" : "/privacy-policy"} className="text-[#a32a8c] underline hover:text-[#791e69]">{isSpanish ? "Aviso de privacidad" : "Privacy Notice"}</Link>.</p>
        <button type="submit" disabled={status === "sending"} className="group inline-flex min-h-[58px] cursor-pointer items-center justify-between gap-3.5 rounded-full bg-[#0f0f10] pr-2 pl-[26px] text-[17px] font-bold text-white transition duration-200 hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70 md:min-h-[60px] md:pr-2.5 md:pl-[30px]">
          {status === "sending" ? (isSpanish ? "Enviando…" : "Sending…") : (isSpanish ? "Solicitar cotización" : "Get my quote")}<ButtonArrow dark />
        </button>
      </div>
      <div className="col-span-full empty:hidden" aria-live="polite" aria-atomic="true">
        {status === "sending" && <p className="text-sm text-[#555]">{isSpanish ? "Enviando tu solicitud…" : "Sending your request…"}</p>}
        {status === "error" && <p role="alert" className="text-sm text-[#a32a46]">{isSpanish ? "No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos a" : "We couldn’t send your request. Please try again, or email"} <a href="mailto:hello@letswoohoo.com" className="underline">hello@letswoohoo.com</a>.</p>}
      </div>
    </form>
  );
}
