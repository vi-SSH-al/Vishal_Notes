// Basic grammar checking logic
export const grammarCheck = (content) => {
    const suggestions = [];
    const commonMistakes = { 'teh': 'the', 'recieve': 'receive' }; // Example
  
    Object.keys(commonMistakes).forEach((mistake) => {
      if (content.includes(mistake)) {
        suggestions.push({
          mistake,
          suggestion: commonMistakes[mistake],
        });
      }
    });
  
    return suggestions;
  };
  