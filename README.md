
## LETS WOOHOO website

npm run dev to start dev server


Media Files are deployed to sanity CMS. the cms can be accessed at "/studio" and then uploaded in the media tab. 


The Environment variables needed to run the app locally are

NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
NEXT_PUBLIC_NODEMAILER_PW
NEXT_PUBLIC_NODEMAILER_EMAIL

We initially had a setup of saving data to Sanity CMS but the sizes of the videos and the fact that we reached bandwith limit made a move of some of the heavy videos to vercel blob.

## Experiential marketing / BTL landing
 
- Landing: `/experiential-marketing`
- Confirmation: `/experiential-marketing/thank-you`
- Partial-service CTA: `/experiential-marketing?service=partial#quote`

These are native Next.js App Router pages in `src/app/(landing)/experiential-marketing`, built with TypeScript, React components and Tailwind, following the rest of the app. Shared landing components live in `src/components/ExperientialMarketing`; services, clients, process steps and social links live in `src/utils/experientialMarketing.ts`.

The responsive layout follows `Diseño_LandingBTL_Aprobado_20261020.html` on desktop, `V1-Dark-Tablet-Landing.html` on tablet and `V1-Dark-Mobile-Landing.html` on mobile. Tablet starts at 768px and desktop at 1100px; widths remain fluid between the supplied reference sizes. The confirmation uses the supplied mobile and tablet ThankYou references. Outfit is loaded through `next/font`, and the small set of custom styles is scoped under `.btl-landing`. Photos and client logos retain the reference placeholders pending approved assets.

The form reuses `POST /api/contact` and its existing Nodemailer configuration. Company, selected service and approximate date are included in the email's message. Confirmation is shown only after a successful response; failed requests preserve the entered values and allow a retry. The CTA for partial services preselects that option.

`SiteChrome` in `src/components/General UI` selects the landing's own header/footer presentation on these routes. Existing pages continue using the site's shared footer and floating contact button. Root analytics remain shared.

Validation commands:

```sh
npx tsc --noEmit --incremental false
npx eslint "src/components/ExperientialMarketing" "src/components/General UI/SiteChrome.tsx" "src/app/(landing)" "src/utils/experientialMarketing.ts" "src/app/layout.tsx"
npm run build
```

The full build requires the Sanity environment variables listed above, including for existing CMS pages. Sending email also requires the existing Nodemailer variables.
