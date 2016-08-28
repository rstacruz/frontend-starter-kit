# frontend-starter-kit

A small project that takes a bunch of HTML (`web/`), CSS (`css/`), JS files (`js/`) and turns them into a website (`public/`).

Included in the kit:

- Build pipeline (via [Metalsmith](http://metalsmith.io))
- Development server (via [metalsmith-start](https://www.npmjs.com/package/metalsmith-start))
- Browserify
- Babel (with stage0 and react JSX)
- Sass + autoprefixer
- Jade/pug support
- Production compression

## Usage

Run in development (or production):

```
npm start
```

Build:

```
npm run build
```

## Paths

| Path | Description |
| ---- | ----------- |
| `/web` | All files here are mapped onto `/public` after compilation. |
| `/css` | Sass files. These are Sass `@import`ed from `/web`. |
| `/js` | Browserify sources. |
| `/public` | Where things are built into. |
