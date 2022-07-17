import "./App.css";
import Comment from "./components/comment";
import { comment } from "./data/data";



function App() {
  return (<Comment
   author={comment.author} 
  text={comment.text}
  date={comment.date}
  /> 
 
  )
}

export default App;
