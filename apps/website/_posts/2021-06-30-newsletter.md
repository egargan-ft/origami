---
title: Origami Newsletter, June 2021
description: Origami via Bower is deprecated, please migrate to the npm versions. A new autocomplete component has been built and is ready for use.
author: Origami team
tags:
- Newsletter
---

<abbr title="Too long; didn't read">
<strong>
TL;DR:
</strong>
</abbr> {{page.description}}

## Top things

Some of the bigger Origami news from the last month:


### FT Bower Registry is now deprecated

Our main objective this quarter was to have everything in Origami moved off of Bower and onto the [NPM registry](https://www.npmjs.com/) (see [January's announcement](/blog/2021/01/18/deprecating-bower-and-origami-via-npm/)).

Moving Origami from Bower to NPM provides many benefits, such as:

- Aligning our front-end practices with those now most commonly used across the company and the wider industry, which should help the on-boarding of new software engineering hires.
- Origami components can now make use of the 1.6 million packages which are on the NPM registry.
- Origami components will be able to use modern tooling instead of the Origami team having to build bespoke tooling ourselves.
- Services such as Snyk, Dependabot, and Renovate will be able to work for the Origami dependencies a project has.

We have completed this piece of work and now are ready for teams to migrate their products to the new implementation of Origami. Components on Bower are now deprecated and we recommend all products migrate to the new implementation to keep up-to-date with future releases to Origami.

The [FT Bower Registry](https://origami-bower-registry.ft.com/) has now also been placed into a maintenance only mode for 12 months, until 1st July 2022, when we will look to decommission the service completely.

We have [created a set of guides](https://origami.ft.com/documentation/tutorials/npm/) to cover the different ways products may choose to migrate.


### o-autocomplete

Another one of our objectives this quarter was to build an autocomplete/type-ahead component within Origami. This was a component which has been requested by several different FT products. The Product Design team have done a great job on creating an autocomplete design which fits with the rest of the components within our products. We have completed development of the component, which we named [o-autocomplete](https://registry.origami.ft.com/components/o-autocomplete). It is the first component which exists on NPM and not on Bower and it has benefited greatly from this by being able to use the [accessible-autocomplete](https://github.com/alphagov/accessible-autocomplete) package which already exist on NPM and was made by Gov UK. This greatly reduced the amount of code we would have had to write ourselves.

If your product is already using an autocomplete component or wanting to use one, we recommend looking at [o-autocomplete](https://registry.origami.ft.com/components/o-autocomplete) and seeing if you can start using it instead as it is actively being worked on by the Origami and Product Design.


### Origami Build Service version 2 is deprecated

This version of the build service uses the now deprecated FT Bower Registry. We have built a new version, version 3, which does not use the FT Bower Registry. To help projects migrate to version 3, we have built [a tool](https://www.ft.com/__origami/service/build/url-updater) which will list out the specific steps for a project to do in order to successfully migrate over to the new version.

We are tracking the projects which will need to be migrated to the new version in [the same spreadshet we are tracking the Bower migration](https://docs.google.com/spreadsheets/d/1Pem5e6cR0aiuKpYa7VD08AnSSynzjRtWt_VAHAoyhPQ/edit#gid=0).


## Special thanks

This issues special thanks goes to Xuan Zhang! Xuan worked on the design and interactions for the new o-autocomplete component and was very helpful in explaining the designs and how they should look on different devices.


## Broader update

- MAJOR: All Origami maintained components have been migrated from Bower to NPM
- MAJOR: [origami-build-tools](https://github.com/Financial-Times/origami-build-tools) version 11 released, dropping support for Bower and adding full support for NPM
- MINOR: [o-colors](https://github.com/Financial-Times/o-colors) added a new palette named "partner content" with a new colour named "Matisse"
- PATCH: [o-layout](https://github.com/Financial-Times/o-layout) added missing closing div to the footer markup in the component's demos
- PATCH: [o-teaser](https://github.com/Financial-Times/o-teaser) updated the partner content label colour to "matisse"
- DEPRECATED: [o-layers](https://github.com/Financial-Times/o-layers) was deprecated
- PATCH:[o-tracking](https://github.com/Financial-Times/o-tracking) has added back the `source_id` property
- The Origami blog now has [an RSS feed](https://origami.ft.com/feed.xml).
- [Origami Build Service](https://github.com/Financial-Times/origami-build-service) version 3 was released along with a page to help projects update their URLs to use the latest version of Origami
- The following projects have had additional updates to support the migration from Bower to NPM:
    - [Polyfill Service](https://github.com/Financial-Times/polyfill-service) has migrated to using Origami components via NPM
    - [Origami Build Service](https://github.com/Financial-Times/origami-build-service) has migrated to using Origami components via NPM
    - [Origami Repo Data](https://github.com/Financial-Times/origami-repo-data) has migrated to using Origami components via NPM
    - [Origami Workshop](https://github.com/Financial-Times/origami-workshop) has migrated to using Origami components via NPM
    - [Create Origami Component](https://github.com/Financial-Times/create-origami-component) has been updated to create an Origami component which publishes to NPM
    - [Origami Repo Data](https://github.com/Financial-Times/origami-repo-data) was updated to handle NPM components as well as Bower components
- [Polyfill Library](https://github.com/Financial-Times/polyfill-library)'s internationalisation polyfills have been updated to include more timezones
