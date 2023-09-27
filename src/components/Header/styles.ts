import styled from "styled-components";
import headerBackground from "../../assets/images/header-background.svg";

export const HeaderContainer = styled.header`
  height: 18.5rem;
  text-align: center;
  background-image: url(${headerBackground});
  background-color: ${(props) => props.theme.colors["base-profile"]};

  img {
    margin-top: 3.75rem;
  }
`;
