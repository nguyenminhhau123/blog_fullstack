import { createActions } from "redux-actions";
// đối với 1 action thực hiện 1 việc side effect như là call api
// sẽ có 3 actions cho hành động đó (gửi request, succsess, có lỗi xảy ra)
export const getType = (reduxAction) => {
  return reduxAction().type;
};
export const getPosts = createActions({
  getPostsRequest: undefined,
  getPostsSuccess: (payload) => payload,
  getPostsFailure: (err) => err,
});
/*
getType(getPosts.getPostsSuccess)
{
  type: 'getPostsSuccess',
  payload: {
  name : "test"
  }
}
*/
