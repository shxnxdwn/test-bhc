import { getPosts } from './get-data.js';
import { renderPosts } from './render-data.js';
import { filterPosts } from './filter-data.js';
import { searchPosts } from './search-data.js';

getPosts(renderPosts, filterPosts, searchPosts);
