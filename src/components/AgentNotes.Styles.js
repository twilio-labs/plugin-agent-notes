import styled from 'react-emotion';

export const AgentNotesStyles = styled('div')`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-left: solid 1px ${(props) => props.theme.colors.base4};

  .card {
    margin: 10px;
    height: 100%;
    width: 100%;
    border: solid 1px ${(props) => props.theme.colors.focusColor};
    border-radius: 0px;
    overflow-y: scroll;
    background: ${(props) => props.theme.colors.base1};
  }
  .textarea {
    margin: 10px;
    background: transparent;
    resize: none;
    border: 0 none;
    width: 100%;
    max-width: 97%;
    outline: none;
    height: 100%;
    font-family: Open Sans;
    color: ${(props) => props.theme.colors.base11};
  }
`;
