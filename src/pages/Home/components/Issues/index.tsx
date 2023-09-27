import { useCallback, useEffect, useState } from "react";
import { IssueCard } from "../IssueCard";
import { SearchBar } from "../SearchBar";
import { api } from "../../../../services/axios";
import { getQueryFromSessionStorage } from "../../../../utils/storage";
import { IssuesContainer } from "./styles";

export interface IssueCardType {
  number: number;
  title: string;
  content: string;
  createdAt: Date;
}

export function Issues() {
  const [issues, setIssues] = useState<IssueCardType[]>([]);

  // useCallback irá memorizar a função passada no primeiro parâmetro e não irá recriá-la entre as renderizações, pois o array de dependências está vazio
  const getIssues = useCallback(async (query = "") => {
    try {
      const response = await api.get(`/search/issues`, {
        params: {
          q: `${query} repo:ThallesDenner/react-p03-github-blog`,
        },
      });

      // const issues = response.data.items.map((issue: any) => {
      //   const { number, title, body: content, created_at: createdAt } = issue;
      //   return {
      //     number,
      //     title,
      //     content,
      //     createdAt: new Date(createdAt),
      //   };
      // });

      const issues = response.data.items.map((issue: any) => {
        return {
          number: issue.number,
          title: issue.title,
          content: issue.body,
          createdAt: new Date(issue.created_at),
        };
      });

      // console.log("issues: ", issues);
      setIssues(issues);
    } catch (error) {
      // console.log("error: ", error);
      alert("Ocorreu um erro ao buscar as issues.");
    }
  }, []);

  // useEffect será executado após a montagem do componente e quando houver uma atualização de dependências (getIssues)
  // Como getIssues é uma função estável (não é recriada toda vez que <Issues> é renderizado), useEffect será executado apenas após a montagem do componente
  useEffect(() => {
    const query = getQueryFromSessionStorage();
    getIssues(query);
  }, [getIssues]);

  return (
    <IssuesContainer>
      <div>
        <h2>Publicações</h2>
        <span>{issues.length} publicações</span>
      </div>
      <SearchBar getIssues={getIssues} />
      <div>
        {issues.map((issue) => (
          <IssueCard key={issue.number} issue={issue} />
        ))}
      </div>
    </IssuesContainer>
  );
}
