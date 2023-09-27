import styled from "styled-components";

export const ProfileContainer = styled.section`
  margin-top: -5.5rem;
  margin-bottom: 4.5rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors["base-profile"]};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  img {
    width: 9.25rem;
    height: 9.25rem;
    object-fit: cover;
    border-radius: 8px;
  }

  & > div > div:first-child {
    display: flex;
    justify-content: space-between;

    h1 {
      color: ${(props) => props.theme.colors["base-title"]};
      font-size: ${(props) => props.theme.fontSizes["fs-24"]};
      font-weight: 700;
      line-height: 1.3;
    }

    a {
      height: 1.2rem; // line-height * font-size
      display: flex;
      align-items: baseline;
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

  & > div > p {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }

  & > div > div:last-child {
    display: flex;
    /* justify-content: space-between; */
    gap: 1.5rem;

    span {
      /* height: 1.6rem;  // line-height * font-size  */
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme.colors["base-subtitle"]};

      svg {
        color: ${(props) => props.theme.colors["base-label"]};
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    img {
      width: 7rem;
      height: 7rem;
    }
  }
`;
