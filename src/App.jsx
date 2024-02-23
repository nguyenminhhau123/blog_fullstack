import { useDispatch } from "react-redux";
import * as actions from "./redux/actions";
function App() {
  const dispatch = useDispatch();
  dispatch(actions.getPosts.getPostsRequest());
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
