import { getPosts } from './get-posts.js';
import { renderPosts } from './render-posts.js';
import { filterPosts } from './filter-posts.js';

getPosts(renderPosts, filterPosts);
