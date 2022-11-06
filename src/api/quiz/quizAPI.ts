import API from '../API';

const getAllQuizzes = async (): Promise<any> => {
    return API.get('/api/quizzes/');
}

export default {
    getAllQuizzes
}