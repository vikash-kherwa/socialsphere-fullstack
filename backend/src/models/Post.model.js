const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,

    body: String,

    imageUrl: String,
    imageFileId: String,
    userId: String,
    tags: [String],

    reactions: Number,
  },
  {
    timestamps: true,
  },
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
