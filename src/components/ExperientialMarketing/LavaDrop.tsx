import Image from "next/image";

const heroImage = "https://cdn.sanity.io/images/5egex671/production/a1ff28949ff4a38e3b092b72c1a850568d8f14b2-3005x2003.jpg";

export default function LavaDrop({ alt }: { alt: string }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div aria-hidden="true" className="absolute inset-[0_4%_8%_10%] -rotate-10 rounded-[52%_48%_40%_60%/46%_56%_44%_54%] bg-[#bd35a4] opacity-35" />
      <div aria-hidden="true" className="absolute inset-[6%_0_4%_14%] rotate-12 rounded-[60%_40%_56%_44%/50%_44%_56%_50%] bg-[#ffba03] opacity-30" />
      <div className="absolute inset-[10%_8%_12%_6%] overflow-hidden rounded-[50%_50%_46%_54%/58%_48%_52%_42%] bg-[linear-gradient(140deg,#bd35a4,#ff1229_50%,#ffba03)]">
        <Image src={heroImage} alt={alt} fill sizes="(min-width: 1100px) 520px, (min-width: 768px) 40vw, 100vw" quality={90} className="object-cover" priority />
      </div>
      <div aria-hidden="true" className="absolute right-[6%] bottom-[6%] size-[52px] rounded-full bg-[linear-gradient(140deg,#ff1229,#ffba03)] min-[68.75rem]:size-[74px]" />
    </div>
  );
}
