# linyiguo96.github.io

Source for [Lincoln Guo's personal website](https://linyiguo96.github.io) — a custom Jekyll
site served by GitHub Pages. No theme, no CSS framework, no build step beyond Jekyll itself.

## Writing a post

Add a Markdown file to `_posts/` named `YYYY-MM-DD-title.md`:

```yaml
---
title: My new post
subtitle: Optional one-line subtitle
description: Optional summary for cards and search engines (defaults to the first paragraph)
cover: /img/optional-cover.jpg   # optional
---
```

Math (`$...$`, `$$...$$`) is rendered with MathJax automatically. Comments use giscus.
Files without a date prefix (e.g. `Pending-*.md`) are treated as drafts and not published.

## Where things live

| What | Where |
| --- | --- |
| Name, tagline, nav, social links, hero video | `_config.yml` |
| Work history, education, skills (About page) | `_data/experience.yml` |
| Photos for the home strip and `/photos/` | `_data/moments.yml` + `assets/img/moments/` |
| Styles (light + dark mode) | `assets/css/main.css` |
| Hero animation | `assets/js/hero.js` |
| Menu, scroll effects, search, lightbox | `assets/js/main.js` |

## Using a video in the hero

The hero shows a generative "time series ridgeline" animation by default. To use a video instead,
add a compressed, muted MP4 (aim for < 8 MB) to `assets/video/` and set it in `_config.yml`:

```yaml
hero:
  video: /assets/video/hero.mp4
  poster: /assets/img/hero-poster.jpg
```

## Local preview

```sh
gem install jekyll -v 3.10.0 && gem install jekyll-seo-tag jekyll-sitemap kramdown-parser-gfm webrick
JEKYLL_NO_BUNDLER_REQUIRE=true jekyll serve
```
