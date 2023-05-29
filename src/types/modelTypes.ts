export type UserModel = {
    id: string, 
    name: string
}

export type UserScoreModel = {
    userName: string;
    score: number;
}

export type AnswerOptionModel = {
    id: string;
    text: string;
}

export type QuestionModel = {
    id: string;
    text: string;
    answerOptions: AnswerOptionModel[];
}