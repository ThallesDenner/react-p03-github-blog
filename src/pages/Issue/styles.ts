import styled from "styled-components";

export const IssueContainer = styled.main`
  margin: 0 auto;
  max-width: 54rem;

  article > header {
    margin-top: -5.5rem;
    margin-bottom: 2.5rem;
    padding: 2rem;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors["base-profile"]};
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
        color: ${(props) => props.theme.colors["blue"]};
        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
        font-size: ${(props) => props.theme.fontSizes["fs-12"]};
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;
        line-height: 0; // não alinha texto com ícone sem tirar line-height do estilo global ou colocar isso aqui
      }

      a:hover {
        border-bottom: 1px solid ${(props) => props.theme.colors["blue"]};
      }
    }

    h1 {
      color: ${(props) => props.theme.colors["base-title"]};
      font-size: ${(props) => props.theme.fontSizes["fs-24"]};
      font-weight: 700;
      line-height: 1.3;
      margin-top: 1.25rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      /* justify-content: space-between; */
      gap: 1.5rem;

      span {
        /* height: 1.6rem;  // line-height * font-size  */
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.5rem;
        color: ${(props) => props.theme.colors["base-span"]};

        svg {
          color: ${(props) => props.theme.colors["base-label"]};
        }
      }
    }
  }

  article > div {
    margin-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > pre > code {
      border-radius: 2px;
      background-color: ${(props) => props.theme.colors["base-post"]};
    }

    img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  @media (max-width: 864px) {
    padding: 0 0.5rem;
  }
`;
