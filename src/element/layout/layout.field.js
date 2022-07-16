import styled from "styled-components";
import img from "../../assets/img/165677.png";

export const FieldLayout = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  :before {
    content: "";
    position: absolute;
    min-width: 100vw;
    height: 100vh;
    top: 0;
    left: 35%;
    z-index: -1;
    background-image: linear-gradient(
        45deg,
        rgba(255, 255, 255, 1) 45%,
        rgba(255, 255, 255, 0.7) 100%
      ),
      url("${img}");
    transform: scaleX(1);
    background-size: 65% 100%;
  }
`;
