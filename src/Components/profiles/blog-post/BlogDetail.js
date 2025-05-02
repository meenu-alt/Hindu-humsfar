import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Fetch single blog
    axios.get(`http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/blog.php?blog_id=${id}`)
      .then(res => {
        if (res.data) {
          setBlog(res.data);
        } else {
          setError('Blog not found.');
        }
      })
      .catch((err) => {
        console.error('Error fetching blog:', err);
        setError('Failed to load blog.');
      });

    // Fetch all blogs for sidebar
    axios.get(`http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/blog.php`)
      .then(res => {
        if (Array.isArray(res.data)) {
          setRecentBlogs(res.data.slice(0, 5));
          const uniqueCategories = [...new Set(res.data.map(b => b.blog_keyword.split(',')[0]?.trim()))];
          setCategories(uniqueCategories.filter(Boolean));
          setLoading(false);
        }
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-5">Loading blog post...</div>;
  if (error) return <div className="text-center py-5 text-danger">{error}</div>;
  if (!blog) return <div className="text-center py-5">No blog data available.</div>;

  return (
    <div className="container py-5">
      <style>{`
        .breadcrumb-nav a {
          text-decoration: none;
          color: #999;
        }
        .breadcrumb-nav a:hover {
          color: #cc3366;
        }
        .blog-title {
          font-weight: 700;
          font-size: 1.75rem;
          font-family: 'Georgia', serif;
        }
        .blog-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 20px;
        }
        .blog-description {
          font-size: 1.05rem;
          line-height: 1.9;
          color: #333;
        }
        .blog-description img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 15px 0;
        }
        .sidebar-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 15px;
          border-bottom: 1px solid #ccc;
          padding-bottom: 5px;
        }
        .category-item {
          font-size: 0.95rem;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          color: #444;
          cursor: pointer;
          transition: color 0.2s;
        }
        .category-item:hover {
          color: #cc3366;
        }
        .category-item::before {
          content: "»";
          color: #cc3366;
          margin-right: 8px;
        }
        .recent-post-wrapper {
          margin-bottom: 20px;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .recent-post-wrapper:hover {
          transform: translateX(5px);
        }
        .recent-thumbnail {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 5px;
          margin-right: 10px;
        }
        .recent-text {
          font-size: 0.95rem;
          font-weight: 600;
          color: #111;
        }
        .recent-date {
          font-size: 0.8rem;
          color: #999;
        }
        .sidebar {
          border-right: 1px solid #e0e0e0;
          padding-right: 30px;
        }
        @media (max-width: 992px) {
          .sidebar {
            border-right: none;
            padding-right: 0;
            margin-bottom: 40px;
          }
        }
        .blog-meta {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        .blog-date {
          color: #666;
          font-size: 0.9rem;
        }
        .blog-category {
          background-color: #fce4ec;
          color: #e53d5c;
          padding: 3px 10px;
          border-radius: 15px;
          font-size: 0.8rem;
          margin-left: 10px;
        }
        .list-group {
          border: none;
        }
      `}</style>

      <div className="row">
        <div className="col-lg-4 sidebar">
          <div className="mb-5">
            <div className="sidebar-title">Categories</div>
            <div className="list-group">
              {categories.map((cat, index) => (
                <div className="category-item" key={index}>{cat}</div>
              ))}
            </div>
          </div>

          <div>
            <div className="sidebar-title">Recent Posts</div>
            {recentBlogs.map((item, idx) => (
              <div key={idx} className="d-flex recent-post-wrapper">
                <img
                  src={`http://localhost/perfomdigi/hindu-humsfar-react/backend/${item.blog_img}`}
                  alt="Recent"
                  className="recent-thumbnail"
                />
                <div>
                  <div className="recent-text">{item.blog_name}</div>
                  <div className="recent-date">
                    {item.blog_date ? new Date(item.blog_date).toDateString() : ''}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-8">
          <nav className="breadcrumb-nav mb-3">
            <small>
              <Link to="/">Home</Link> / <Link to="/blog">Blog</Link>
            </small>
          </nav>
          
          <div className="blog-meta">
            <span className="blog-date">
              {blog.blog_date ? new Date(blog.blog_date).toDateString() : ''}
            </span>
            {blog.blog_keyword && (
              <span className="blog-category">
                {blog.blog_keyword.split(',')[0]?.trim()}
              </span>
            )}
          </div>
          
          <h2 className="blog-title mb-3">{blog.blog_name}</h2>
          
          <img
            src={`http://localhost/perfomdigi/hindu-humsfar-react/backend/${blog.blog_img}`}
            alt="Blog"
            className="blog-image"
          />
          
          <div
            className="blog-description"
            dangerouslySetInnerHTML={{ __html: blog.blog_desc }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;