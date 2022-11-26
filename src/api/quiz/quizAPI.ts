import { QuizInterface } from '../../interfaces/quiz/quizInterface';
import API from '../API';

const getAllQuizzes = async (): Promise<any> => {
    return API.get('/api/quizzes/');
}

const getAllQuizQuestions = async (quziId: string): Promise<any> => {
    return API.get(`/api/quizzes/${quziId}/`);
}

const saveQuiz = async (quiz :QuizInterface): Promise<any> => {
    return API.post('/api/quizzes/create', quiz);
}

export default {
    getAllQuizzes,
    getAllQuizQuestions,
    saveQuiz
}