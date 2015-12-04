# How to use this repository

This repository is meant to accompany the workshop "Build APIs in Loopback" from
IBM/Strongloop.

Take a look at the tags (`git tag -n1` or using the "Branch" selector if you're
looking at this on github), there is one for each step.

:point_right: **You don't need this repository to follow the exercises**
:point_left: it is provided primarily for reference if you get stuck.

If you *do* want to jump to a certain point in the excercises, clone this repo
and checko out the appropriate step.

```
git clone git@github.com:Sequoia/midwestjs-exercises.git
git checkout [tagname]
```

To jump to, for example, step 2, run the following:

```
git stash # to stash any current changes you may have made
git checkout step-2
```

## `additional_steps.md`
Some steps require actions outside the codebase itself, for example setting up
a mongodb database. In these cases, `additional_steps.md` will have the required
actions outlined therein.

## FAQ
:question: Do I have to follow along with these tags/steps?

:point_right: No you do not! These are just here in case you get stuck & want to
jump back to a working version, or if you want to compare with the "official"
solutions

:question: Do I have to make my datastore configs (user, pass, etc.) match the configs here?

:point_right: No, edit at will!

:question: Must I my own mongo server?

:point_right: No again! Try <https://mongolab.com/> if you don't want to run
local `mongod`. (This will change the setup steps slightly, mostly making them
easier.)

:question: Do I *absolutely need* both mysql and mongodb for these exercises?

:point_right: Nope! The examples here use mongo & mysql as data stores, but one
big advantage of Loopback is that models are (mostly) completely decoupled from
datastores. If you want to back all models in mysql, or mongo, or another
Loopback supported datastore, feel free!
