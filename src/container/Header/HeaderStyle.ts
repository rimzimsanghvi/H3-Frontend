import styled from "styled-components/macro";
import ReactLogo from './black.svg';

export const HeaderWrap = styled.header`
  display: flex;
  justify-content: center;
  align-items: stretch;
  position: fixed;
  top: 0;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
  width: 100%;
  height: 60px;
`;

export const LogoLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 10rem;
  padding: 0 1rem;
`;

export const LogoImg = styled(ReactLogo)`
  width: 100%;
`;
