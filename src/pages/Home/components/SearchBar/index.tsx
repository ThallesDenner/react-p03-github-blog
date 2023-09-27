import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { PaperPlaneRight } from "phosphor-react";
import { saveQueryToSessionStorage } from "../../../../utils/storage";
import { SearchBarContainer } from "./styles";

const searchFormValidationScheme = zod.object({
  query: zod.string(),
});

type SearchFormDataType = zod.infer<typeof searchFormValidationScheme>;

const searchFormDefaultValues = Object();
Object.keys(searchFormValidationScheme.shape).forEach(
  (field) => (searchFormDefaultValues[field] = "")
);

interface SearchBarProps {
  getIssues: (query: string) => Promise<void>;
}

export function SearchBar({ getIssues }: SearchBarProps) {
  const { register, handleSubmit, reset } = useForm<SearchFormDataType>({
    resolver: zodResolver(searchFormValidationScheme),
    defaultValues: searchFormDefaultValues,
  });

  function handleIssuesSearch(data: SearchFormDataType) {
    saveQueryToSessionStorage(data.query);
    getIssues(data.query);
    reset();
  }

  return (
    <SearchBarContainer onSubmit={handleSubmit(handleIssuesSearch)}>
      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
      <PaperPlaneRight size={16} />
    </SearchBarContainer>
  );
}
