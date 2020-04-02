# Agent Notes Plugin

This Twilio Flex Plugin enables your agents to take notes when they are on-call or chatting with a customer. This is an introductory plugin where the notes are stored locally for your agents.

To learn more about developing plugins on your Flex instance, refer to the [getting started guide](https://www.twilio.com/docs/flex/quickstart/getting-started-plugin).

## Project Structure

This project is based on a sample plugin developed using the [Flex Plugin Builder](https://github.com/twilio/flex-plugin-builder).

## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com) installed.

Afterwards, install the dependencies by running `npm install`:

```bash
cd 

# If you use npm
npm install
```

## Development

In order to develop locally, you can use the Webpack Dev Server by running:

```bash
npm start
```

This will automatically start up the Webpack Dev Server and open the browser for you. Your app will run on `http://localhost:3000`. If you want to change that you can do this by setting the `PORT` environment variable:

```bash
PORT=3001 npm start
```

When you make changes to your code, the browser window will be automatically refreshed.

## Deploy

When you are ready to deploy your plugin, in your terminal run:

```bash
npm run deploy
```

This will publish your plugin as a Private Asset that is accessible by the Functions & Assets API. If you want to deploy your plugin as a Public Asset, you may pass --public to your deploy command:

```bash
npm run deploy --public
```

For more details on deploying your plugin, refer to the [deploying your plugin guide](https://www.twilio.com/docs/flex/plugins#deploying-your-plugin).

Note: Common packages like `React`, `ReactDOM`, `Redux` and `ReactRedux` are not bundled with the build because they are treated as external dependencies so the plugin will depend on Flex to provide them globally.