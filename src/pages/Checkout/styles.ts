import styled from "styled-components";

export const CheckoutConatiner = styled.form`
  width: 1160px;
  gap: 32px;
  display: flex;

  .title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
  }

  section {
    width: 640px;
    border-radius: 6px;
  }

  article {
    margin-top: 15px;

    header,
    main,
    footer {
      background: #f3f2f2;
      padding: 40px;
    }

    header {
      padding-bottom: 0px;
      display: flex;
      gap: 8px;

      div {
        strong,
        span {
          display: block;
        }

        strong {
          margin-bottom: 2px;
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 130%;
          color: #403937;
        }

        span {
          /* Text/Regular S */

          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 130%;

          color: #574f4d;
        }
      }
    }

    main {
      padding-top: 0px;
      padding-top: 32px;

      div {
        margin-bottom: 16px;
        display: flex;
        gap: 12px;
      }

      input {
        width: 200px;
        height: 42px;
        padding: 12px;
        border-radius: 4px;
        background: #eeeded;
        border: 1px solid #e6e5e5;
      }

      .street-name {
        width: 100%;
        input {
          width: 100%;
        }
      }

      .street-number {
        input {
          & + input {
            flex: 1;
          }
        }
      }

      .street-city {
        input {
          & + input {
            flex: 1;

            &.uf {
              flex: 0;
              width: 60px;
            }
          }
        }
      }
    }

    footer {
      margin-top: 12px;
      margin-bottom: 22px;

      .header {
        padding-bottom: 0px;
        display: flex;
        gap: 8px;

        div {
          strong,
          span {
            display: block;
          }

          strong {
            margin-bottom: 2px;
            font-family: "Roboto";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            color: #403937;
          }

          span {
            /* Text/Regular S */

            font-family: "Roboto";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 130%;

            color: #574f4d;
          }
        }
      }

      .footer {
        margin-top: 15px;
        display: flex;
        gap: 12px;

        button {
          flex: 1;
          padding: 16px;
          border-radius: 6px;
          background: #e6e5e5;
          color: #574f4d;
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 160%;
          text-transform: uppercase;
          border: none;
          display: flex;
          align-items: center;
          justify-content: first baseline;
          gap: 10px;
          border: 1px solid #e6e5e5;

          &.actived {
            border: 1px solid #8047f8;
            background-color: #ebe5f9;
          }
        }
      }
    }
  }

  .list {
    width: 448px;
    min-width: 448px;

    main {
      background: #f3f2f2;
      padding: 40px;
      padding-bottom: 10px;
      border-radius: 6px 44px;
      margin-top: 14px;
    }

    .resume {
      margin-bottom: 24px;

      div {
        display: flex;
        justify-content: space-between;

        & + div {
          margin-top: 12px;
        }
      }

      .default {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        color: #574f4d;
      }

      .total {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 130%;
      }
    }

    .confirm {
      width: 100%;
      padding: 12px 8px;
      background: #dbac2c;
      border-radius: 6px;
      border: none;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 160%;
      color: #ffffff;
    }

    ul {
      list-style: none;
      margin-bottom: 24px;

      li {
        display: flex;
        gap: 20px;
        padding-bottom: 24px;

        border-bottom: #e6e5e5 1px solid;

        & + li {
          padding-top: 24px;
        }

        & > div {
          width: 100%;
        }

        img {
          height: 64px;
          width: 64px;
        }

        .title-value {
          display: flex;
          justify-content: space-between;

          span.price {
            font-family: "Roboto";
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 130%;
          }

          & > span.name {
            font-family: "Roboto";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            color: #403937;
          }
        }

        .actions {
          display: flex;
          gap: 8px;
        }

        .container-buttons {
          width: 76px;
          border-radius: 6px;
          background: #e6e5e5;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0px 8px;

          button {
            color: #8047f8;
            padding: 8px;
            border: 0px;
            background: none;
            cursor: pointer;

            &.price {
              color: #000;
              font-family: "Roboto";
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 130%;
            }
          }
        }

        .delete {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 91px;
          gap: 4px;
          border-radius: 6px;
          background: #e6e5e5;
          border: none;
          padding: 0 8px 0 8px;
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          font-size: 11px;
          /* line-height: 160%; */
          /* or 19px */

          text-transform: uppercase;

          /* Base/Text */

          color: #574f4d;
        }
      }
    }
  }
`;
