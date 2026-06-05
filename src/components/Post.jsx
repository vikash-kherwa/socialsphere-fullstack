import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";
import { formatDistanceToNow } from "date-fns";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (<div className="card post-card">
      <div className="card-body">
        <div className="mb-3">
          <h6 className="mb-1 fw-semibold text-dark">@{post.userId}</h6>
          
          
          

<small className="text-secondary">
  {formatDistanceToNow(new Date(post.createdAt), {
    addSuffix: true,
  })}
</small>


        </div>

        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => {
  if (window.confirm("Delete this post?")) {
    deletePost(post._id);
  }
}}
          >
            <AiFillDelete />
          </span>
        </h5>
        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="img-fluid rounded mb-3"
          />
        )}
        <p className="card-text">{post.body}</p>

        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}

        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by{" "}
          {post.reactions?.likes ?? post.reactions} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
