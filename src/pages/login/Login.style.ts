import styled, { keyframes } from 'styled-components';
import {
  MainBackgroundColor,
  WhiteColor,
  StrongMainColor,
  NotiColor,
  BoxShadow,
  mobileQuery,
} from '../../utils/css-utils';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 500px;
  background-color: ${MainBackgroundColor};
  border-radius: 10px;
  box-shadow: ${BoxShadow};
  ${mobileQuery} {
    height: 100vh;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 80%;
`;

export const Logo = styled.img`
  width: 100px;
  margin: 0;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const Title = styled.h1`
  font-size: 40px;
  margin: 0;
  margin-bottom: 3px;
  color: ${StrongMainColor};
`;

const flow = keyframes`
  0% {
    opacity: 0.1;
  }
  100%{
    opacity: 1;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  animation: ${flow} 3s linear infinite;
  margin: 0;
  margin-top: 5px;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin: 0;
`;
export const FormTitle = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin: 0;
  margin-top: 11px;
  margin-bottom: 18px;
`;

export const InputText = styled.input`
  width: 250px;
  margin-bottom: 10px;
  font-size: 1.2rem;
  padding: 8px 10px;
  border-radius: 5px;
  outline: none;
  border: 0.5px gray solid;
`;

export const SignButton = styled.button`
  font-size: 20px;
  background-color: white;
  width: 90px;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 0;
  margin-top: 15px;
  margin-bottom: 15px;
  outline: none;
  border: 0.5px gray solid;
  cursor: pointer;
  transition: all 300ms ease;
  &:hover {
    background-color: ${StrongMainColor};
    color: ${WhiteColor};
  }
`;

export const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SignUpText = styled.span`
  margin-right: 10px;
`;

export const SignUpButton = styled.button`
  font-size: 15px;
  font-weight: bold;
  color: ${NotiColor};
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
