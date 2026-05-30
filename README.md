# HBC QR Code Selector

A small React + Vite app for **RCCG Heaven's Gate Parish — Children Department**
Holiday Bible Club (HBC). It has two screens:

1. **Landing page** (`/`) — the HBC event overview: introduction, objective,
   daily schedule, scoring system, and coordination teams.
2. **QR selector** (`/select`) — lets a visitor choose between:
   - **QR Code for Registration** — for parents/guardians to register a child.
   - **QR Code for Volunteer** — for parents, youths & teenagers to sign up to serve.

   The chosen QR code can be scanned on screen or downloaded as a PNG.

## Configure the QR destinations

Edit `src/data/event.js` and set the two URLs to your live forms:

```js
export const QR_LINKS = {
  volunteer: 'https://...your volunteer form...',
  registration: 'https://...your registration form...',
};
```

All event text lives in the same file.

## Run

```bash
npm install
npm run dev      # http://localhost:5175
npm run build    # production build into dist/
npm run preview
```

## Stack

Vite · React 18 · React Router · Tailwind CSS · qrcode.react · lucide-react
