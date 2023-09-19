import { Link } from "react-router-dom";
import { IssueCardContainer } from "./styles";

export function IssueCard() {
  const issueNumber = 1;

  return (
    <IssueCardContainer>
      <Link to={`/issue/${issueNumber}`}>
        <header>
          <h3>Título da Issue</h3>
          <span>Há 1 dia</span>
        </header>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
          perferendis facilis sapiente consequuntur dicta sed dolores debitis
          laudantium veniam! Obcaecati sint officia ipsam culpa sapiente quasi
          sunt similique nulla voluptates?
        </p>
      </Link>
    </IssueCardContainer>
  );
}
