import { AnswerInterface } from "../answer/answerInterface";

export interface QuestionInterface {
    id?: number,
    body: string,
    answers?: AnswerInterface[]
}