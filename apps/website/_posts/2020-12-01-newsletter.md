---
title: Origami Newsletter, November 2020
description: This issue features Engine Room, Origami v2, and on-site messaging bugs.
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

Some of the bigger Origami news from the last month:

### Engine Room

This month Origami team member Lee (oh hey, that's me!) gave a talk "[Origami: Past, Present, & Future](https://drive.google.com/file/d/1eiVw1-zhMSRy8S-5--xQJeBcYg_j17A6/view)" at [Engine Room](https://sites.google.com/ft.com/engine-room-live/), the FT's engineering-focused, internal conference.

The talk covers a little history including why Origami exists, how Origami has adapted to new needs over the last 7 years, and gives a little peek at what's to come. There are plenty of new opportunities for us to share and build on each others good work. The talk touches on a few technical subjects but is suitable for anyone within product and technology. If you missed it a [recording is available here](https://drive.google.com/file/d/1eiVw1-zhMSRy8S-5--xQJeBcYg_j17A6/view).

More Engine Room recordings are available in [Google drive](https://drive.google.com/drive/folders/1c84vnejFTdDeIK5RGS9BdMOQYEiOGRCl). There are many excellent talks to explore for those who couldn't make it.

### Origami V2

Work continues on our [proposal to drop Bower support in favour of NPM](https://github.com/Financial-Times/origami/pull/86). By switching we will align with the broader tech ecosystem and help speed up development at the FT.

This month we've tested out the proposed approach and... it works 🎉 We have also created a [draft Origami v2 specification](https://github.com/Financial-Times/origami-website/pull/273) with the changes required to drop Bower support.

This proposal affects all projects which depend on Origami components. If you have any questions, thoughts, or feedback we'd love to hear in the [#origami-chat](https://app.slack.com/client/T025C95MN/CSW6B2VAN) Slack channel or as a comment on [the proposal](https://github.com/Financial-Times/origami/pull/86).

We know this is one many of our engineers are excited about. Thanks to everyone who has given us feedback so far, it's much appreciated. 👏

### On-Site Messaging

Working with the design team we released a minor update to [o-message](https://registry.origami.ft.com/components/o-message@4.2.3) this month, which fixes some visual bugs including improvements to spacing around message content. We're careful not to release breaking changes within minor releases but unfortunately messaging on some projects broke as they were heavily customising `o-message` in an unsupported way, with CSS overrides.

In response we offered to [help update how projects use o-message](https://github.com/Financial-Times/next-article/pull/4055) to fix the problem. In addition, Xuan and the [#design-ops](https://app.slack.com/client/T025C95MN/C01481FKWA2) team are auditing our on-site messaging currently so we can update `o-message` and other Origami components to meet our current needs consistently, without the use of overrides.

Overriding component styles with CSS can be problematic for a few reasons. It introduces design inconsistency, code complexity, and fragility (overrides are liable to break without warning when components are updated, as happened in this case). Instead it’s better to:
-  Work with the design team to decide whether a component really needs a unique modification (see the [#design-ops](https://app.slack.com/client/T025C95MN/C01481FKWA2) Slack channel).
- Update the component to include the new style.
- Add new Sass options so the component can be customised.
- Or, if you're after quite different features or a whole new look, build from scratch.

The Origami team are here to help you decide which option is right for your project and make component updates if needed. We're also happy to help you review a projects use of components, to remove duplication and overrides — let us know how we can help in [#origami-support](https://app.slack.com/client/T025C95MN/C02FU5ARJ) 😊

## Special Thanks

This month we've made more direct contributions to Customer Products projects than usual. Our special thanks goes to those who helped review and release our work quickly so we could move on to other tasks. That includes Nick Colley and Simon Plenderleith, thanks both! 🙏

## Broader Update

A digest of other things that have happened this month:

- [Origami Proposals](https://github.com/Financial-Times/origami): This month there is a [new proposal to rename the Origami team](https://github.com/Financial-Times/origami/pull/93). There is also an update on the [variable font proposal](https://github.com/Financial-Times/origami/pull/92) — since we can only commission a resized MetricWeb variable font the work required for the proposal is greater, but as a bonus we may be able to reduce the complexity and increase the reliability of our font loading strategy. Let us know what you think!
- [Origami Specification](https://github.com/Financial-Times/origami-website): we've updated the Origami specification to relax some rules. Components without Sass may support brands without including `o-brand` as a dependency; Sass lint rules may be customised with a Style Lint configuration `.stylelintrc.js`; we've also been working on the v2 draft specification as discussed previously.
- MINOR: [o-buttons](https://github.com/Financial-Times/o-buttons) adds refresh and cross icon buttons to the default set for Build Service Users; improves spacing between icon and button text; updates pagination buttons with an improved look and new recommendations for the number of pages to show (thanks to Marina Ilieva for the design work here!) If your project uses pagination we recommend reviewing it and adding to your backlog if there’s an opportunity to use the latest o-buttons version to make improvements.
- MINOR: [o-comments](https://github.com/Financial-Times/o-comments) logs a warning if required constructor options are not given; improves the styles for the reported state (credit to Glynn Phillips).
- MINOR: [o-header](https://github.com/Financial-Times/o-header) makes the height of the sticky nav public with a Sass variable; improves the search close button's readability (thanks Nick Colley!)
- MINOR: [o-icons](https://github.com/Financial-Times/o-icons) adds a new `scroll-to` icon.
- MINOR: [o-labels](https://github.com/Financial-Times/o-labels) updates live indicator label animation.
- MINOR: [o-layout](https://github.com/Financial-Times/o-layout) adds a `listing` element for use with the landing layout, this is useful to list posts on a blog for example.
- MINOR: [o-message](https://github.com/Financial-Times/o-message): as discussed above, corrects the padding/margin of messages; adds a `feedback` state for the `notice` o-message.
- MINOR: [o-share](https://github.com/Financial-Times/o-share) adds support for the internal brand.
- MINOR: [o-spacing](https://github.com/Financial-Times/o-spacing) adds `$o-spacing-names` variable.
- MINOR: [polyfill-library](https://github.com/Financial-Times/polyfill-library) adds new features and improvements thanks to open source contributions. Adds a `Intl.Locale` polyfill (thanks `longlho`); adds `TextEncoder` and `TextDecoder` polyfills (thanks `lpd-au`); adds a `DOMTokenList.prototype.forEach` polyfill (thanks `romainmenke`); rewrites the `Symbol.prototype.description` polyfill to make it work with different `Symbol` implementations (thanks `mhassan1`); improves the error message for feature detection tests (thanks `romainmenke`).
- PATCH: [create-origami-component](https://github.com/Financial-Times/create-origami-component) update `getDataAttributes` to only return namespaced data attributes.
- PATCH: [fticons](https://github.com/Financial-Times/fticons) remove the 0x0x1024x1024 viewport requirement from contributing guide, this is no longer required to support raster graphic scaling via the Image Service.
- PATCH: [o-cookie-message](https://github.com/Financial-Times/o-cookie-message) attempts to improve accessibility by implementing the `dialogue` role; deprecates the `standard` theme option (these styles are output by default).
- PATCH: [o-gallery](https://github.com/Financial-Times/o-gallery) updates the [support status](https://origami.ft.com/specification/v1/manifest/#supportstatus) of `o-gallery` to "dead", due to its age and low (or no) use. Please let us know if your project relies on `o-gallery` still. Note there is a [proposal for a similar carousel component](https://github.com/Financial-Times/origami/issues/23).
- PATCH: [o-grid](https://github.com/Financial-Times/o-grid) updates the bookmarklet (used to overlay the grid on a website for testing) to use the latest version of o-grid.
- PATCH: [o-normalise](https://github.com/Financial-Times/o-normalise) fixes `:focus-visible` focus styles (previously broken in Chrome/Edge 68).
- PATCH: [o-teaser](https://github.com/Financial-Times/o-teaser) registers brand support, to remove the brand support message in the Origami Registry; removes the opinion background from featured "hero image" teasers for desktop-sized viewports.
- PATCH: [o-toggle](https://github.com/Financial-Times/o-toggle) specifies brand support to remove branding warning from the Origami Registry.
- PATCH: [o-visual-effects](https://github.com/Financial-Times/o-visual-effects) corrects custom mixin documentation (another thanks for the contribution, Nick Colley!)
- PATCH: [origami-build-tools](https://github.com/Financial-Times/origami-build-tools) pa11y runs automated accessibility checks against all brands; fixed an issue that prevented demo JS from initialising reliably.
- PATCH: [stylelint-config-origami-component](https://github.com/Financial-Times/stylelint-config-origami-component), adds tests to confirm our linting expectations.
