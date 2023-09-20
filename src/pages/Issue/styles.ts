import styled from "styled-components";

export const IssueContainer = styled.main`
  margin: 0 auto;
  max-width: 54rem;

  article > header {
    margin-top: -5.5rem;
    margin-bottom: 2.5rem;
    padding: 2rem;
    border-radius: 10px;
    background-color: ${(props) => props.theme["base-profile"]};
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        height: 1.2rem; // line-height * font-size
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: ${(props) => props.theme["blue"]};
        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;
        line-height: 0; // não alinha texto com ícone sem tirar line-height do estilo global ou colocar isso aqui
      }

      a:hover {
        border-bottom: 1px solid ${(props) => props.theme["blue"]};
      }
    }

    h1 {
      color: ${(props) => props.theme["base-title"]};
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.3;
      margin-top: 1.25rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      justify-content: space-between;
      /* gap: 1.5rem; */

      span {
        /* height: 1.6rem;  // line-height * font-size  */
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: ${(props) => props.theme["base-span"]};

        svg {
          color: ${(props) => props.theme["base-label"]};
        }
      }
    }
  }

  @media (max-width: 864px) {
    padding: 0 0.5rem;
  }
`;
