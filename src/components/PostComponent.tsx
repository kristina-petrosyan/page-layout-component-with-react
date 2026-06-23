import type { Post } from "../types/post.types";

interface PostComponentProps {
  post: Post;
  themes?: "light" | "dark";
}

function PostComponent(props: PostComponentProps) {
  const { post, themes } = props;
  const { title, body, tags, reactions, views } = post;
  const { likes, dislikes } = reactions;

  return (
    <div
      className="post"
      data-layout-structure="component"
      data-theme={themes || "light"}
    >
      <h4 className="post-title-text">{title}</h4>
      <p className="post-body">{body}</p>
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="post-meta">
        <div className="post-reactions">
          <span className="reaction">
            👍 <strong>{likes}</strong>
          </span>
          <span className="reaction">
            👎 <strong>{dislikes}</strong>
          </span>
        </div>
        <span className="post-views">👁 {views} views</span>
      </div>
    </div>
  );
}

export default PostComponent;
