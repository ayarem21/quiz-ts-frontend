import { FormProvider } from "react-hook-form";
import useCreateQuizForm from "./hooks/useQuizForm";
import QuizFormQuestion from "./QuizFormQuestion";

const QuizForm = () => {
    const { handleSubmit, methods } = useCreateQuizForm();
 
    return (
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <QuizFormQuestion />
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    );
}

export default QuizForm;