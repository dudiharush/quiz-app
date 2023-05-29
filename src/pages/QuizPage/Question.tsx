import { QuestionModel } from "../../types/modelTypes";
import { OptionsItem } from "./OptionsItem";

export type QuestionProps = {
  question: QuestionModel;
  onOptionSelected: (optionId: string) => void;
  selectedOptionId?: string;
};

export const Question = ({
  question,
  onOptionSelected,
  selectedOptionId,
}: QuestionProps) => {
  return (
    <fieldset>
      {question &&
        question.answerOptions.map((option) => (
          <OptionsItem
            key={option.id}
            onItemChecked={() => onOptionSelected(option.id)}
            option={option}
            checked={selectedOptionId === option.id}
          />
        ))}
    </fieldset>
  );
};
