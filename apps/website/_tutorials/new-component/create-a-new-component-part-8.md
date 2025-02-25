---
title: Create A New Origami Component - Part 8 Documentation
description: A step-by-step tutorial which teaches you how to build and deploy a new Origami component.
cta: Learn how to create an Origami component
collection_listing_display: false

# Redirect from legacy URLs
redirect_from:
  - /docs/tutorials/create-a-new-component-part-7/
---

# {{page.title}}

The "Create A New Origami Component" tutorial is split into nine parts and is intended to be followed sequentially from start to finish:
1. [Intro & Boilerplate](/documentation/tutorials/create-a-new-component-part-1/)
2. [Base Styles](/documentation/tutorials/create-a-new-component-part-2/)
3. [Themes & Brands](/documentation/tutorials/create-a-new-component-part-3/)
4. [Demos](/documentation/tutorials/create-a-new-component-part-4/)
5. [JavaScript](/documentation/tutorials/create-a-new-component-part-5/)
6. [Storybook](/documentation/tutorials/create-a-new-component-part-6/)
7. [Testing](/documentation/tutorials/create-a-new-component-part-7/)
8. Documentation
9. [Component Lifecycle](/documentation/tutorials/create-a-new-component-part-9/)

In part eight we will add documentation to our component. With good documentation we can save people time and frustration by making our component as easy to use as possible. Thorough documentation will also help future contributors to our new component.

## Tone & language

People from various backgrounds across the Financial Times use and contribute to Origami components, so its important to consider communication in documentation carefully.

To help write clear documentation there are [Origami tone & language principles](/documentation/principles/tone-and-language/). For example we work as a team so use ["we" over "I"](/documentation/principles/tone-and-language/#prefer-we-to-i); for clarity and to express responsibility we use an [active voice](/documentation/principles/tone-and-language/#use-the-active-voice) in component documentation; and as we work with people of different nationalities and backgrounds we [avoid metaphors or colloquialisms](/documentation/principles/tone-and-language/#avoid-metaphors-or-colloquialisms).

Read more on the [tone & language principles page](/documentation/principles/tone-and-language/).

## Where Components Are Documented

Origami components are documented in four key ways. We have already seen some examples of these:
- The `README.md` file.
- The `origami.json` manifest file.
- SassDoc comments (for components with Sass).
- JSDoc comments (for components with JavaScript).
- Storybook documentation (for components with Storybook).

Lets review each of these types of documentation for our `o-example` component.

## Readme

Perhaps the most important part of component documentation is the `README.md` file, found in the root directory. This is presented in the Origami Registry for each component, for example see the [o-table readme](https://registry.origami.ft.com/components/o-table/readme).

In our `o-example` component there is already a `README.md` with boilerplate content. The readme includes basic component information such as:
- name
- description
- intended usecase
- intended behaviour

The readme goes on to provide technical details of how to use the component:
- Markup - [e.g. how to apply themes](https://registry.origami.ft.com/components/o-buttons@6.0.15/readme?brand=core#themes).
- JavaScript - e.g. what [options are available](https://registry.origami.ft.com/components/o-table@8.1.2/readme?brand=core#javascript), and how to [perform common tasks](https://registry.origami.ft.com/components/o-forms@8.3.10/readme?brand=core#state).
- Sass - e.g. where and why to use [Sass mixins](https://registry.origami.ft.com/components/o-typography@6.4.3/readme?brand=core#sass)

The readme should also contain information about hot to do:
- Troubleshooting
- Contributing
- Migration

And concludes with general information:
- Contact
- Licence

For more complex or novel components there may be additional sections such as for troubleshooting and contributing to the component. Components which have released major changes may also include a migration section which points to a `MIGRATION.md` file to help users upgrade from one version of a component to the next.

Reference the `README.md` generated by `npm run create-component` along with examples from other components to write your own readme. For our component we don't need any special troubleshooting or contributing guides, so we can delete this section from readme. We also haven't released multiple major versions yet so can delete the migration guide section for now.

<figure>
	<img alt="" src="/assets/images/tutorial-new-component/hello-world-demo-16-docs.png" />
	<figcaption>
        The readme is shown in the Origami registry. This image shows the <a href="https://registry.origami.ft.com/components/o-table@8.1.2/readme?brand=core">o-table readme</a>.
	</figcaption>
</figure>

The readme of a component is thorough but risks becoming verbose so Origami components also document Sass and JavaScript <abbr title="application programming interfaces">apis</abbr> separately. This allows more detailed <abbr title="application programming interface">api</abbr> information that the readme can link to. It also provides engineers who are already familiar with a component a reference, to quickly look up an <abbr title="application programming interface">api</abbr>.

## SassDoc

To document Sass functions, mixins, and variables, Origami uses [SassDoc](http://sassdoc.com/). A SassDoc comment comes before the Sass to document. It uses three forward slashes and has a number of [annotations](sassdoc.com/annotations/). Its easier to see with an example. Let's add SassDoc comments to our undocumented `oExampleAddTheme` mixin we created earlier:

<pre><code class="o-syntax-highlight--scss">// src/scss/_mixins.scss

/// Output a css modifier class for an o-example theme.
/// This may be an existing theme, or a new custom them.
/// @param {String} $name - The name of the theme to output.
/// @param {Map} $opts [null] - A map of theme options to create a custom theme. See the examples and README for full details.
/// @example scss - Output a custom theme modifier class "o-example--my-custom-theme".
///     @include oExampleAddTheme('my-custom-theme', (
///     	'background-color': oColorsByName('white'),
///     	'text-color': oColorsByName('crimson'),
///     	'button-color': oColorsByName('crimson'),
///     ));
/// @example scss - Output a default o-example theme modifier class "o-example--inverse".
///     @include oExampleAddTheme('inverse');
/// @access public
@mixin oExampleAddTheme($name, $opts: null) {
    // theme sass here from before, see part 3
}
</code></pre>

Above we give a [description](http://sassdoc.com/annotations/#description) of the mixins usecase. We use the [`@param`](http://sassdoc.com/annotations/#parameter) annotation to document the parameters of our mixin. Note that SassDoc does not provide a way to document each property of the `$opts` map. Instead we use the [`@example`](http://sassdoc.com/annotations/#example) annotation and readme to compensate. Finally we use the [`@access`](http://sassdoc.com/annotations/#access) annotation to indicate the mixin is public and can be included by component users.

<figure>
	<img alt="" src="/assets/images/tutorial-new-component/hello-world-demo-17-docs.png" />
	<figcaption>
        The SassDoc is shown in the Origami registry. This image shows <a href="https://registry.origami.ft.com/components/o-table@8.1.2/sassdoc?brand=core">o-table SassDocs</a>.
	</figcaption>
</figure>

## JSDoc

Origami components use [JSDoc comments](https://jsdoc.app/about-getting-started.html) to document JavaScript. For example see the existing JSDoc for the `init` method of our `o-example` component, which was generated for us by the `npm run create-component` command:

<pre><code class="o-syntax-highlight--js">// src/js/example.js

/**
 * Initialise o-example component.
 * @param {(HTMLElement|String)} rootElement - The root element to intialise the component in, or a CSS selector for the root element
 * @param {Object} [options={}] - An options object for configuring the component
 */
static init (rootEl, opts) {
	// init js here
}</code></pre>

Similar to SassDoc, JSDoc uses annotations such as `@param` to document parameters. For more annotations see the [JSDoc documentation](https://jsdoc.app). As with Sass, the [`@access`](https://jsdoc.app/tags-access.html) annotation may be used but Origami components consider JavaScript methods which begin with an underscore as private, and those without as public.

<figure>
	<img alt="" src="/assets/images/tutorial-new-component/hello-world-demo-18-docs.png" />
	<figcaption>
        The JSDoc is shown in the Origami registry. This image shows <a href="https://registry.origami.ft.com/components/o-table@8.1.2/jsdoc?brand=core">o-table JSDoc</a>.
	</figcaption>
</figure>

## Origami Manifest

The `origami.json` manifest file also contributes to the documentation of a component. As we have seen in previous parts of this tutorial `origami.json` includes a component name, description, keywords, demos, demo descriptions, required polyfills, support contacts, maintenance status, and more information which is displayed in the [Origami Registry](https://registry.origami.ft.com/components/).

It is important to keep `origami.json` up to date throughout the lifecycle of the component.

## Part Eight: Component Lifecycle

In this part we learnt:

- Component documentation follows [tone & language principles](/documentation/principles/tone-and-language/).
- What's in a components readme.
- That we can document Sass apis with Sassdoc.
- That we can document JavaScript apis with JSDoc.
- That we can storybook demos.
- The role of `origami.json` in documentation.

In the next part we will publish our component and discuss the lifecycle of a published component. [Continue to part nine](/documentation/tutorials/create-a-new-component-part-9).
