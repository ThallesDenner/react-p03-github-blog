import { Link } from "react-router-dom";
import { IssueCardType } from "../Issues";
import { extractTimeRange, formatDateTime } from "../../../../utils/formatter";
import { IssueCardContainer } from "./styles";

interface IssueCardProps {
  issue: IssueCardType;
}

export function IssueCard({ issue }: IssueCardProps) {
  const { number, title, content, createdAt } = issue;

  return (
    <IssueCardContainer>
      <Link to={`/issue/${number}`}>
        <header>
          <h3>{title}</h3>
          <time
            title={formatDateTime(createdAt)}
            dateTime={createdAt.toISOString()}
          >
            {extractTimeRange(createdAt)}
          </time>
        </header>
        <p>{content}</p>
      </Link>
    </IssueCardContainer>
  );
}
