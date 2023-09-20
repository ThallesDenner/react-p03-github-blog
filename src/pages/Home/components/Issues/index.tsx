import { IssueCard } from "../IssueCard";
import { SearchBar } from "../SearchBar";
import { IssuesContainer } from "./styles";

export function Issues() {
  return (
    <IssuesContainer>
      <div>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </div>
      <SearchBar />
      <div>
        <IssueCard />
        <IssueCard />
        <IssueCard />
      </div>
    </IssuesContainer>
  );
}
