// A simple function that summarizes the content
export const summarizeContent = (content) => {
  // Splitting the content into sentences and returning the first few as a summary
  const sentences = content.split(".");
  if (sentences.length <= 2) {
    return content; // Return full content if it's already short
  }

  // For longer notes, return a summary of the first 2-3 sentences
  const summary = sentences.slice(0, 2).join(".") + "...";
  return summary;
};
