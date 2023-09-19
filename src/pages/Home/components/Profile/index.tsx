import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import { ProfileContainer } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/ThallesDenner.png" />
      <div>
        <div>
          <h1>Usuário do Github</h1>
          <a href="https://github.com/ThallesDenner">
            GITHUB <ArrowSquareOut size={12} weight="bold" />
          </a>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
          reiciendis officia deleniti nobis nostrum rerum aliquam enim excepturi
          et. Doloremque animi excepturi qui nisi nostrum, laboriosam incidunt
          quisquam quod tempora.
        </p>
        <div>
          <span>
            <GithubLogo size={18} weight="fill" /> usuário
          </span>
          <span>
            <Buildings size={18} weight="fill" /> trabalho
          </span>
          <span>
            <Users size={18} weight="fill" /> 100 seguidores
          </span>
        </div>
      </div>
    </ProfileContainer>
  );
}
