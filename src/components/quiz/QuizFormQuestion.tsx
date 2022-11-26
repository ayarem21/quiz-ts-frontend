import { Button, TextField } from "@mui/material";
import useQuizFromQuestion from "./hooks/useQuizFromQuestion";
import QuestionFormAnswer from "./QuestionFormAnswer";

const QuizFormQuestion = () => {
  const {
    fields,
    register,
    addNewQuestion,
    removeQuestion
  } = useQuizFromQuestion();

  return (
    <div>
      <div>
        <TextField {...register('title')} placeholder="Title" variant="standard"/>
        <TextField {...register('description')} placeholder="Description" variant="standard"/>
        <Button
          type="button"
          variant="outlined"
          onClick={addNewQuestion}
        >
          + Add question
        </Button>
      </div>
      {fields.map((field, index) => (
        <div key={field.id}>
          <button
            type="button"
            onClick={removeQuestion(index)}
          >
            -
          </button>
          <QuestionFormAnswer questionId={index}/>
        </div>
      ))}
    </div>
  );
}

export default QuizFormQuestion;