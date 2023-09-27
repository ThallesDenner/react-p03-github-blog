import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "phosphor-react";
import ReactMarkdown from "react-markdown";
import remarkGFM from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { api } from "../../services/axios";
import { extractTimeRange } from "../../utils/formatter";
import { IssueCardType } from "../Home/components/Issues";
import "highlight.js/styles/github-dark.css";
import "katex/dist/katex.min.css";
import { IssueContainer } from "./styles";

interface IssueType extends IssueCardType {
  url: string;
  login: string;
  comments: number;
}

export function Issue() {
  const [issue, setIssue] = useState<IssueType>({} as IssueType);
  // useParams retorna um objeto contendo os parâmetros da rota atual (página Issue)
  const { issueNumber } = useParams();

  // useEffect será executado após a montagem do componente e quando houver uma atualização de dependências (issueNumber)
  useEffect(() => {
    async function getIssue() {
      try {
        const response = await api.get(
          `/repos/ThallesDenner/react-p03-github-blog/issues/${issueNumber}`
        );

        const {
          number,
          title,
          body: content,
          created_at: createdAt,
          html_url: url,
          user: { login },
          comments,
        } = response.data;

        const issue: IssueType = {
          number,
          title,
          content,
          createdAt: new Date(createdAt),
          url,
          login,
          comments,
        };

        // console.log("issue: ", issue);
        setIssue(issue);
      } catch (error) {
        // console.log("error: ", error);
        alert("Ocorreu um erro ao buscar os dados de perfil.");
      }
    }

    getIssue();
  }, [issueNumber]);

  return (
    <IssueContainer>
      <article>
        <header>
          <nav>
            <Link to="/">
              <CaretLeft size={12} /> VOLTAR
            </Link>
            <a href={issue.url} target="_blank">
              VER NO GITHUB <ArrowSquareOut size={12} weight="bold" />
            </a>
          </nav>
          <h1>{issue.title}</h1>
          <div>
            <span>
              <GithubLogo size={18} weight="fill" /> {issue.login}
            </span>
            <span>
              <CalendarBlank size={18} weight="fill" />{" "}
              {issue.createdAt && extractTimeRange(issue.createdAt)}
            </span>
            <span>
              <ChatCircle size={18} weight="fill" /> {issue.comments}{" "}
              comentários
            </span>
          </div>
        </header>
        <div>
          <ReactMarkdown
            remarkPlugins={[remarkGFM, remarkMath]}
            rehypePlugins={[[rehypeHighlight, { detect: true }], [rehypeKatex]]}
          >
            {issue.content}
          </ReactMarkdown>
        </div>
      </article>
    </IssueContainer>
  );
}
