import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer TEzYnDqSH3nFr15zoNxQFNdT80_JwbcH59UUs1UdRTp073N4DQRUoUZIn22hYXcSbR0ldmRBOmOQt__ZnNXxhX5kw4AXJ8SvO7zDFtGgiIsHZl1sxaTZero5ps3VYnYx",
  },
});
