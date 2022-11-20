import { QuizInterface } from '../../interfaces/quiz/quizInterface';
import API from '../API';

const getAllQuizzes = async (): Promise<any> => {
    return API.get('/api/quizzes/');
}

const saveQuiz = async (quiz :QuizInterface): Promise<any> => {
    return API.post('/api/quizzes/create', quiz);
}

export default {
    getAllQuizzes,
    saveQuiz
}