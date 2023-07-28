import styled from "styled-components";

export const CardContainer = styled.li`
  background-color: ${(props) => props.theme.card};
  width: 256px;
  height: 310px;
  border-radius: 6px 36px 6px 36px;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      margin-top: -22px;
    }

    div {
      margin-top: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;

      span {
        border-radius: 100px;
        text-transform: uppercase;
        height: 21px;
        padding: 4px 8px;
        background: ${(props) => props.theme["yellow-light"]};
        color: ${(props) => props.theme["yellow-dark"]};
        font-family: Roboto;
        font-weight: 700;
        font-size: 10px;
        line-height: 130%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 16px;

    p {
      font-family: Roboto;
      font-weight: 700;
      font-size: 20px;
      line-height: 130%;
      margin-bottom: 10px;
    }

    small {
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      text-align: center;
      padding: 0px 20px;
      margin-bottom: 33px;
      color: ${(props) => props.theme.label};
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 20px;

    span {
      font-family: Roboto;
      color: ${(props) => props.theme.text};
      font-weight: 800;
      font-size: 24px;
      line-height: 130%;
      max-width: 68px;
      width: 68px;

      small {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        margin-right: 4px;
      }
    }

    div {
      width: 72px;
      height: 38px;
      border-radius: 6px;
      padding: 8px;
      margin-left: 23px;
      display: flex;

      align-items: center;
      justify-content: center;

      background: #e6e5e5;
      margin-right: 8px;

      button {
        border: none;
        padding: 4px 6px;
        color: #8047f8;
        background: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        &.price {
          color: #000;
          cursor: default;
        }
      }
    }

    button {
      width: 38px;
      height: 38px;
      background: #4b2995;
      border-radius: 6px;
      border: none;
    }
  }
`;
