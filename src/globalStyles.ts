import styled from "styled-components";
import { randomColor } from "./helpers/RandomColor";

export const Center = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PageContainer = styled.div`
  background: ${randomColor(20)};
  color: white;
  width: 100%;
  height: 100%;
`;

export const FillParent = styled.div`
  width: 100%;
  height: 100%;
`;
