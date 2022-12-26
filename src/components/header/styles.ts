import styled from "styled-components";

export const ContainerHeader = styled.header`
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 5.309375rem; //84.95px;
    height: 2.5rem; //40px;;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem; //12px

    a {
      display: flex;
      align-items: center;
      padding: 0.5rem; //8px
      background-color: ${(props) => props.theme["purple-light"]};
      border-radius: 6px;
      color: ${(props) => props.theme.purple};

      &.shop {
        background: ${(props) => props.theme["yellow-light"]};
      }
    }
  }
`;
