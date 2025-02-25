---
title: Origami Newsletter, August 2020
description: This issue takes a closer look at some of our regular polyfill and documentation work.
author: Lee Moody
tags:
  - Newsletter
---

<abbr title="Too long; didn't read">
	<strong>
	TL;DR:
	</strong>
</abbr> {{page.description}}

## Top Things

Welcome to our (slightly delayed) August newsletter, here are some updates from the last month.

### Deleting Documentation

Last issue we introduced a new tutorial: [Create A New Origami Component](/documentation/tutorials/create-a-new-component-part-1/). This issue we're happy to report we deleted some of that work!

We wrote the tutorial to encourage more contributions from outside the core Origami team. However a secondary benefit of thoroughly documenting how to create a new component is that we can identify opportunities to simplify our process, for example by moving to new standards, and delete sections of the tutorial as we go.

This month wasn't just about deleting documentation though, based on feedback we linked to general component documentation from each component readme. The aim is to help people less familiar with Origami components get started. Thanks to Nick Colley in particular for [opening that issue](https://github.com/Financial-Times/origami/issues/59) and to everyone who gives the team feedback.

### Polyfills

We've also supported a number of polyfill updates this month. These allow us to use new technologies to build Financial Times products whilst still supporting our customers who may be using older web browsers or devices. For example the [fetch polyfill](https://github.com/github/fetch/releases/tag/v3.3.0) is now standards compliant and we can now [consistently sort arrays of data](https://github.com/Financial-Times/polyfill-library/pull/776).

As our polyfills are open source they are used by many companies outside the Financial Times. For example (name drops incoming) skyscanner, sainsburys, aviva, eurostar, weather.com, guardian... [there's a lot](https://trends.builtwith.com/javascript/Polyfill-IO). Our service [polyfill.io](polyfill.io/) received 818.8 million requests in the last 24 hours. This means part of maintaining our polyfills is responding to bug reports and external code contributions. Credit to the people who contribute to our polyfills by opening issues or with [code contributions](https://github.com/Financial-Times/polyfill-library/graphs/contributors), inside and outside the Financial Times 😊

## Special Thanks

You may know from our last issue that we have taken on stewardship and maintenance of `o-tracking` this quarter. That work is in progress, but we have another related special thanks.

Special thanks to Rob Squires and the Customer Products Platform team for helping answer our questions about cookie sizes on ft.com — without their help we would not have known about `o-tracking`’s large cookies for some customers. The new version of `o-tracking` will mitigate that issue and improve the performance of every ft.com request (images, css, fonts, js, etc) — hopefully more on that next issue!

Thanks again for the help, Rob and the Customer Products Platform team.

## Broader Update

A digest of other things that have happened since our last update:

- MINOR: [create-origami-component](https://github.com/Financial-Times/create-origami-component) test on node 14; make dependabot keep github actions up to date; update boilerplate readme to include general usage.
- MINOR: [o-header](https://github.com/Financial-Times/o-header) added support for right aligned subnav items.
- MINOR: [origami-website](https://github.com/Financial-Times/origami-website) remove outdated Dependabot tasks from the create component tutorial
- MINOR: [polyfill-library](https://github.com/Financial-Times/polyfill-library) add en locale to Intl alias; upgrade Intl polyfills & add Chromium bug detection for Intl.DisplayNames; Add a stable Array.prototype.sort polyfill; ensure only one pull-request runs the browserstack tests at a single time.
- MINOR: [polyfill-service-url-builder](https://github.com/Financial-Times/polyfill-service-url-builder) allow programmatic usage by exporting the library file.
- MINOR: [remark-preset-lint-origami-component](https://github.com/Financial-Times/remark-preset-lint-origami-component) lint for a link to general component usage information.
- PATCH: [express-web-service](https://github.com/Financial-Times/express-web-service) reformat the readme.
- PATCH: [o-ads-embed](https://github.com/Financial-Times/o-ads-embed) ensure a dependency `is-obj` is downloaded via https; allow received messages from local.ft.com (credit Carles Andrés!)
- PATCH: [o-buttons](https://github.com/Financial-Times/o-buttons): update pagination documentation and guidance.
- PATCH: [o-comments](https://github.com/Financial-Times/o-comments) update the readme to conform to the readme linter; improve styling based on Corals latest release (credit to Glynn Phillips and Tunca Bergmen!)
- PATCH: [o-header-services](https://github.com/Financial-Times/o-header-services) fix inconsistent border styles on dropdown toggles.
- PATCH: [o-message](https://github.com/Financial-Times/o-message) correct JSDoc type description.
- PATCH: [origami-build-tools](https://github.com/Financial-Times/origami-build-tools) allow lowercased filename for readme file; use component `.remarkrc.js` to allow component specific linting; fix True Sass tests.
- PATCH: [origami-component-manifest-linter](https://github.com/Financial-Times/origami-component-manifest-linter) refactoring and code improvements
- PATCH: [origami-navigation-service](https://github.com/Financial-Times/origami-navigation-service) a fix for the documentations navigation highlighting.
- PATCH: [polyfill-library-node](https://github.com/Financial-Times/polyfill-library-node) move from CircleCI to Github Actions for testing and deployment.
- PATCH: [polyfill-service](https://github.com/Financial-Times/polyfill-service) worflow improvements e.g. only allow one deploy to dev to happen at a time to prevent build errors; reuse the npm cache across builds.
- PATCH: All components, remove the circleci badge and references.
- PATCH: All projects, add missing Github workflow files.
- PATCH: All projects, move to Github's native Dependabot over Dependabot preview.
