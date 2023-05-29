"use client";

import { AnswerOptionModel } from "../../types/modelTypes";

type OptionsItemProps = {
  option: AnswerOptionModel
  checked: boolean;
  onItemChecked: () => void;
};
export const OptionsItem = ({
  checked,
  option,
  onItemChecked,
}: OptionsItemProps) => {
  return (
    <div className="flex gap-1 items-center">
      <input
        id={option.id}
        type="checkbox"
        className="cursor-pointer"
        defaultChecked={checked}
        onChange={() => {
          onItemChecked();
        }}
      />
      <label
        htmlFor={option.id}
        className="cursor-pointer"
      >
        {option.text}
      </label>
    </div>
  );
};
