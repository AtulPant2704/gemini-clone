const { PROMPT_DUMMY_ANSWERS } = require("./constants");

export const getRandomAnswer = () => {
  const randomIndex = Math.floor(Math.random() * PROMPT_DUMMY_ANSWERS.length);

  return PROMPT_DUMMY_ANSWERS[randomIndex];
};
