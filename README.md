# Agent Notes Plugin
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

This Twilio Flex Plugin enables your agents to take notes when they are chatting with a customer. This is an introductory plugin where the notes are stored locally for your agents.

To learn more about developing plugins on your Flex instance, refer to the [getting started guide](https://www.twilio.com/docs/flex/quickstart/getting-started-plugin).

## Project Structure

This project is based on a sample plugin developed using the [Flex Plugin Builder](https://github.com/twilio/flex-plugin-builder).

## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com) installed.

Afterwards, install the dependencies by running `npm install`:

```bash
git clone https://github.com/twilio-labs/plugin-agent-notes
cd plugin-agent-notes
npm install
```

## Development

In order to develop locally, you can use the Webpack Dev Server by running:

```bash
twilio flex:plugins:start
```

This will automatically start up the Webpack Dev Server and open the browser for you. Your app will run on `http://localhost:3000`. If you want to change that you can do this by setting the `PORT` environment variable:

```bash
PORT=3001 twilio flex:plugins:start
```

When you make changes to your code, the browser window will be automatically refreshed.

Type `twilio flex:plugins:start --help` to get more detailed information about the command.

## Deploy and Release Plugin

When you are ready to deploy your plugin, in your terminal run:

```bash
twilio flex:plugins:deploy --major --changelog "Adding Agent Notes" --description "Ability for agents to take notes"
```

This will upload your plugin to Flex. After a deployment, your plugin is not yet enabled for all your users on your Flex application. You need to run the release command after the deploy to enable any changes:


```bash
flex:plugins:release --name "Plugin Release-Agent Notes" --description "Enabling plugin agent notes" --plugin plugin-agent-notes@latest
```

For more details on deploying your plugin, refer to the [deploying your plugin guide](https://www.twilio.com/docs/flex/developer/plugins/cli/deploy-and-release).

Note: Common packages like `React`, `ReactDOM`, `Redux` and `ReactRedux` are not bundled with the build because they are treated as external dependencies, so the plugin will depend on Flex to provide them globally.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/ahcai"><img src="https://avatars.githubusercontent.com/u/4912483?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alice Cai</b></sub></a><br /><a href="https://github.com/twilio-labs/plugin-agent-notes/issues?q=author%3Aahcai" title="Bug reports">🐛</a> <a href="https://github.com/twilio-labs/plugin-agent-notes/commits?author=ahcai" title="Code">💻</a> <a href="https://github.com/twilio-labs/plugin-agent-notes/commits?author=ahcai" title="Documentation">📖</a> <a href="#design-ahcai" title="Design">🎨</a> <a href="#question-ahcai" title="Answering Questions">💬</a></td>
    <td align="center"><a href="https://github.com/ktalebian"><img src="https://avatars.githubusercontent.com/u/2308915?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kousha Talebian</b></sub></a><br /><a href="https://github.com/twilio-labs/plugin-agent-notes/issues?q=author%3Aktalebian" title="Bug reports">🐛</a> <a href="https://github.com/twilio-labs/plugin-agent-notes/commits?author=ktalebian" title="Code">💻</a> <a href="https://github.com/twilio-labs/plugin-agent-notes/commits?author=ktalebian" title="Documentation">📖</a> <a href="#design-ktalebian" title="Design">🎨</a> <a href="#question-ktalebian" title="Answering Questions">💬</a></td>
    <td align="center"><a href="https://github.com/betson"><img src="https://avatars.githubusercontent.com/u/4079975?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ben</b></sub></a><br /><a href="https://github.com/twilio-labs/plugin-agent-notes/issues?q=author%3Abetson" title="Bug reports">🐛</a> <a href="https://github.com/twilio-labs/plugin-agent-notes/commits?author=betson" title="Code">💻</a> <a href="https://github.com/twilio-labs/plugin-agent-notes/commits?author=betson" title="Documentation">📖</a> <a href="#design-betson" title="Design">🎨</a> <a href="#question-betson" title="Answering Questions">💬</a></td>
    <td align="center"><a href="https://www.ruma.io/"><img src="https://avatars.githubusercontent.com/u/16043271?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ruma</b></sub></a><br /><a href="https://github.com/twilio-labs/plugin-agent-notes/issues?q=author%3Aruma" title="Bug reports">🐛</a> <a href="https://github.com/twilio-labs/plugin-agent-notes/commits?author=ruma" title="Code">💻</a> <a href="https://github.com/twilio-labs/plugin-agent-notes/commits?author=ruma" title="Documentation">📖</a> <a href="#design-ruma" title="Design">🎨</a> <a href="#question-ruma" title="Answering Questions">💬</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!