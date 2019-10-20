# Optimizing your Angular apps
Hi there! :wave: My name is [Taylor LaMar](https://taylorlamar.com) and I'm a software develper. This repo was made specifically for a talk on optimizing your Angular application by utilizing [on-push change detection](https://angular.io/api/core/ChangeDetectionStrategy), [Immutable.js](https://immutable-js.github.io/immutable-js/docs/#/), and [pure pipes](https://angular.io/guide/pipes#pure-pipes).

## Prerequisites
To get the most out of this repo, you'll need a few things:
1. [Node](https://nodejs.org/en/download/)
2. NPM (shipped with Node)
3. [Angular](https://cli.angular.io)

## Using this repo
You can download or clone this repostory and expore the code.  

If you're using Git, you can do the following commands:
1. `git clone https://github.com/TaylorLaMar/optimize-ng-app.git`
2. `cd optimize-ng-app`
3. `ng s`

Each chapter of this talk has its crresponding branch.
1. `pre-optimization`: The starter code, with no optimizations made to it... yet.

2. `intro-immutable`: Using Immutable.js and on-push change detection, we significantly increase the performance of our application.

3. `split-components`: Here, we split the `PetListComponent` into two, more well-defined components - the `NameInputComponent` and `ListComponent`.

4. `pure-pipes`: Angular's pure pipes allow us to stop redundant computing after our app initializes.

5. `memoization`: [Lodash](https://lodash.com/docs) is a great utility library for JavaScript, and one of the functionalities it offers is memoization using a [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap). We use the `memo-decorator` package to attach a TypeScript decorator to our Fibonacci number generator.

If you'd like to navigate to another branch, `git checkout THE_BRANCH_NAME`, i.e. `git checkout pre-optimization`.

Sponsored by [LaMar Software](https://lamarsoftware.io)
