import styled from "styled-components";

export const Container = styled.div`
  .btn-close {
    color: #037a96;
    font-weight: bold;
  }

  .modal-header {
    display: flex;

    > h5 {
      display: flex;
      justify-content: center;
    }
  }
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  overflow: hidden;
  z-index: 99;
  top: 0;
  left: 0;
  bottom: 0;
  opacity: 95%;
  background-color: #000;
  width: 100%;
  height: 100%;
`;
