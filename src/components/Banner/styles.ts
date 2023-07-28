import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  padding: 22px;
  gap: 1.25rem; //20px;

  div {
    width: 50%;
    padding: 10px;

    h1 {
      font-family: "Baloo 2";
      font-style: normal;
      font-weight: 800;
      font-size: 3rem; //48px
      line-height: 100%;
      margin-bottom: 30px;
    }

    span {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 1.25rem; //20px;
      line-height: 130%;

      color: ${(props) => props.theme.subtitle};
      font-stretch: 100;
    }

    ul {
      margin-top: 33px;
      list-style: none;
      display: flex;
      flex-wrap: wrap;

      li {
        width: 50%;
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 20px;

        div {
          width: 2.375rem; //38px;
          height: 2.375rem; //38px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;

          &.darkyellow {
            background: ${(props) => props.theme["yellow-dark"]};
          }
          &.silver {
            background: ${(props) => props.theme.silver};
          }
          &.yellow {
            background: ${(props) => props.theme.yellow};
          }
          &.purple {
            background: ${(props) => props.theme.purple};
          }
        }
      }
    }

    & + div {
      display: flex;
      justify-content: center;
      align-items: flex-start;

      img {
        width: 29.75rem; //476
        height: 22.5rem; //360
      }
    }
  }
`;
