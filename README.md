# Blockstack assignment – @kyranjamie

This assignment demonstrates a prototype application allowing users to sign their support for petitions.

## Getting started

```sh
yarn && yarn start
``` 

## Scope

Simple app allowing Blockstack IDs to auth and show theirr support for petitions.

## Implementation

Used `create-react-app` to generate a boilerplate application, opting to use TypeScript. I'm much more familiar with Angular but, given Blockstack uses React, it seemed the more appropriate choice.

I utilised the [Ant Design component library](https://ant.design/). 

Some decisions were made to limit the scope of this app. For example, I decided to keep state within presentational component, namely `src/components/petitions.tsx` and not use a state management library (redux).

The interaction with Blockstack in this app is user auth. My initial plan was to use Gaia storage to persist petitions a given user has signed. Judging by the docs, this should be possible by either creating a name-prefixed json file for each petition and reading through the file list, or appending/overwriting a single file, and rendering its contents.

I ran into some issues setting up Gaia. Specifially, [step 6 of this guide](https://docs.blockstack.org/storage/hello-hub-choice.html), I was never able to reach the option where you configure the hub (owing to the lack of a "deny" option when either using an existing or new ID). Thus I was unable to persist any data. Instead, the app uses mocked data.
