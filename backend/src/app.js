const upload = require("../middleware/multer");
const express = require("express");
const cors = require("cors");
const Post = require("./models/Post.model");
const app = express();
const imagekit = require("./config/imagekit");

app.use(cors());
app.use(express.json());

app.post("/upload-test", upload.single("image"), async (req, res) => {
  try {
    const result = await imagekit.upload({
      file: req.file.buffer,
      fileName: req.file.originalname,
    });

    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

app.post("/posts", upload.single("image"), async (req, res) => {
  try {
    let imageUrl = "";
  let imageFileId = "";

    if (req.file) {
      const result = await imagekit.upload({
        file: req.file.buffer,
        fileName: req.file.originalname,
      });
      imageUrl = result.url;
      imageFileId = result.fileId;
    }


    const post = await Post.create({ ...req.body, imageUrl, imageFileId });
    
    res.status(201).json({
      message: "Post created",
      post,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.delete("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post?.imageFileId) {
      await imagekit.deleteFile(post.imageFileId);
    }

    await Post.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Post deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/", (req, res) => {
  res.send("Backend Running");
});

module.exports = app;
