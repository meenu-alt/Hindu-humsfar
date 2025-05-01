import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/blog.php?id=${id}`)
      .then(res => res.data && setBlog(res.data))
      .catch(err => console.error(err));

    axios.get(`http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/blog.php`)
      .then(res => {
        if (Array.isArray(res.data)) {
          setRecentBlogs(res.data.slice(0, 5));
          const uniqueCategories = [...new Set(res.data.map(b => b.blog_keyword.split(',')[0]?.trim()))];
          setCategories(uniqueCategories);
        }
      }).catch(err => console.error(err));
  }, [id]);

  if (!blog) return <div className="text-center py-5">Loading...</div>;

  return (
    <Container className="py-5">
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
          object-fit: cover;
          border-radius: 10px;
        }
        .blog-description {
          font-size: 1.05rem;
          line-height: 1.9;
          color: #333;
          white-space: pre-line;
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
        }
        .category-item::before {
          content: "»";
          color: #cc3366;
          margin-right: 8px;
        }
        .recent-post-wrapper {
          margin-bottom: 20px;
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
      `}</style>

      <Row>
        <Col lg={4} className="sidebar">
          <div className="mb-5">
            <div className="sidebar-title">Categories</div>
            <ListGroup variant="flush">
              {categories.map((cat, index) => (
                <div className="category-item" key={index}>{cat}</div>
              ))}
            </ListGroup>
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
                  <div className="recent-date">{new Date(item.blog_date).toDateString()}</div>
                </div>
              </div>
            ))}
          </div>
        </Col>

        <Col lg={8}>
          <nav className="breadcrumb-nav mb-3">
            <small>
              <a href="/">Home</a> / <a href="/blog">Blog</a>
            </small>
          </nav>
          <h2 className="blog-title mb-3">{blog.blog_name}</h2>
          <p className="text-muted">{new Date(blog.blog_date).toDateString()}</p>
          <Image 
            src={`http://localhost/perfomdigi/hindu-humsfar-react/backend/${blog.blog_img}`} 
            alt="Blog" 
            className="blog-image mb-4 shadow-sm" 
          />
          <div className="blog-description">{blog.blog_desc}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogDetail;
