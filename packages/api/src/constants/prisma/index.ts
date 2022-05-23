const post = { categories: true };

const user = { profile: true, posts: { include: post } };

export const prismaIncludeQuery = { post, user };
