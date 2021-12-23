import Header from "../../components/header/Header";
import useRequest from "../../hooks/useRequest";
import { BASE_URL } from "../../constants/urls"
import { CardContainer, ScreenContainer } from "../../components/Styled";
import { PostCard, userTitle } from "./StyledPostList";

const PostListPage = () => {
  const posts = useRequest([], `${BASE_URL}/posts`)
  console.log("posts salvos", posts)

  const postsList = posts && posts.map((post) => {
    return <ScreenContainer key={post.id}>
      <CardContainer>
        <userTitle>{post.username}</userTitle>
         <PostCard>{post.title} </PostCard>

      </CardContainer>
    </ScreenContainer>
  })

  return (
    <div>
      <Header />
      Pagina com lista de posts
      {postsList}
    </div>
  );
}
export default PostListPage;