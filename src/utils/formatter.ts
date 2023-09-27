import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function formatDateTime(dateTime: Date) {
  return format(dateTime, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });
}

export function extractTimeRange(dateTime: Date) {
  return formatDistanceToNow(dateTime, {
    locale: ptBR,
    addSuffix: true,
  });
}
