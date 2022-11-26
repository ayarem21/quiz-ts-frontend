import { Routes, Route } from 'react-router-dom';
import QuizForm from './components/quiz/QuizForm';
import Quizzes from './components/quiz/Quizzes';

const Main = () => {
return (         
    <Routes>
        <Route path='/quizzes' element={<Quizzes />} />
        <Route path='/quizzes/create' element={<QuizForm />} />
    </Routes>
);
}
export default Main;