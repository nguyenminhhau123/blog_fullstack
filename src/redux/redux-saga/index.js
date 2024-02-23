import { takeLatest, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";
function* fetchPostSaga(action) {
  const posts = yield call(api.fetchData);
  console.log("posts", [posts]);
}
function* mySaga() {
  // takeLattest nhận vô 2 tham số: 1 string tên của action hoặc 1 func
  // tham số thứ 2 : 1 func để sử lý khi action này xảy ra
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
}
// generator function
export default mySaga;
