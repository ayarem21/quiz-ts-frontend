import { useAppSelector } from "../../redux/hooks";
import Quiz from "./Quiz";



function Quizzes () {
  const quizzesSelector = useAppSelector(state => state.quizzes)

  return (
    <div>
        {
            quizzesSelector.quizzes.map(q => {
                return <Quiz key = {q.id} title = {q.title} description={q.description} isArchived = {q.isArchived}/>
            })
        }
    </div>
  )
};

export default Quizzes;