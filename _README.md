# $PROJECT_NAME

## Set up

Requires Node 4 or above.

```sh
npm install    # First-time setup
npm start      # Development server
```

```sh
npm run build  # Build for production (builds into /public)
```

## What's here

| Path | Purpose
| --- | ---
| `/web/assets` | the files to be built into `/public`
| `/web/css` | CSS files (via Sass + PostCSS)
| `/web/js` | JS files (via Browserify)
| `/web/layouts` | Layouts for Jade
| `/public` | The built files (gitignored)

## Heroku setup

```sh
heroku create --app my-app
git push heroku master
```
