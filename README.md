# Website

Welcome to the Open Bicycle Simulator website generator. This repository contains all the website pages and information. You can find more of how docusaurus work on the website below. To make changes to the website use the deployment branch of the repository. The Main branch is for backups of the website. Once you commit changes to the deployment branch you will need to build the website again on render or whatever web service you are using. If you have any questions please get in touch with Jack.

Current Website: [https://bicyclesimulator.onrender.com/](https://bicyclesimulator.onrender.com/)

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
