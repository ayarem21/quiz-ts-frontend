import { FormProvider } from "react-hook-form";
import useQuizForm from "./hooks/useQuizForm";
import QuizFormQuestion from "./QuizFormQuestion";

const QuizForm = () => {
    const { handleSubmit, methods } = useQuizForm();
 
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