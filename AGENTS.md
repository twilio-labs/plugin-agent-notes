# Agent Notes Plugin

This Twilio Flex Plugin enables your agents to take notes when they are chatting with a customer, with notes stored locally in the browser's session storage.

## Commands

```bash
# Install
npm install

# Run
twilio flex:plugins:start

# Deploy
twilio flex:plugins:deploy --major --changelog "Adding Agent Notes" --description "Ability for agents to take notes"

# Release (after deploy)
twilio flex:plugins:release --name "Plugin Release-Agent Notes" --description "Enabling plugin agent notes" --plugin plugin-agent-notes@latest

# Test
npm test

# Lint
npm run lint
```

## Environment Variables

This plugin requires a configured Twilio Flex account. Set up your Twilio CLI profile before running:

```bash
twilio login
```

Your Twilio Account SID and Auth Token will be used automatically by the Twilio CLI.

| Variable | Where to find | Format |
| -------- | ------------- | ------ |
| `TWILIO_ACCOUNT_SID` | [Console](https://console.twilio.com) homepage | Starts with `AC` |
| `TWILIO_AUTH_TOKEN` | Console homepage → click to reveal | 32-char string. Treat as a password. |

## Project Structure

```
src/
  AgentNotesPlugin.js       # Main plugin entry point
  components/
    AgentNotes.jsx          # Note-taking UI component
    AgentNotes.Styles.js    # Styled components
  index.js                  # Plugin registration
public/
  appConfig.js              # Flex configuration
```

## Agent Boundaries

**Always:**
- Confirm the user has Twilio CLI installed and authenticated via `twilio login` before running any commands
- Confirm the user has an active Twilio Flex account before attempting to deploy
- Use `twilio flex:plugins:start` to run locally - it automatically opens the browser
- Verify the plugin loads in the Flex UI before proceeding with deployment

**Never:**
- Run deploy or release commands without user confirmation
- Skip the `twilio login` authentication step
- Modify the plugin code without explicit user request

## Verify It's Working

1. Run `twilio flex:plugins:start` - the browser will open automatically to your Flex instance
2. Log in to Flex with your agent credentials
3. Accept an incoming task (chat, voice, etc.)
4. Look for the "Agent Notes" panel on the right side of the agent desktop (Panel 2)
5. Type notes in the text area - they should persist during the session and be saved to localStorage

## Twilio Resources

- [Twilio Console](https://console.twilio.com) — credentials, Flex configuration
- [Twilio Flex Developer Documentation](https://www.twilio.com/docs/flex)
- [Flex Plugin Builder](https://www.twilio.com/docs/flex/developer/plugins)
- [Flex UI Components](https://www.twilio.com/docs/flex/developer/ui/components)
- [Twilio CLI Flex Plugin Commands](https://www.twilio.com/docs/flex/developer/plugins/cli)
