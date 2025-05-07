import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const articlesPerPage = 6;

  const fetchData = async (page = 1, search = "") => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost/perfomdigi/hindu-humsfar-react/backend/admin-mat/api/blog.php`);

      if (res.data && Array.isArray(res.data)) {
        const filteredBlogs = search
          ? res.data.filter(blog =>
              blog.blog_name.toLowerCase().includes(search.toLowerCase()) ||
              blog.blog_keyword.toLowerCase().includes(search.toLowerCase()))
          : res.data;

        setBlogs(filteredBlogs);
        setTotalPages(Math.ceil(filteredBlogs.length / articlesPerPage));
      } else {
        console.error('Invalid response format:', res.data);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage, searchTerm);
  }, [currentPage, searchTerm]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchData(1, searchTerm);
  };

  const featuredBlogs = blogs.slice(0, 4);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = blogs.slice(startIndex, startIndex + articlesPerPage);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container blog-page py-5">
      <style>{`
        .blog-badge {
          display: inline-block;
          background-color: #fce4ec;
          color: #333;
          font-size: 14px;
          padding: 5px 12px;
          border-radius: 4px;
        }
        .blog-title {
          font-size: 2rem;
          margin-top: 10px;
        }
        .blog-title .highlight {
          color: #e53d5c;
        }
        .blog-subtitle {
          color: #555;
          font-size: 1rem;
        }
        .search-wrapper {
          display: flex;
          max-width: 500px;
          margin: 0 auto;
          border: 1px solid #ccc;
          border-radius: 22px;
          overflow: hidden;
        }
        .search-input {
          border: none;
          padding: 10px 15px;
          flex-grow: 1;
          font-size: 16px;
        }
        .search-btn {
          background-color: #e53d5c;
          border: none;
          color: white;
          padding: 10px 18px;
          font-size: 18px;
        }
        .trending-label {
          margin-right: 10px;
        }
        .section-heading {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .featured-card {
          height: 250px;
          background-size: cover;
          background-position: center;
          border-radius: 15px;
          position: relative;
          overflow: hidden;
        }
        .featured-card .overlay {
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          color: white;
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 15px;
        }
        .featured-card .tag {
          background-color: white;
          color: black;
          padding: 2px 10px;
          font-size: 12px;
          border-radius: 15px;
          display: inline-block;
          margin-bottom: 8px;
        }
        .article-card {
          border: 1px solid #eee;
          border-radius: 10px;
          transition: 0.3s;
          height: 100%;
          margin-bottom: 20px;
        }
        .article-card:hover {
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          transform: translateY(-5px);
        }
        .article-card img {
          height: 200px;
          object-fit: cover;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          width: 100%;
        }
        .card-body {
          padding: 15px;
          display: flex;
          flex-direction: column;
        }
        .card-title {
          font-size: 1.1rem;
          margin-bottom: 10px;
        }
        .card-text {
          flex-grow: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          color: #555;
          font-size: 0.9rem;
          margin-bottom: 15px;
        }
        .no-blogs {
          text-align: center;
          padding: 40px;
          color: #666;
        }
        .read-more-btn {
          margin-top: auto;
          align-self: flex-start;
          font-size: 0.8rem;
          padding: 5px 10px;
        }
        .pagination {
          justify-content: center;
          margin-top: 30px;
        }
        .page-item.active .page-link {
          background-color: #e53d5c;
          border-color: #e53d5c;
        }
        .page-link {
          color: #e53d5c;
        }
      `}</style>

      <div className="text-center">
        <div className="blog-badge">Blog</div>
        <h3 className="blog-title">
          Discover Our Latest <span className="highlight">Articles</span>
        </h3>
        <p className="blog-subtitle">
          Lacinia Viverra Lectus. Fusce Imperdiet Ullamcorper Metus <br />
          Eu Fringilla
        </p>

        <form className="search-bar mx-auto my-4" onSubmit={handleSearchSubmit}>
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="search-btn">
              <FaSearch />
            </button>
          </div>
        </form>

        <div className="trending-topics mb-5">
          <span className="trending-label">Trending Topics:</span>
          {['All', 'Wedding', 'Matrimonial', 'Relationship'].map((topic, i) => (
            <button
              key={i}
              className={`btn mx-1 my-1 ${searchTerm === topic || (topic === 'All' && !searchTerm) ? 'btn-danger' : 'btn-light'}`}
              onClick={() => {
                setSearchTerm(topic === 'All' ? '' : topic);
                setCurrentPage(1);
              }}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {featuredBlogs.length > 0 && (
        <>
          <h4 className="section-heading">Featured</h4>
          <div className="row mb-5">
            {featuredBlogs.map((item, i) => (
              <div className="col-md-3 col-sm-6 mb-4" key={i}>
                <div 
                  className="featured-card" 
                  style={{ 
                    backgroundImage: `url(http://localhost/perfomdigi/hindu-humsfar-react/backend/${item.blog_img})`
                  }}
                >
                  <div className="overlay">
                    <span className="tag">{item.blog_keyword.split(',')[0]?.trim() || 'Blog'}</span>
                    <h5 className='text-light'> {item.blog_name}</h5>
                  </div>
                  <Link 
                    to={`/blog/${item.blog_id}`}
                    className="btn btn-outline-danger read-more-btn"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <h4 className="section-heading">
        Recent <span className="highlight">Articles</span>
      </h4>
      <div className="row">
        {loading ? (
          <div className="text-center w-100 py-5">Loading...</div>
        ) : paginatedArticles.length > 0 ? (
          paginatedArticles.map((article, i) => (
            <div className="col-md-4 col-sm-6" key={i}>
              <div className="article-card">
                <img 
                  src={`http://localhost/perfomdigi/hindu-humsfar-react/backend/${article.blog_img}`}
                  alt={article.blog_name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{article.blog_name}</h5>
                  <small className="text-muted mb-2">
                    {formatDate(article.blog_date || article.created_at)}
                  </small>
                  <p className="card-text">
                    {article.blog_desc.replace(/<[^>]*>/g, '').substring(0, 150)}...
                  </p>
                  <Link 
                    to={`/blog/${article.blog_id}`}
                    className="btn btn-outline-danger read-more-btn"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-blogs w-100">
            <h5>No articles found</h5>
            <p>Try a different search term or check back later</p>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(1)}>
                &laquo;
              </button>
            </li>
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
                &lsaquo;
              </button>
            </li>
            {[...Array(totalPages)].map((_, i) => (
              <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}>
                &rsaquo;
              </button>
            </li>
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => setCurrentPage(totalPages)}>
                &raquo;
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default BlogPage;