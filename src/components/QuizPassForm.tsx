import { Box, Container } from "@mui/system";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchQuizQuestionsAsync } from "../slices/quiz/quizeSlice";


const QuizPassForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const { quizId } = useParams(); 
    const quiz = useAppSelector(state => state.quizzes).quizzes.find(q => q.id == quizId)

    useEffect(
        () => {
            if(quizId) {
                dispatch(fetchQuizQuestionsAsync(quizId));
            }
        }, [quiz])

    return ( 
        <div>
            {quiz ? 
                <Box sx = {{ display: 'flex', flexDirection: 'column' }}>
                    <label>{quiz.title}</label>
                    <label>{quiz.description}</label>
                    <form>
                        {quiz.questions ? quiz.questions.map(question =>  
                            <label>question.body</label>) 
                            : ""
                        }
                    </form>

                </Box>
                : <div>Quiz is not found</div>
            }
        </div>
    )
}

export default QuizPassForm;