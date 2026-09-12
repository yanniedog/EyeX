# AGENTS.md

## Development instructions

This repository is a **static website** ("EyeX") consisting of only `index.html`,
`styles.css`, and `script.js`. There is no build system, package manager, or
dependencies.

### Running the site (dev)

Serve the folder with any static HTTP server and open the printed URL. Using a
server (rather than opening `index.html` via `file://`) ensures `script.js` runs
in a normal origin:

```sh
python3 -m http.server 8000
```

Then browse to `http://localhost:8000/`.

### Notes

- There are **no dependencies to install** and **no build step**. The update
  script is effectively a no-op.
- There is **no linter or test suite** configured in this repo. "Testing" means
  loading the page and exercising the JS interactivity (the nav "Menu" toggle and
  the "Gaming" submenu trigger in `script.js`).
- `script.js` toggles the `hidden` attribute / `open` class on the menus; the
  `.menu-toggle` button is only visible at viewport widths <= 600px (see the
  media query in `styles.css`).
