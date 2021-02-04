import React from 'react';
import { FlexPlugin, loadCSS } from 'flex-plugin';

import AgentNotes from './components/AgentNotes';

const PLUGIN_NAME = 'AgentNotesPlugin';

export default class AgentNotesPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    loadCSS('https://rose-gaur-9610.twil.io/assets/styles.css');

    flex.AgentDesktopView.Panel2.Content.replace(<AgentNotes key="agent-notes" />);
  }
}
