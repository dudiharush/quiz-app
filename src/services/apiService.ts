import { QuestionModel, UserScoreModel } from "../types/modelTypes";

export const loadQuiz = async () => {
  const question: QuestionModel = {
    answerOptions: [
      { id: "1", text: "Answer 1 text" },
      { id: "2", text: "Answer 2 text" },
      { id: "3", text: "Answer 3 text" },
    ],
    id: "123",
    text: "what is the answer to this question?",
  };
  return question;
};

const storageKey = 'scores';

export const postUserScore = async(userScore: UserScoreModel) => {
    const scores = await loadScores();
    localStorage.setItem(storageKey, JSON.stringify([...scores, userScore].sort((a,b)=>b.score-a.score)));
    return scores;
}

export const loadScores = async ()=>{
    const saved = localStorage.getItem(storageKey);
    return (saved ? JSON.parse(saved) : []) as UserScoreModel[]
}