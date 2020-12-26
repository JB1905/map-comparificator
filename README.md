# Map Comparificator

## About

Choose the best map provider for your web app

##### Main Features

- compare maps from different providers (Apple, Bing, Google, Here, Mapbox, OpenStreetMap) side by side
- search for a location to display on maps or get your current location
- resize, drag, open, close map windows & use or create compositions

##### Limitations

- mobile devices (smartphones) are not supported – incorrect behavior using Blueprint & Mosaic Component

[Open Map Comparificator](https://map-comparificator.web.app/)

## Prerequisites

- Yarn

## Setup

##### 1. Clone repo

```sh
git clone https://github.com/JB1905/map-comparificator.git
```

##### 2. Go to directory

```sh
cd /path/map-comparificator
```

### Development

##### 3. Install dependencies

```sh
yarn

# Or use npm
npm i
```

##### 4. Set environment variables

- Edit `.env.example` file
- Rename `.env.example` to `.env.local`

##### 5. Run

```sh
yarn start

# Or use npm
npm start
```

### Production

##### 3. Build image

```sh
docker build -t map-comparificator .
```

##### 4. Run a container with port forwarding

```sh
docker run --rm --env PORT=80 -p 3000:80 map-comparificator
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
- [Firebase](https://firebase.google.com/)
- [Travis CI](https://travis-ci.org/)
- [Docker](https://www.docker.com/)
- [LocationIQ API](https://locationiq.com/)

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
