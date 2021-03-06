# proto-ikon-loader-wc

[![npm version](https://badge.fury.io/js/proto-ikon-loader-wc.svg)](https://npmjs.com/package/proto-ikon-loader-wc)

a prototype icon loader written in Stencil...

- loads icons from proto-ikons-wc
- the icons are Stencil components which render SVGs
- this component will lazy load those icons, on demand
- purely exploratory...

## proofs

> _the following apps were written in Svelte and use this web component to load the SVG icons displayed in them..._

- [s4e-proofs][icons-io] - _Material Design icons_
- [s4e-ikons][ikons-io] - _Auto Brand icons_

## examples

```
  <proto-ikon-loader name="audi" size=42 />
  <proto-ikon-loader name="radio" selected="true" />
```

[icons-io]: https://s4e-proofs.vercel.app
[ikons-io]: https://s4e-ikon-proofs.vercel.app

