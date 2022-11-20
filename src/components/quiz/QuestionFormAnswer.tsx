import useQuestionFromAnswer from "./hooks/useQuestionFromAnswer";

export interface IQuestionFormAnswer {
  questionId: number
}

const QuestionFormAnswer = (props: IQuestionFormAnswer) => {
  const { questionId } = props;

  const {
    fields,
    register,
    addNewAnswer,
    removeQuestion
  } = useQuestionFromAnswer({questionId: questionId});

  return (
    <div>
      <div>
      <input {...register(`questions.${questionId}.body`)} placeholder="questtion" />
        <button
          type="button"
          onClick={addNewAnswer}
        >
          + Add question
        </button>
      </div>
      {fields.map((field, index) => (
        <div key={field.id}>
          <button
            type="button"
            onClick={removeQuestion(index)}
          >
            -
          </button>
          <input {...register(`questions.${questionId}.answers.${index}.body`)} placeholder="answer" />
        </div>
      ))}
    </div>
  );
}

export default QuestionFormAnswer;