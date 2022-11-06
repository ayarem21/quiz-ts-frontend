import { useFieldArray, useFormContext } from 'react-hook-form';
import { QuizInterface } from '../../../interfaces/quiz/quizInterface';
 
function useQuizFromField() {
    const { control, register } = useFormContext<QuizInterface>();

    const { fields, append, remove } = useFieldArray<QuizInterface>({
        control,
        name: 'questions',
    });
 
  const addNewQuestion = () => {
    append({
      body: '',
    });
  };
 
  const removeQuestion = (questionIndex: number) => () => {
    remove(questionIndex);
  };
 
  return {
    fields,
    register,
    addNewQuestion,
    removeQuestion,
  };
}
 
export default useQuizFromField;

