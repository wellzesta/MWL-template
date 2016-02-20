# MWL-template

## About

This README outlines the details of collaborating on this Ember application.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/). Optional, but recommended: [GitHub desktop](https://desktop.github.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/wellzesta/MWL-components.git`
* `cd MWL-components`
* Install server-side (node) components: `npm install`
* Install client-side components: `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code. Try `ember help generate` for more details. Pods are enabled by default. The pod structure organizes routes and temples together, as done with ember components.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Using

**MWL-components** (this repository) comes pre-baked with 

* SASS `npm install --save-dev ember-cli-sass` See [ember-cli-sass](https://www.npmjs.com/package/ember-cli-sass)
* Semantic-UI `ember install semantic-ui-ember` [semantic-ui-ember](https://www.npmjs.com/package/semantic-ui-ember)
* Firebase toolbelt ``

#### Semantic-UI

MyWellzestaLife uses the [Semantic-UI](http://semantic-ui.com/) framework that provides responsive view and a rich widget toolset. And the default theme looks great!

#### Firebase

Firebase offers web app hosting and a backend noSQL document store--MongoDB. **MWL-components** is pre-configured with all the tools needed to connect to firebase. Do the following:

* Establish a [firebase account](https://www.firebase.com/). Suggestion: Choose "sign up with google".
* In your firebase dashboard create a "new app". Copy the `<app-name>`
* in **config/environment.js** edit the line

> firebase: 'https://`<app-name>`.firebaseIO.com',

* in **firebase.json** edit the line

>   "firebase": "`<app-name>`",

### Deploy

* `firebase deploy`
* TODO: May need to set global firebase login credentials


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


