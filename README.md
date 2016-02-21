
# MWL-template

## About

This README outlines the details of collaborating on this Ember application. MWL-template (this repository) provides a scaffold for MWL addons. Contributors can fork this repository, create a development branch and issue a pull request. The wiki for MWL-template documents the structure of the scaffold and instructions on how to collaborate. The MWL-template source code itself contains working examples of code.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/). Optional, but recommended: [GitHub desktop](https://desktop.github.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/wellzesta/MWL-template.git`
* `cd MWL-template`
* `npm install` installs server-side (node) components
* `bower install` installs client-side components

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

This repository comes pre-baked with 

* default use of pods implemented thru `"usePods": true` in **.ember-cli**. Please use the pod structure!!!!
	* Ref: [Program with Erik](http://www.programwitherik.com/ember-pods/)
* sass support
	* Installed using: `npm install --save-dev ember-cli-sass`. 
	* Root-level sass is in **app/styles/app.scss**. 
	* See [ember-cli-sass](https://www.npmjs.com/package/ember-cli-sass) for usage.
* Semantic-UI CSS/JS framework providding grid and widgets (c.f. boostrap, foundation)
	*  Installed using: `ember install semantic-ui-ember` 
	*  See [semantic-ui-ember](https://www.npmjs.com/package/semantic-ui-ember) for usage.
	*  Goto [http://localhost:4200/semantic/](http://localhost:4200/semantic/) for working examples.  
* Firebase toolbelt ``
* Content security policy: "disabled"

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
  * 


