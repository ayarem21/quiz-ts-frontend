import { Routes, Route } from 'react-router-dom';
import Quizzes from './components/quiz/Quizzes';

const Main = () => {
return (         
    <Routes>
        <Route path='/quizzes' element={<Quizzes />} />
    </Routes>
);
}
export default Main;