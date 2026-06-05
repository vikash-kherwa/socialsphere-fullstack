import { useContext, useRef, useState } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const [isPosting, setIsPosting] = useState(false);
const [titleError, setTitleError] = useState("");
const [userIdError, setUserIdError] = useState("");
const [bodyError, setBodyError] = useState("");

  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  const imageElement = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(",");
    const image = imageElement.current.files[0];
if (!postTitle.trim()) {
  setTitleError("Title is required");
  return;
}

setTitleError("");

    if (!userId.trim()) {
  setUserIdError("User ID is required");
  return;
}

setUserIdError("");

   if (!postBody.trim()) {
  setBodyError("Post content is required");
  return;
}

setBodyError("");
    const formData = new FormData();

    formData.append("userId", userId);
    formData.append("title", postTitle);
    formData.append("body", postBody);
    formData.append("reactions", reactions);
    formData.append("tags", tags.join(","));
    formData.append("image", image);

    try {
      setIsPosting(true);

      await addPost(formData);
setTitleError("");
setUserIdError("");
setBodyError("");
      userIdElement.current.value = "";
      postTitleElement.current.value = "";
      postBodyElement.current.value = "";
      reactionsElement.current.value = "";
      tagsElement.current.value = "";
      imageElement.current.value = "";
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="create-post-card">
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User Id here
          </label>

          <input
            type="text"
            className="form-control"
            id="userId"
            ref={userIdElement}
            placeholder="Your User Id"
          />{userIdError && (
  <div className="text-danger mt-1">
    {userIdError}
  </div>
)}
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post title
          </label>

          <input
            type="text"
            className="form-control"
            id="title"
            ref={postTitleElement}
            placeholder="How are you feeling today..."
          />
{titleError && (
  <div className="text-danger mt-1">
    {titleError}
  </div>
)}
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>

          <textarea
            rows="3"
            className="form-control"
            id="body"
            ref={postBodyElement}
            placeholder="Tell us more about it"
          />{bodyError && (
  <div className="text-danger mt-1"> 
    {bodyError}
  </div>
)}
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of reactions
          </label>

          <input
            type="text"
            className="form-control"
            id="reactions"
            ref={reactionsElement}
            placeholder="How many people reacted to this post"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags here
          </label>

          <input
            type="text"
            className="form-control"
            id="tags"
            ref={tagsElement}
            placeholder="Please enter tags using commas"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Upload Image
          </label>

          <input
            type="file"
            className="form-control"
            id="image"
            ref={imageElement}
            accept="image/*"
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isPosting}>
          {isPosting ? "Posting..." : "Post"}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
