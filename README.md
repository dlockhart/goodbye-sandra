# goodbye-sandra

A Lit-based single page application that takes a Brightspace-themed look at Sandra's last 14 years at D2L...

## Developing

After cloning the repo, run `npm install` to install dependencies.

### Running the Application

During development, start an [es-dev-server](https://open-wc.org/developing/es-dev-server.html) that hosts
the application and supports live reloading.

```shell
npm start
```

To run the static production version of the application:

```
npm run start:build
```

## Deployment

The application will automatically be deployed upon successfuly merges to `master` via Netlify to:
[happy-goldstine-a5ef0d.netlify.app](https://happy-goldstine-a5ef0d.netlify.app/)
