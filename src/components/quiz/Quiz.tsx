import { QuizInterface } from "../../interfaces/quiz/quizInterface";

const Quiz: React.FC<QuizInterface> = (props: QuizInterface) => {
    const {title, description, isArchived } = props;

    return ( 
        <div>
            <div>{title}</div>
            <div>{description}</div>
            <div>{isArchived ? "Archived" : "Didn't archived"}</div>
            <hr></hr>
        </div>
    )
}

export default Quiz;