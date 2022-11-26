import { Routes, Route, BrowserRouter } from 'react-router-dom';
import QuizForm from './components/quiz/QuizForm';
import Quizzes from './components/quiz/Quizzes';
import QuizPassForm from './components/QuizPassForm';

const Main = () => {
return (   
    <Routes>
        <Route path='/quizzes' element={<Quizzes />} />
        <Route path='/quizzes/create' element={<QuizForm />} />
        <Route path='/quizzes/:quizId' element={<QuizPassForm />} />
    </Routes>
);
}
export default Main;