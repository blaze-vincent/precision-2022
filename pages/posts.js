import PostEl from '../components/post'
import jsonify from "../utils/jsonify";
import getPosts from '../utils/getPosts';

export async function getServerSideProps(){

  const posts = await getPosts();
  
  return {
    props: {
      posts: jsonify(posts)
    }
  }
}

export default function Posts({posts = []}){

  const postElements = posts.map((post, index) => {
    return <PostEl 
      key={index}
      images={post.images} 
      textContent={post.textContent}
    />
  })

  return <div
    className="p-4"
  >
  
    <h1 className="text-xl font-semibold">Posts</h1>

    <div className="flex flex-col gap-4">
      {postElements.length && postElements || 'Posts could not be loaded.'}
    </div>

  </div>
}