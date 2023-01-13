import styled from "styled-components";

export const SuccessContainer = styled.section`
  display: flex;
  width: 100%;

  justify-content: space-evenly;

  img {
    width: 492px;
    height: 293px;
    margin-top: 90px;
  }

  article {
    header {
      strong {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        line-height: 130%;
        color: ${(props) => props.theme["yellow-dark"]};
      }

      span {
        display: block;
        color: ${(props) => props.theme.subtitle};
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 130%;
      }
    }

    ul {
      border-radius: 6px 36px 6px 36px;
      border: 1px solid #8047f8;
      padding: 40px;
      width: 434px;
      height: 270px;
      margin-top: 40px;
      margin-left: 50px;

      li {
        list-style: none;
        display: flex;
        gap: 12px;
        align-items: center;

        & + li {
          margin-top: 32px;
        }

        .icon {
          width: 32px;
          height: 32px;
          padding: 8px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;

          &.purple {
            background: ${(props) => props.theme.purple};
          }

          &.yellow {
            background: ${(props) => props.theme.yellow};
          }

          &.yellow-dark {
            background: ${(props) => props.theme["yellow-dark"]};
          }
        }

        .info-plus {
          span {
            display: block;
            font-family: "Roboto";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            color: ${(props) => props.theme.silver};

            strong {
              font-size: 15px;
            }
          }
        }
      }

      li:last-child {
        margin-bottom: 40px;
      }
    }
  }
`;
