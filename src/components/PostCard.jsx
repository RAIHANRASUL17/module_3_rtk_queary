

const PostCard = ({post}) => {
    return (
        <div className="bg bg-zinc-900 gap-4 my-4 p-6 text-white">
            <h1>Jhon Doe</h1>
            <p>{post?.body}</p>
        </div>
    );
};

export default PostCard;