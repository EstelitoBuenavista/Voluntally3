const jwt = require("jsonwebtoken");
const decoder = require("jwt-decode")

const authenticateToken = (request, response, next) => {
  const authHeader = request.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return response.status(403).json({ message: "Unauthorized access" });
  }

  jwt.verify(token, "tokensecret1", (error, user) => {
    const decoded = decoder.jwtDecode(token);
    if (error) {
      return response.status(403).json({ message: "Unauthorized access" });
    } else if (decoded.role !== "admin" || decoded.role !== "student") {
      return response.status(403).json({ message: "Invalid Claim" });
    }

    request.user = user;
    next();
  });
};

module.exports = authenticateToken;
