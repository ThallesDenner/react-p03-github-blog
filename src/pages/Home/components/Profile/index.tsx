import { useEffect, useState } from "react";
import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import { api } from "../../../../services/axios";
import { ProfileContainer } from "./styles";

interface UserDataType {
  avatarURL: string;
  bio: string;
  company: string;
  followers: number;
  profileURL: string;
  login: string;
  name: string;
}

export function Profile() {
  const [userData, setUserData] = useState<UserDataType>({} as UserDataType);

  // useEffect será executado apenas após a montagem do componente, pois o array de dependências está vazio
  useEffect(() => {
    async function getUserData() {
      try {
        const response = await api.get("/users/ThallesDenner");

        const {
          avatar_url: avatarURL,
          bio,
          company,
          followers,
          html_url: profileURL,
          login,
          name,
        } = response.data;

        const userData: UserDataType = {
          avatarURL,
          bio,
          company,
          followers,
          profileURL,
          login,
          name,
        };

        // console.log("userData: ", userData);
        setUserData(userData);
      } catch (error) {
        // console.log("error: ", error);
        alert("Ocorreu um erro ao buscar os dados do perfil.");
      }
    }

    getUserData();
  }, []);

  return (
    <ProfileContainer>
      <img src={userData.avatarURL} />
      <div>
        <div>
          <h1>{userData.name}</h1>
          <a href={userData.profileURL} target="_blank">
            GITHUB <ArrowSquareOut size={12} weight="bold" />
          </a>
        </div>
        <p>{userData.bio}</p>
        <div>
          <span>
            <GithubLogo size={18} weight="fill" /> {userData.login}
          </span>
          <span>
            <Buildings size={18} weight="fill" /> {userData.company}
          </span>
          <span>
            <Users size={18} weight="fill" /> {userData.followers} seguidores
          </span>
        </div>
      </div>
    </ProfileContainer>
  );
}
