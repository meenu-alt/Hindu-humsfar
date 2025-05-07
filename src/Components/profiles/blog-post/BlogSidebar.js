import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogSideBar = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

  

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


  return (
<>
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
                <Link to={`/blog-detail/${item.blog_id}`} className="recent-text">{item.blog_name}</Link>
                  <div className="recent-date">
                    {item.blog_date ? new Date(item.blog_date).toDateString() : ''}
                  </div>
            
                </div>
              </div>
            ))}
          </div>
          <style>
            {`.sidebar-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 15px;
          border-bottom: 1px solid #ccc;
          padding-bottom: 5px;
        }
         .sidebar {
          border-right: 1px solid #e0e0e0;
          padding-right: 30px;
        } @media (max-width: 992px) {
          .sidebar {
            border-right: none;
            padding-right: 0;
            margin-bottom: 40px;
          }
        }`}
          </style>
       
</>
 
  );
};

export default BlogSideBar;