import { getPosts } from './get-data.js';
import { renderPosts } from './render-data.js';
import { handleFilterClick } from './filter-data.js';
import { handleSearch } from './search-data.js';

getPosts(renderPosts, handleFilterClick, handleSearch);
