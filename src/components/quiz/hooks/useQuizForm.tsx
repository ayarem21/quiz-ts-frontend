
import { QuizInterface } from '../../../interfaces/quiz/quizInterface';
import { useForm } from 'react-hook-form';
import quizAPI from '../../../api/quiz/quizAPI';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/hooks';
import { addQuiz } from '../../../slices/quiz/quizeSlice';
 
function useQuizForm() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const methods = useForm<QuizInterface>({
    defaultValues: {
      title: '',
      description: '',
      isArchived: false,
      questions: [],
    },
  });
 
  const handleSubmit = (quiz: QuizInterface) => {
    quizAPI.saveQuiz(quiz);
    dispatch(addQuiz(quiz))
    console.log(quiz);
    navigate('/quizzes');
  };
 
  return {
    methods,
    handleSubmit: methods.handleSubmit(handleSubmit),
  };
}
 
export default useQuizForm;