const HEALTH = "/health";
const UID = "/:uid";

const USERS = "/users";
const POSTS = "/posts";
const CATEGORIES = "/categories";

const SEEDS = "/seeds";

export const routing = {
  health: { root: HEALTH },
  users: { root: USERS, uid: USERS + UID },
  posts: { root: POSTS, uid: POSTS + UID },
  categories: { root: CATEGORIES, uid: CATEGORIES + UID },
  seeds: { root: SEEDS },
};
