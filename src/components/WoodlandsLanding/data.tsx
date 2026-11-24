export { woodlandsPath } from "@/utils/experientialMarketing";

const img = "https://cdn.sanity.io/images/5egex671/production";

export const woodlandsLinks = [
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#why", label: "Why WOOHOO" },
];

export const woodlandsMarquee = ["Digital ads", "Content", "Creative", "Design", "Bilingual campaigns", "Reporting"];

export const woodlandsBrands: { name: string; image: string; wide?: boolean }[] = [
  { name: "Arca Continental", image: `${img}/fe7ccd8b7cf0b83e4d3cdea7fa7ecebe71a64607-600x248.png` },
  { name: "MINI", image: `${img}/bf950551dbedb87ad10806acee2b3f57d6606399-600x265.png` },
  { name: "Auna", image: `${img}/19e0b03e4375b2197e3b9618e689613c6b9f579b-318x72.png` },
  { name: "Cleber", image: `${img}/f24b4e9cce5f46a7086107b64beffe1061368b30-1160x172.png` },
  { name: "Lexus Monterrey | Cleber", image: `${img}/4da097f0a56033a53b9b5c3f643b1716752c0464-1486x286.png`, wide: true },
];

export const woodlandsHeroImage = `${img}/7b0a9b18508d38e9a5a8d017ebcfad9e29063c05-900x1600.jpg`;

export const woodlandsPerks = [
  { title: "Agency-level work, smarter investment", description: "The quality you’d expect from a top agency, built around the budget you actually have.", icon: "star", iconClassName: "bg-[#ffba03] text-[#0f0f10]" },
  { title: "More reach, same team", description: "A full marketing department’s output, without hiring one.", icon: "trend", iconClassName: "bg-[#ff1229] text-white" },
  { title: "One partner, every channel", description: "Digital ads, content, creative and design working toward the same goal.", icon: "target", iconClassName: "bg-[#bd35a4] text-white" },
] as const;

export const woodlandsServices = [
  {
    number: "01", title: "Digital ads", tagline: <>Ads that bring you <span className="btl-gradient-text">LEEEADS</span></>,
    description: "Google Ads, Facebook & Instagram ads and TikTok campaigns built for the result you need: leads, sales, traffic or awareness. We run them end to end, from strategy to reporting, so you always know what’s working and why. No guesswork, no mystery metrics.",
    tags: ["Strategy", "Campaign setup", "Ad creative", "Optimization", "Performance reporting"],
    image: `${img}/7394cc322f060a80eb4ff609f26c2f27d59d2ba2-1600x900.jpg`, alt: "Marketing performance dashboard", imagePosition: "center",
    imageClassName: "rounded-br-[96px] md:rounded-br-[120px] bg-[linear-gradient(130deg,#ffba03,#ff1229)]",
  },
  {
    number: "02", title: "Content", tagline: <>Content that keeps you top of <span className="btl-gradient-text">MIIIND</span></>,
    description: "A content strategy and the team to bring it to life. We plan your content calendar, produce and edit it, and manage your community on Facebook, Instagram, LinkedIn and TikTok. You? Just keep running your business.",
    tags: ["Content strategy", "Content calendar", "Production", "Editing", "Community management"],
    image: `${img}/f7e681be264fcddea5c2e957e0c575dafcb0fcb0-1080x1350.jpg`, alt: "Healthcare social media content campaign", imagePosition: "center top",
    imageClassName: "rounded-bl-[96px] md:rounded-bl-[120px] bg-[linear-gradient(130deg,#ff1229,#bd35a4)]",
  },
  {
    number: "03", title: "Creative", tagline: <>Creative that connects, stands out and <span className="btl-gradient-text">SEEELLS</span></>,
    description: "The big idea behind your campaign and every word that carries it, from brand narrative and naming to scripts and ad copy for every channel.",
    tags: ["Campaign concept & big idea", "Brand manifesto and narrative", "Moodboards and creative direction", "Naming", "Taglines and slogans", "Brand voice guidelines", "Scripts for TV, film and video", "Copy for OOH, print and digital ads", "Key visuals", "Storyboards"],
    image: `${img}/7b0a9b18508d38e9a5a8d017ebcfad9e29063c05-900x1600.jpg`, alt: "WOOHOO crew on a video shoot", imagePosition: "center 35%",
    imageClassName: "rounded-tr-[96px] md:rounded-tr-[120px] bg-[linear-gradient(130deg,#bd35a4,#3c00f6)]",
  },
  {
    number: "04", title: "Design", tagline: <>A brand people <span className="btl-gradient-text">RECOOOGNIZE</span></>,
    description: "Brand identity design that looks consistent everywhere your customers meet you, on screen, on the street and in their hands.",
    tags: ["Branding & visual identity", "Brand guidelines", "Campaign key visuals", "Social media design", "Websites, landing pages and UI/UX", "OOH and DOOH", "Print and editorial", "Packaging", "Welcome kits and corporate gifts"],
    image: `${img}/c3be0bbd048a6d1de37294f6a044a3f15a7d10af-782x716.jpg`, alt: "WOOHOO logo construction grid", imagePosition: "center",
    imageClassName: "rounded-tl-[96px] md:rounded-tl-[120px] bg-[linear-gradient(130deg,#ffba03,#bd35a4)]",
  },
] as const;

export const woodlandsIndustries = [
  {
    claim: <>Let’s make engines <span className="btl-gradient-text">ROAAAAR</span></>,
    title: "Marketing built for independent dealerships and auto shops",
    description: "Big dealer groups have big marketing teams. You have us. We help independent dealerships, car lots and auto parts stores bring more buyers through the door. Great auto shops deserve powerful ideas.",
    image: `${img}/8127ea52e107ff04f74cc2588b9004a0f67f21a7-1600x1067.jpg`, alt: "Vehicle launch event at a BMW dealership", imagePosition: "center",
    imageClassName: "rounded-[28px_28px_28px_88px] md:rounded-[34px_34px_34px_110px] bg-[linear-gradient(130deg,#ffba03,#ff1229)]",
  },
  {
    claim: <>Let’s bring more to the table. We help your restaurant <span className="btl-gradient-text">GROOOW</span></>,
    title: "Restaurant marketing for independent restaurants and growing chains",
    description: "Content, local ads and campaigns that fill tables and turn first-timers into regulars, whether you run one location or several.",
    image: `${img}/c6946b8ca38d89c3588bb4c0435c571e36241ffd-1080x1920.png`, alt: "Packaged turkey products for everyday meals", imagePosition: "center 75%",
    imageClassName: "rounded-[28px_28px_88px_28px] md:rounded-[34px_34px_110px_34px] bg-[linear-gradient(130deg,#ff1229,#bd35a4)]",
  },
  {
    claim: <>Let’s take your practice to new <span className="btl-gradient-text">HEIIIGHTS</span></>,
    title: "Healthcare marketing for clinics and independent providers",
    description: "You focus on your patients. We help them find you, with a trusted brand and campaigns that keep your schedule full.",
    image: `${img}/8a41993b4b4be47376dc64379b5f8329e7c318f8-1080x1350.jpg`, alt: "Auna healthcare campaign featuring a doctor reviewing lung scans", imagePosition: "center top",
    imageClassName: "rounded-[88px_28px_28px_28px] md:rounded-[110px_34px_34px_34px] bg-[linear-gradient(130deg,#bd35a4,#3c00f6)]",
  },
  {
    claim: <>More clients, same team? Let’s make it <span className="btl-gradient-text">HAPPEEEEN</span></>,
    title: "White-label creative and a nearshore team for marketing agencies",
    description: "Take on more clients without hiring: we work behind the scenes as your production team. Planning to expand into Mexico? We’ll help you get there.",
    image: `${img}/6af5e9310b397ad18e3b91b1ab177f6ea5ac79ae-1024x768.jpg`, alt: "Behind the scenes of a WOOHOO production", imagePosition: "center", dark: true,
    imageClassName: "rounded-[28px_88px_28px_28px] md:rounded-[34px_110px_34px_34px] bg-[linear-gradient(130deg,#ffba03,#bd35a4)]",
  },
] as const;

export const woodlandsWhy = [
  { title: "Agency-level work, smarter investment", description: "The creative and strategic caliber of a top agency, without the big-agency overhead.", className: "bg-[#ffba03] text-[#0f0f10]" },
  { title: "Proven in your industry", description: "Hands-on experience growing brands in the automotive, restaurant, and healthcare sectors, and collaborating with other agencies.", className: "bg-[#f58a07] text-[#0f0f10]" },
  { title: "Bilingual by nature", description: "A bilingual marketing agency that understands the Hispanic market from the inside.", className: "bg-[#ff1229] text-white" },
  { title: "Local when it matters", description: "Part of our leadership team lives in the area and meets with clients in person.", className: "bg-[#bd35a4] text-white" },
  { title: "On your schedule", description: "We work 9 a.m. to 6 p.m. Central Time, just like you.", className: "bg-[#3c00f6] text-white" },
] as const;

export const woodlandsServiceOptions = ["Digital ads", "Content", "Creative", "Design", "Full-service marketing team", "Only part of it"];
export const woodlandsIndustryOptions = ["Auto dealership / auto shop", "Restaurant", "Healthcare", "Marketing agency", "Other"];
