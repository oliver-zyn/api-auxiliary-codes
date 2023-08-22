const typeString = { type: 'string' };

const post = {
  type: 'object',
  properties: {
    id: typeString,
    title: typeString,
    description: typeString,
    githubLink: typeString,
    code: typeString,
  },
};

const getPostsSchema = {
  params: {
    language: typeString,
  },
  response: {
    200: {
      type: 'array',
      items: post,
    },
  },
};

const getPostSchema = {
  querystring: {
    id: typeString,
    language: typeString
  },
  response: {
    200: post,
  },
};

const addPostSchema = {
  body: {
    type: 'object',
    required: ['title', 'body'],
    properties: {
      title: typeString,
      body: typeString,
    },
  },
  response: {
    200: typeString,
  },
};

const updatePostSchema = {
  body: {
    type: 'object',
    required: ['title', 'body'],
    properties: {
      title: typeString,
      body: typeString,
    },
  },
  params: {
    id: { type: 'number' },
  },
  response: {
    200: typeString,
  },
};

const deletePostSchema = {
  params: {
    id: { type: 'number' }, // converts the id param to number
  },
  response: {
    200: typeString,
  },
};

module.exports = { getPostsSchema, getPostSchema, addPostSchema, updatePostSchema, deletePostSchema };