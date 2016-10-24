# frontend-starter-kit

> Boilerplate for a frontend project powered by Metalsmith

This is a small project that takes a bunch of HTML, CSS, JS files (`web/`) and turns them into a website (`public/`). Use it to build your new Reddit webapp, [Pokemon tool](http://weedlecalc.com/), Firebase-based webapp, [Phoenix](http://phoenixframework.org/) app assets, or whatever suits your fancy.

<br>

## Installation

See instructions for:

<details open>
<summary>**Vanilla** (no framework)</summary>

```sh
mkdir my-project
cd my-project
curl -sSL https://raw.githubusercontent.com/rstacruz/frontend-starter-kit/master/_extras/INSTALL.sh | bash
```

See [INSTALL.sh](_extras/INSTALL.sh) to see what it does.
</details>


<details>
<summary>with **Decca**</summary>

[Decca](http://ricostacruz.com/decca) is a React-like library for rendering functional views.

```sh
# Run both:
curl -sSL https://raw.githubusercontent.com/rstacruz/frontend-starter-kit/master/_extras/INSTALL.sh | bash
curl -sSL https://raw.githubusercontent.com/rstacruz/frontend-starter-kit/master/_extras/decca/INSTALL.sh | bash
```
</details>

<details>
<summary>with **React** + **Redux**</summary>

This is a React boilerplate with Redux. It uses [riot-route](https://www.npmjs.com/package/riot-route) for routing.

```sh
# Run both:
curl -sSL https://raw.githubusercontent.com/rstacruz/frontend-starter-kit/master/_extras/INSTALL.sh | bash
curl -sSL https://raw.githubusercontent.com/rstacruz/frontend-starter-kit/master/_extras/react/INSTALL.sh | bash
```

</details>


<details>
<summary>in a **Phoenix** project</summary>

Experimental! Use this with [Phoenix](http://phoenixframework.org/) to replace Brunch with Metalsmith. Bootstrap your app with `mix phoenix.new --no-brunch`, then:

```sh
curl -sSL https://raw.githubusercontent.com/rstacruz/frontend-starter-kit/master/_extras/phoenix/INSTALL.sh | bash
```
</details>

<br>

## Usage

Run in development (or production):

```
npm start
```

Or build for production (builds `/public`):

```
npm run build
```

<br>

## What you get

- Extensible _everything_ build pipeline (via [**Metalsmith**](http://metalsmith.io))
- Extensible JavaScript build pipeline (via [**Browserify**](http://browserify.org/))
- Modern JavaScript with support for ES2017 (via [**Babel**](https://babeljs.io/))
- Modern CSS via [**Sass**](https://www.npmjs.com/package/node-sass), PostCSS, [**Cssnext**](http://cssnext.io/), and Autoprefixer

As well as:

- Support for Pug (as well as any templating language) via [jstransformer](https://github.com/RobLoach/metalsmith-jstransformer)
- Production-ready tools (JS and CSS compression)
- Super-useful development server (via [metalsmith-start](https://www.npmjs.com/package/metalsmith-start))
- Ready to deploy to Heroku (just `git push`)

<br>

## What you DON'T get

It's opinionated, but only up to a point. All it does is take `web/` and turn it into `public/` with a production build command (`npm run build`) and a development auto-watcher command (`npm start`). The rest is up to you.

These things are not included here:

- React (bring your own framework!)
- Testing boilerplate (bring your own testing tools!)
- CSS framework (bring your own Bootstrap/Foundation/etc!)
- ...and so on

<br>

## Paths

`web/` is compiled into `public/`.

- **[web/assets/](web/assets/)** — files compiled into `/public`. Anything not "compilable" is simply copied over.
    - [app.scss](web/assets/app.scss)
    - [app.browserify.js](web/assets/app.browserify.js) - compiles web/js/app.js
    - [vendor.browserify.js](web/assets/vendor.browserify.js) - separate bundle for big 3rd-party modules
    - [index.pug](web/assets/index.pug)
    - [robots.txt](web/assets/robots.txt)
- **[web/css/](web/css/)** — files *@import*ed by assets/app.scss.
    - [app.scss](web/css/app.scss)
- **[web/js/](web/js/)** — files compiled by Browserify.
    - [app.js](web/js/app.js)
- **[web/layouts/](web/layouts/)** – template layouts.
    - [base.pug](web/layouts/base.pug)
- [metalsmith.js](metalsmith.js) — metalsmith configuration.

<br>

## Why Metalsmith?

__Metalsmith is a compiler "framework".__ Its purpose in life is to take a folder (`web/`) and turn it into another folder (`public/`).

__It's (kinda) functional.__ Metalsmith brings together plugins that transform files into new files. A Metalsmith plugin is simply a `map()` for your entire project. Your build pipeline is simply a series of `map()`s.

__It's also great for development.__ [metalsmith-start](https://www.npmjs.com/package/metalsmith-start) is a fantastic development server for Metalsmith. It rebuilds your files instantaneously as you change them, supports LiveReloading, and can run on any Metalsmith project.

__It simplifies many things.__ Everything here is in <100 lines of JS and JSON (including package.json). The only significant pieces here are `metalsmith.js` and the Babel config in `package.json`.

<br>

## Why not X?

- You can use [Webpack](https://webpack.github.io/) (it compiles JS wonderfully!), but webpack won't copy over any non-JS files (`.html`, `.png` and so on). It also won't compile into CSS (it'll compile your CSS into JS, yuck).

- You can use [Brunch](http://brunch.io/) (it does the same folder-into-another-folder build style!), but Brunch has its own JS build pipeline, which is very hard to work with. It also doesn't support webpack/browserify.

- You can use [Gulp](http://gulpjs.com/) (it ties together build tools, too!), but interoperability between Gulp plugins is dismal. Good luck getting real-time file watching working with Browserify. Try to get LiveReload working without losing your hair and you'll see.

- You can use [Grunt](http://gulpjs.com/) (it's a task runner everyone loves! or at least used to), but I'll let [this article](https://www.keithcirkel.co.uk/why-we-should-stop-using-grunt/) explain why you shouldn't.

<br>
## Where to go from here

You can also add support for:

- [fingerprinting](https://github.com/superwolff/metalsmith-fingerprint-ignore)
- non-Pug [partials](https://github.com/RobLoach/metalsmith-jstransformer-partials)
- [PostCSS](https://www.npmjs.com/package/metalsmith-postcss)
- Other template engines via jstransformer (eg, [jstransformer-swig](https://github.com/jstransformers/jstransformer-swig)).
- Add tests with your favorite test framework

<br>

## Thanks

**frontend-starter-kit** © 2016+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/frontend-starter-kit/contributors
