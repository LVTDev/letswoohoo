
## LETS WOOHOO website

npm run dev to start dev server


Media Files are deployed to sanity CMS. the cms can be accessed at "/studio" and then uploaded in the media tab. 


The Environment variables needed to run the app locally are

NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
NEXT_PUBLIC_NODEMAILER_PW
NEXT_PUBLIC_NODEMAILER_EMAIL

We initially had a setup of saving data to Sanity CMS but the sizes of the videos and the fact that we reached bandwith limit made a move of some of the heavy videos to vercel blob.
