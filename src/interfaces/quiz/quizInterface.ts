import { QuestionInterface } from "../question/questionInterface";

export interface QuizInterface {
    id?: number,
    title: string,
    description: string,
    isArchived: boolean,
    questions?: QuestionInterface[]
}