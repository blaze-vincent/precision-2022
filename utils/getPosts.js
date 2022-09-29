import dbConnect from "../db/connect"
import Post from '../db/models/post';
import Account from '../db/models/account'
import Image from '../db/models/image'
import ImagePostAssociation from '../db/models/imagePostAssociation'

export default async function getPosts(page){
  const PAGE_SIZE = 10;

  await dbConnect();

  const posts = await Post.find().sort({'createdAt': 'desc'}).limit(PAGE_SIZE).then(async posts => {
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

  return posts; 
}