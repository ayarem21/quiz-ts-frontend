import { useFieldArray, useFormContext } from 'react-hook-form';
 
export interface IQuizFromQuestionProps {
  questionId: number
}

function useQuizFromQuestion(props: IQuizFromQuestionProps) {
    const { questionId } = props;

    const { control, register } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        control,
        name: `questions.${questionId}.answers`,
    });
 
  const addNewAnswer = () => {
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
    addNewAnswer,
    removeQuestion,
  };
}
 
export default useQuizFromQuestion;

