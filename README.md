# rokkay-portfolio

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt docs](https://nuxt.com/docs).

## Contact form on Cloudflare

This project includes a Cloudflare Pages Function at `/api/contact` (`functions/api/contact.js`) that sends email through MailChannels.

Set these environment variables in Cloudflare Pages:

- `CONTACT_TO`: destination email address
- `CONTACT_FROM`: sender email address in your domain
- `MAILCHANNELS_API_URL` (optional): defaults to `https://api.mailchannels.net/tx/v1/send`
- `NUXT_PUBLIC_CONTACT_ENDPOINT` (optional): defaults to `/api/contact`
