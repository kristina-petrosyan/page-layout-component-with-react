import { useParams, Link } from "react-router";
import database from "../storage/database";
import AsidePartial from "../partials/AsidePartial";

function PostPage() {
  const { id } = useParams<{ id: string }>();
  const post = database.posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="row" data-layout-structure="builder">
        <div className="col" data-layout-structure="builder" data-content="main">
          <main data-layout-structure="partial">
            <div className="post" data-layout-structure="component">
              <h4 className="post-title-text">Post not found</h4>
              <Link to="/" className="btn btn-view-more">
                Back to Home
              </Link>
            </div>
          </main>
        </div>
      </div>
    );
  }

  const { title, body, tags, reactions, views } = post;
  const { likes, dislikes } = reactions;

  return (
    <div className="row" data-layout-structure="builder">
      <div className="col" data-layout-structure="builder" data-content="main">
        <main data-layout-structure="partial">
          <div
            className="post post--full"
            data-layout-structure="component"
            data-theme="light"
          >
            <Link to="/" className="btn btn-back">
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Posts
            </Link>
            <h2 className="post-title-text">{title}</h2>
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
        </main>
      </div>
      <div className="col" data-layout-structure="builder" data-content="aside">
        <AsidePartial />
      </div>
    </div>
  );
}

export default PostPage;
