import getPosts from "../../utils/getPosts"
import WritablePost from "../../components/admin/writablePost";
import jsonify from "../../utils/jsonify";

export async function getServerSideProps(){

  const posts = await getPosts();
  console.log(posts)
  
  return {
    props: {
      posts: jsonify(posts)
    }
  }
}

export default function AdminPosts({posts = []}){

  const postElements = posts.map((post, index) => {
    return <WritablePost 
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