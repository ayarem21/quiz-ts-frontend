import { FormProvider } from "react-hook-form";
import useCreateQuizForm from "./hooks/useQuizForm";
import QuizFormField from "./QuizFormField";

const QuizForm = () => {
    const { handleSubmit, methods } = useCreateQuizForm();
 
    return (
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <QuizFormField />
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    );
}

export default QuizForm;