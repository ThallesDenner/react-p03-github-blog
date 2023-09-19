import { Issues } from "./components/Issues";
import { Profile } from "./components/Profile";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <Issues />
    </HomeContainer>
  );
}
