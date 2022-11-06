import { Link } from "react-router-dom";
import { QuizInterface } from "../../interfaces/quiz/quizInterface";

const Quiz: React.FC<QuizInterface> = (props: QuizInterface) => {
    const {id, title, description, isArchived } = props;

    return ( 
        <div>
            <div>{title}</div>
            <div>{description}</div>
            <div>{isArchived ? "Archived" : "Didn't archived"}</div>
            <Link to={
                `/quizzes/${id}`
            }>
                Edit
            </Link>
            <hr></hr>
        </div>
    )
}

export default Quiz;