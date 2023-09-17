import PostCard from "../components/PostCard";
import {
  useGetPostsByIdQuery,
  useGetPostsQuery,
  useSetPostMutation,
} from "../redux/features/api/baseApi";
import { useForm } from "react-hook-form";


const Feed = () => {
  const { register, handleSubmit } = useForm();
   // for mutation
   const [setPost, {data: postData}] = useSetPostMutation();
   console.log(postData)

  const onSubmit = (data) => {
    // console.log(data);
    // setPost(data)
    setPost({title: "this is a title", body: data.post, userId: 7779})
  }

  // for all post data
  // const { data: posts, isLoading, isError, error } = useGetPostsQuery(); //* return an object
  // console.log(posts);

  //for specific id
  const { data: post, isLoading, isError } = useGetPostsByIdQuery(1);

 

  if (isLoading) {
    return <p className="text-9xl text-orange-400">Loading</p>;
  }

  if (!isLoading && isError) {
    return <p className="text-9xl text-red-400">somethings wrong</p>;
  }

  return (
    <div>
      <h1>Feed default page</h1>
      <div>
      <form  onSubmit={handleSubmit(onSubmit)} className="flex gap-3 px-12">
    
      <input className="w-full text-white bg bg-zinc-900" type="text" {...register("post")} />
      
      <input className="bg bg-orange-500 p-2" type="submit" />
    </form>
      </div>


      {/* for all post */}
      <div>
        {/* {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))} */}
      </div>
      

      {/* specific id */}
      <div>
      {<PostCard key={post.id} post={post} />}
      </div>
    </div>
  );
};

export default Feed;
