import { IssueCard } from "../IssueCard";
import { SearchForm } from "../SearchForm";
import { IssuesContainer } from "./styles";

export function Issues() {
  return (
    <IssuesContainer>
      <div>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </div>
      <SearchForm />
      <div>
        <IssueCard />
        <IssueCard />
        <IssueCard />
      </div>
    </IssuesContainer>
  );
}
