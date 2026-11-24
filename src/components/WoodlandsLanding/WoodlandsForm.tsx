"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { ButtonArrow } from "@/components/ExperientialMarketing/QuoteButton";
import { woodlandsIndustryOptions, woodlandsPath, woodlandsServiceOptions } from "./data";

const labelClassName = "flex min-w-0 flex-col gap-0.5 text-[11px] font-semibold tracking-[.22em] uppercase text-[#555] md:text-xs md:tracking-[.24em]";

export default function WoodlandsForm() {
  const router = useRouter();
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

    for (const [field, valid, error] of [
      ["name", Boolean(name), "Please enter your full name."],
      ["phone", /^[\d\s()+-]+$/.test(phone) && phone.replace(/\D/g, "").length >= 7, "Please enter a valid phone number."],
      ["message", Boolean(message), "Please tell us what you want to achieve."],
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
            "Marketing & advertising agency (The Woodlands, TX) proposal request",
            `Company: ${String(fields.get("company") ?? "").trim() || "Not provided"}`,
            `Service: ${fields.get("service")}`,
            `Industry: ${fields.get("industry")}`,
            "",
            message,
          ].join("\n"),
        }),
      });
      const data = await response.json();
      if (!response.ok || data.success !== true) throw new Error("Contact request failed");
      router.push(`${woodlandsPath}/thank-you`);
    } catch {
      submitting.current = false;
      setStatus("error");
    }
  }

  return (
    <form aria-label="Get your proposal" aria-busy={status === "sending"} onSubmit={handleSubmit} onInput={(event) => {
      const field = event.target;
      if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) field.setCustomValidity("");
    }} className="grid min-w-0 grid-cols-1 gap-y-[22px] px-6 pt-8 pb-9 md:grid-cols-2 md:gap-x-7 md:gap-y-6 md:p-10 min-[68.75rem]:gap-x-8 min-[68.75rem]:gap-y-[26px] min-[68.75rem]:px-12 min-[68.75rem]:py-14">
      <label className={labelClassName}>Full name<span className="sr-only"> (required)</span>
        <input className="btl-input" type="text" name="name" autoComplete="name" placeholder="Jane Smith" required maxLength={200} />
      </label>
      <label className={labelClassName}>Company
        <input className="btl-input" type="text" name="company" autoComplete="organization" placeholder="Company name" maxLength={200} />
      </label>
      <label className={labelClassName}>Work email<span className="sr-only"> (required)</span>
        <input className="btl-input" type="email" name="email" autoComplete="email" placeholder="you@company.com" required maxLength={254} />
      </label>
      <label className={labelClassName}>Phone<span className="sr-only"> (required)</span>
        <input className="btl-input" type="tel" name="phone" autoComplete="tel" placeholder="+1 (555) 000 0000" required maxLength={40} />
      </label>
      <label className={labelClassName}>What do you need?
        <select className="btl-input" name="service" defaultValue={woodlandsServiceOptions[0]}>
          {woodlandsServiceOptions.map((option) => <option key={option}>{option}</option>)}
        </select>
      </label>
      <label className={labelClassName}>Your industry
        <select className="btl-input" name="industry" defaultValue={woodlandsIndustryOptions[0]}>
          {woodlandsIndustryOptions.map((option) => <option key={option}>{option}</option>)}
        </select>
      </label>
      <label className={`${labelClassName} col-span-full`}>Tell us what you want to achieve<span className="sr-only"> (required)</span>
        <textarea className="btl-input resize-y" name="message" rows={3} placeholder="Goals, timeline, budget range…" required maxLength={5000} />
      </label>
      <div className="col-span-full flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:justify-between">
        <p className="text-[13px] text-[#555] md:max-w-[300px] min-[68.75rem]:max-w-[320px]">By sending this form you accept our <Link href="/privacy-policy" className="text-[#a32a8c] underline hover:text-[#791e69]">Privacy Notice</Link>.</p>
        <button type="submit" disabled={status === "sending"} className="group inline-flex min-h-[58px] cursor-pointer items-center justify-between gap-3.5 rounded-full bg-[#0f0f10] pr-2 pl-[26px] text-[17px] font-bold text-white transition duration-200 hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70 md:min-h-[60px] md:pr-2.5 md:pl-[30px]">
          {status === "sending" ? "Sending…" : "Get my proposal"}<ButtonArrow dark />
        </button>
      </div>
      <div className="col-span-full empty:hidden" aria-live="polite" aria-atomic="true">
        {status === "sending" && <p className="text-sm text-[#555]">Sending your request…</p>}
        {status === "error" && <p role="alert" className="text-sm text-[#a32a46]">We couldn’t send your request. Please try again, or email <a href="mailto:hello@letswoohoo.com" className="underline">hello@letswoohoo.com</a>.</p>}
      </div>
    </form>
  );
}
