
import { QuizInterface } from '../../../interfaces/quiz/quizInterface';
import { useForm } from 'react-hook-form';
 
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
    console.log(values);
  };
 
  return {
    methods,
    handleSubmit: methods.handleSubmit(handleSubmit),
  };
}
 
export default useQuizForm;