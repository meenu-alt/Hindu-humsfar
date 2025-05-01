import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Form, Card, Pagination } from 'react-bootstrap';
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
        
        // Check if the response is valid
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

  // Get featured blogs (first 4)
  const featuredBlogs = blogs.slice(0, 4);
  
  // Get paginated articles
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = blogs.slice(startIndex, startIndex + articlesPerPage);

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Container className="blog-page py-5">
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
        }
        .article-card .card-body {
          display: flex;
          flex-direction: column;
        }
        .article-card .card-text {
          flex-grow: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .no-blogs {
          text-align: center;
          padding: 40px;
          color: #666;
        }
      `}</style>

      {/* Search Section */}
      <div className="text-center">
        <div className="blog-badge">Blog</div>
        <h3 className="blog-title">
          Discover Our Latest <span className="highlight">Articles</span>
        </h3>
        <p className="blog-subtitle">
          Lacinia Viverra Lectus. Fusce Imperdiet Ullamcorper Metus <br />
          Eu Fringilla
        </p>

        <Form className="search-bar mx-auto my-4" onSubmit={handleSearchSubmit}>
          <div className="search-wrapper">
            <Form.Control
              type="text"
              placeholder="What are you looking for?"
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit" className="search-btn">
              <FaSearch />
            </Button>
          </div>
        </Form>

        <div className="trending-topics mb-5">
          <span className="trending-label">Trending Topics:</span>
          {['All', 'Wedding', 'Matrimonial', 'Relationship'].map((topic, i) => (
            <Button
              key={i}
              variant={searchTerm === topic || (topic === 'All' && !searchTerm) ? 'danger' : 'light'}
              className="mx-1 my-1"
              onClick={() => {
                setSearchTerm(topic === 'All' ? '' : topic);
                setCurrentPage(1);
              }}
            >
              {topic}
            </Button>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      {featuredBlogs.length > 0 && (
        <>
          <h4 className="section-heading">Featured</h4>
          <Row className="mb-5">
            {featuredBlogs.map((item, i) => (
              <Col md={3} sm={6} key={i} className="mb-4">
                <div 
                  className="featured-card" 
                  style={{ 
                    backgroundImage: `url(http://localhost/perfomdigi/hindu-humsfar-react/backend/${item.blog_img})`
                  }}
                >
                  <div className="overlay">
                    <span className="tag">{item.blog_keyword.split(',')[0]?.trim() || 'Blog'}</span>
                    <h5>{item.blog_name}</h5>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </>
      )}

      {/* Recent Articles */}
      <h4 className="section-heading">
        Recent <span className="highlight">Articles</span>
      </h4>
      <Row>
        {loading ? (
          <div className="text-center w-100 py-5">Loading...</div>
        ) : paginatedArticles.length > 0 ? (
          paginatedArticles.map((article, i) => (
            <Col md={4} sm={6} key={i} className="mb-4">
              <Card className="article-card">
                <Card.Img 
                  variant="top" 
                  src={`http://localhost/perfomdigi/hindu-humsfar-react/backend/${article.blog_img}`}
                />
                <Card.Body>
                  <Card.Title>{article.blog_name}</Card.Title>
                  <Card.Text className="text-muted small mb-2">
                    {formatDate(article.created_at)}
                  </Card.Text>
                  <Card.Text className="text-truncate">
                    {article.blog_desc.replace(/<[^>]*>/g, '').substring(0, 150)}...
                  </Card.Text>
                  <Button variant="outline-danger" size="sm" className="mt-auto align-self-start">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div className="no-blogs w-100">
            <h5>No articles found</h5>
            <p>Try a different search term or check back later</p>
          </div>
        )}
      </Row>

      {/* Pagination - Only show if there are multiple pages */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-4">
          <Pagination>
            <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
            <Pagination.Prev onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} />
            {[...Array(totalPages)].map((_, i) => (
              <Pagination.Item
                key={i + 1}
                active={currentPage === i + 1}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} />
            <Pagination.Last onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} />
          </Pagination>
        </div>
      )}
    </Container>
  );
};

export default BlogPage;