import { grammarCheck } from "../utils/grammarCheck";
import { analyzeContent } from "../utils/aiInsights";

export const getAIInsights = (content) => {
  const insights = analyzeContent(content);
  return insights;
};

export const getGrammarSuggestions = (content) => {
  const suggestions = grammarCheck(content);
  return suggestions;
};
