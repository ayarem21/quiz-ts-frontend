
import { QuizInterface } from '../../../interfaces/quiz/quizInterface';
import { useForm } from 'react-hook-form';
import quizAPI from '../../../api/quiz/quizAPI';
 
function useQuizForm() {
  const methods = useForm<QuizInterface>({
    defaultValues: {
      title: '',
      description: '',
      isArchived: false,
      questions: [],
    },
  });
 
  const handleSubmit = (values: QuizInterface) => {
    quizAPI.saveQuiz(values);
    console.log(values);
  };
 
  return {
    methods,
    handleSubmit: methods.handleSubmit(handleSubmit),
  };
}
 
export default useQuizForm;