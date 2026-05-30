# assets

Put images (logos, photos, illustrations) here, then **import** them in a
component so Vite bundles and fingerprints them:

```jsx
import logo from '../assets/logo.png';

<img src={logo} alt="HBC logo" />
```

Supported: `.png`, `.jpg/.jpeg`, `.webp`, `.svg`, `.gif`.

## When to use `public/` instead

For assets you want served at a fixed, unprocessed URL (e.g. a favicon, or an
image referenced from `index.html`), drop them in a top-level `public/` folder
and reference them by absolute path, e.g. `<img src="/favicon.png" />`.
