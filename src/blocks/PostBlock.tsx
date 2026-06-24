import database from "../storage/database";
import PostComponent from "../components/PostComponent";
import type { Post } from "../types/post.types";

interface PostBlockProps {
  posts?: Post[];
}

function PostBlock({ posts = database.posts }: PostBlockProps) {
  return (
    <div className="posts" data-layout-structure="block">
      <h3 className="block-header post-title">
        <span className="material-symbols-outlined">article </span>
        Latest Posts
      </h3>
      <div className="posts-wrapper">
        {posts.length === 0 ? (
          <p className="posts-empty">No posts match your filters.</p>
        ) : (
          posts.map((post) => (
            <PostComponent key={post.id} post={post} />
          ))
        )}
      </div>

      <div className="pagination-block" data-layout-structure="block">
        <ul className="pagination">
          <li className="page-item" data-layout-structure="component">
            <button className="page-link" aria-label="Previous">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
          </li>
          <li className="page-item active" data-layout-structure="component">
            <button className="page-link">1</button>
          </li>
          <li className="page-item" data-layout-structure="component">
            <button className="page-link">2</button>
          </li>
          <li className="page-item" data-layout-structure="component">
            <button className="page-link">3</button>
          </li>
          <li className="page-item" data-layout-structure="component">
            <button className="page-link" aria-label="Next">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PostBlock;
