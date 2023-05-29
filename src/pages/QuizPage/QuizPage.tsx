import { useQuizLoader } from "../../services/dataLoaders";
import { useState } from "react";
import { Question } from "./Question";
import { useNavigate } from "react-router-dom";
import { postUserScore } from "../../services/apiService";
import { useUser } from "../../store/selectors";
import { calculateScore } from "../../utils/calculations";
import { Button } from "../../components/Button";

export const QuizPage = () => {
  const { question } = useQuizLoader();
  const navigate = useNavigate();
  const user = useUser();

  const [selectedOptionId, setSelectedOptionId] = useState<
    string | undefined
  >();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    postUserScore({
        score:calculateScore() ,userName: user!.name
    });
    navigate("/finish");
  }

  return (
    question ? (
    <form onSubmit={handleSubmit} className="flex gap-2 flex-col w-72 m-auto">
        <span>
        {question?.text}
        </span>
      <Question onOptionSelected={setSelectedOptionId} question={question} selectedOptionId={selectedOptionId} />
      <Button
        type="submit"
      >
        Submit
      </Button>
    </form>) : null
  );
};
