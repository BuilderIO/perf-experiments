<!-- HACK: this is a copy and paste from the root README for the homepage,
until I can find why netlify deploys can't handle importing from the top
level readme.md -->

# Perf Experiments

This is a repo to host pages to run performance tests against them with [PageSpeed Insights](https://pagespeed.web.dev/).

This also serves as a good example of using Astro + Builder.io via our [Qwik API](https://www.builder.io/c/docs/qwik-api)

Source code is on [Github here](https://github.com/builderio/perf-experiments)

## Setup

If you would like to clone this repo as an example of using Builder.io with Astro and our Qwik API, see [this video](https://www.loom.com/share/d8f49865120e417f93a6e62c8b29c8b1) for instructions

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
