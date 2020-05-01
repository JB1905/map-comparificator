# Map Comparificator

## About
Choose the best map provider for your web app

- compare maps from different providers (Apple, Bing, Google, Here, Mapbox, OpenStreetMap) side by side
- search for a location to display on maps or get your current location
- resize, drag, open, close map windows & use or create compositions

[Open Map Comparificator](https://map-comparificator.web.app/)

## Prerequisites
- Yarn or NPM
- Node.js

## Setup
##### 1. Clone repo
```
git clone https://github.com/JB1905/map-comparificator.git
```

##### 2. Go to directory
```
cd map-comparificator
```

##### 3. Install dependencies
`yarn` or `npm i`

##### 4. Set environment variables
- Edit `.env.example` file
- Rename `.env.example` to `.env.local`

##### 5. Run
`yarn start` or `npm start`

##### 6. Deploy to Firebase
- Set config in `.firebaserc`
- run `firebase deploy`

### Production
```bash
# Build image
> docker build -t map-comparificator .

# Run a container with port forwarding
> docker run --rm --env PORT=80 -p 3000:80 map-comparificator
```

## Build with
- React
- Redux
- Redux Thunk
- Redux Persist
- TypeScript
- Blueprint
- Firebase
- Travis CI
- Docker
- Jest
- LocationIQ API

## License
This project is licensed under the MIT License © 2020-present Jakub Biesiada
