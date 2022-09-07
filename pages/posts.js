import dbConnect from "../db/connect"
import Post from '../db/models/post';
import PostEl from '../components/post'
import Account from '../db/models/account'
import Image from '../db/models/image'
import ImagePostAssociation from '../db/models/imagePostAssociation'

import jsonify from "../jsonify";

export async function getServerSideProps(){
  await dbConnect();

  const posts = await Post.find({}).then(async posts => {
    const accountCache = {};

    return await Promise.all(posts.map(async post => {
      const formattedPost = {};

      formattedPost.textContent = post.textContent;

      const acctId = post.f_accountId.toString()
      if(!accountCache[acctId]){
        const account = await Account.findOne({_id: post.f_accountId});
        accountCache[acctId] = account.username
      }
      formattedPost.poster = accountCache[acctId];

      //i really wish i would have used a relational database at this point
      const ipas = await ImagePostAssociation.find({f_postId: post._id});
      formattedPost.images = await Promise.all(ipas.map(async ipa => {
        const image = await Image.findOne({_id: ipa.f_imageId});
        return {url: '/uploads/' + image.resourceURL, description: image.description};
      }))

      return formattedPost;
    }))
  });

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