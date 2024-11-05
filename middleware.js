import UserModel from "./schema/user.js";
import PostModel from "./schema/post.js";

const Middleware = {
  checkPost: (req, res, next) => {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
      return res.status(400).send({ message: 'Username, password, and email are required' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).send({ message: 'Invalid email format' });
    }
    next();
  }, checkId: async (req, res, next) => {
    const { content } = req.body;
    const { apiKey } = req.query;

    if (!apiKey) return res.status(400).send({ message: "API key is required!" });

    try {
      const apiKeyParts = apiKey.split('$');
      if (apiKeyParts.length !== 4) return res.status(400).send({ message: "Invalid API key format!" });

      const [prefix, userIdFromKey, emailFromKey] = apiKeyParts;
      if (prefix !== "mern") return res.status(400).send({ message: "Invalid API key prefix!" });
      const existUser = await UserModel.findOne({
        _id: userIdFromKey,
        email: emailFromKey
      });

      if (!existUser) return res.status(400).send({ message: "User not found or invalid API key!" });
      req.newPost = new PostModel({
        userId: existUser._id,
        content,
        createAt: new Date().toISOString(),
        updateAt: new Date().toISOString()
      });

      next();
    } catch (error) {
      res.status(500).send({ message: 'Server error' });
    }
  }
};

export default Middleware
