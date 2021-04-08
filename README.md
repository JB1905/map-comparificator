# Map Comparificator (WIP)

## About

Choose the best map provider for your web app

### Main Features

- compare maps from different providers (Apple, Bing, Google, Here, Mapbox, OpenStreetMap) side by side
- search for a location to display on maps or get your current location
- resize, drag, open, close map windows & use or create compositions

### Limitations

- mobile devices (smartphones) are not supported – incorrect behavior using Blueprint & Mosaic Component

[Open Map Comparificator](https://map-comparificator.web.app/)

## Prerequisites

- Node.js
- npm/Yarn
- Apple Maps token
- Bing Maps token
- Google Maps token
- Mapbox token
- Here Maps app ID & app code
- LocationIQ API token

## Setup

### 1. Clone repo

```sh
git clone https://github.com/JB1905/map-comparificator.git
```

### 2. Go to directory

```sh
cd /path/map-comparificator
```

### 3. Set environment variables

- Copy `.env.local.example` file to `.env.local`
- Set environment variables in `.env.local`

### Development

#### 4. Install dependencies

```sh
yarn

# Or use npm
npm i
```

#### 5. Run

```sh
yarn start

# Or use npm
npm start
```

### Production

#### 4. Build image

```sh
docker build -t map-comparificator .
```

#### 5. Run a container with port forwarding

```sh
docker run --rm -p 3000:3000 map-comparificator
```

## Build with

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk/)
- [Redux Persist](https://github.com/rt2zz/redux-persist/)
- [TypeScript](https://www.typescriptlang.org/)
- [Blueprint](https://blueprintjs.com/)
- [React Mosaic](https://github.com/nomcopter/react-mosaic/)
- [React i18next](https://github.com/i18next/react-i18next/)
- [Cypress](https://www.cypress.io/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Firebase](https://firebase.google.com/)
- [Travis CI](https://travis-ci.com/)
- [Docker](https://www.docker.com/)
- [LocationIQ API](https://locationiq.com/)

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
