import { FormProvider } from "react-hook-form";
import useCreateQuizForm from "./hooks/useQuizForm";
import useQuizFromField from "./hooks/useQuizFromField";

const QuizFormField = () => {
  const {
    fields,
    register,
    addNewQuestion,
    removeQuestion
  } = useQuizFromField();

  return (
    <div>
      <div>
        <input {...register('title')} placeholder="Title" />
        <input {...register('description')} placeholder="Description" />
        <button
          type="button"
          onClick={addNewQuestion}
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
          <input {...register(`questions.${index}.body`)} placeholder="questtion" />
        </div>
      ))}
    </div>
  );
}

export default QuizFormField;