import styled, { keyframes, css } from 'styled-components';

export const WeaponsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WeaponsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  div {
    border: 1px solid gray;
  }
`;

export const WeaponInfo = styled.div`
`;

/*export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;*/
