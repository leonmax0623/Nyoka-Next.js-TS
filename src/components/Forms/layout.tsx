import styled from 'styled-components';

const
  check_ok_svg = '/images/check_ok.svg';

export const Label = styled.label`
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  height: 16px;
  color: #A5B0B9;
`;

export const Field = styled.input`
  height: 40px;
  background: #101121;
  border: 1px solid rgba(81, 81, 114, 0.4);
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 40px;
  color: #FFFFFF;
  box-sizing: border-box;
  padding-left: 12px;
  outline: none;
`;

export const Msg = styled.textarea`
  background: #101121;
  border: 1px solid rgba(81, 81, 114, 0.4);
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 40px;
  color: #FFFFFF;
  box-sizing: border-box;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
  resize: none;
`;

const checkOk = `
  &::after {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${check_ok_svg});
    background-size: 8px 6px;
    background-position: center center;
    background-repeat: no-repeat;
  }
`;

export const Checkbox = styled.div<{checked?: boolean}>`
  position: relative;
  width: 14px;
  height: 14px;
  background-color: #3162AC;
  border-radius: 2px;
  cursor: pointer;

  ${({checked}) => checked ? checkOk : ''}
`;

export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Button = styled.div`
  height: 40px;
  background: linear-gradient(270deg, #5694F2 0%, #18C9A1 100%);
  box-shadow: 0px 10px 20px -8px rgba(64, 184, 214, 0.3);
  border-radius: 20px;
  font-weight: 500;
  font-size: 12px;
  line-height: 40px;
  text-align: center;
  color: #FFFFFF;
  text-shadow: 0px 1px 0px rgba(27, 28, 46, 0.2);
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(270deg, #5694F2 0%, #18C9A1 100%);
  }
`;

export const Button2 = styled.div`
  height: 40px;
  background: #3162AC;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  cursor: pointer;
`;

export const Button3 = styled.div`
  height: 40px;
  background: transparent;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 20px;
  font-weight: 500;
  font-size: 12px;
  line-height: 40px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  color: #FFFFFF;
`;

export const SubmitButton = styled.button`
  height: 40px;
  background: linear-gradient(270deg, #5694F2 0%, #18C9A1 100%);
  box-shadow: 0px 10px 20px -8px rgba(64, 184, 214, 0.3);
  border: none;
  border-radius: 20px;
  font-weight: 500;
  font-size: 12px;
  line-height: 40px;
  text-align: center;
  color: #FFFFFF;
  text-shadow: 0px 1px 0px rgba(27, 28, 46, 0.2);
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(270deg, #5694F2 0%, #18C9A1 100%);
  }
`;
