# frontend-starter-kit

> Boilerplate for a frontend project built with Node.js tools

A small project that takes a bunch of HTML (`web/`), CSS (`css/`), JS files (`js/`) and turns them into a website (`public/`).

## What you get

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

## Where to go from here

You can also add support for:

- [fingerprinting](https://github.com/superwolff/metalsmith-fingerprint-ignore)
- non-Pug [partials](https://github.com/RobLoach/metalsmith-jstransformer-partials)
- [PostCSS](https://www.npmjs.com/package/metalsmith-postcss)
- Other template engines via jstransformer (eg, [jstransformer-swig](https://github.com/jstransformers/jstransformer-swig)).
- Add tests with your favorite test framework

## Thanks

**frontend-starter-kit** © 2016+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/frontend-starter-kit/contributors
