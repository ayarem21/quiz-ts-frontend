import { useEffect } from 'react';
import './App.css';
import { fetchQuizzesAsync } from './slices/quiz/quizeSlice';
import { useAppDispatch } from './redux/hooks';
import { Link } from 'react-router-dom';
import QuizRouter from './QuizRouter';
import QuizForm from './components/quiz/QuizForm';

function App() {
  const dispatch = useAppDispatch();

  useEffect(
    () => {
      dispatch(fetchQuizzesAsync())
    }, [])
  return (
    <div>
      <ul>
        <li><Link to='/quizzes'>Quizzes</Link></li>
      </ul> 
      <QuizRouter />
      <QuizForm/>
  </div> 
  );
}

export default App;
