import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "phosphor-react";
import { IssueContainer } from "./styles";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export function Issue() {
  return (
    <IssueContainer>
      <article>
        <header>
          <nav>
            <Link to="/">
              <CaretLeft size={12} /> VOLTAR
            </Link>
            <a href="https://github.com/ThallesDenner" target="_blank">
              VER NO GITHUB <ArrowSquareOut size={12} weight="bold" />
            </a>
          </nav>
          <h1>Título da Issue Maior para ver o que acontece</h1>
          <div>
            <span>
              <GithubLogo size={18} weight="fill" /> usuário
            </span>
            <span>
              <CalendarBlank size={18} weight="fill" /> Há 1 dia
            </span>
            <span>
              <ChatCircle size={18} weight="fill" /> 5 comentários
            </span>
          </div>
        </header>
        <ReactMarkdown># Hello, *world*!</ReactMarkdown>
      </article>
    </IssueContainer>
  );
}
