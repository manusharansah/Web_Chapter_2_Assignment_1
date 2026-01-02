import React, { useState } from 'react';

const PortfolioBlog = () => {
  const [currentPage, setCurrentPage] = useState('index');
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    rating: ''
  });

  const blogData = [
    {
      id: 1,
      title: "My Journey to IOE Rank 1: Strategy & Preparation",
      excerpt: "How I secured Rank 1 in IOE Entrance 2080 and what it taught me about persistence and smart preparation.",
      date: "November 10, 2023",
      author: "Manu Sharan Kumar",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      content: `
        <p>Securing Rank 1 in the IOE Entrance Examination 2080 was a defining moment in my academic journey. The preparation wasn't just about studying hard—it was about studying smart, staying consistent, and maintaining the right mindset throughout the process.</p>
        
        <h3>The Preparation Strategy</h3>
        <p>My preparation focused on three key pillars: understanding core concepts deeply, practicing extensively, and maintaining a balanced routine. I didn't just memorize formulas; I made sure I understood the 'why' behind every concept.</p>
        <ul>
          <li><strong>Conceptual Clarity:</strong> Focused on building strong fundamentals in Physics, Chemistry, and Mathematics</li>
          <li><strong>Consistent Practice:</strong> Solved previous year questions and took regular mock tests</li>
          <li><strong>Time Management:</strong> Created a realistic study schedule that I could sustain</li>
          <li><strong>Revision Cycles:</strong> Implemented spaced repetition for better retention</li>
        </ul>
        
        <h3>Key Takeaways</h3>
        <p>The journey taught me that success isn't about being the smartest person in the room—it's about being the most persistent. Every problem I couldn't solve became a learning opportunity. Every mock test that didn't go well became a chance to identify my weaknesses.</p>
        
        <h3>Advice for Future Aspirants</h3>
        <p>Start early, stay consistent, and don't compare your progress with others. Focus on your own growth. Most importantly, take care of your mental and physical health. A healthy mind performs better than a stressed one.</p>
        
        <p>Remember: Your rank doesn't define your worth, but the journey will shape who you become.</p>
      `
    },
    {
      id: 2,
      title: "Building a Student Performance Prediction Model with Machine Learning",
      excerpt: "A deep dive into my ML project that predicts student academic performance using various factors.",
      date: "December 5, 2024",
      author: "Manu Sharan Kumar",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      content: `
        <p>As part of my journey into Machine Learning, I developed a Student Performance Prediction Model in collaboration with my friend <a href="https://github.com/bishal-777/">Bishal Giri</a> that analyzes various factors affecting academic success. This project combines my interest in education and data science.</p>
        
        <h3>Project Overview</h3>
        <p>The model uses machine learning algorithms to predict student performance based on factors like study time, previous grades, parental education, and other demographic information. It's built using Python with libraries like Pandas, NumPy, scikit-learn, and Seaborn for visualization.</p>
        
        <h3>Technical Implementation</h3>
        <ul>
          <li><strong>Data Processing:</strong> Cleaned and preprocessed the dataset using Pandas</li>
          <li><strong>Feature Engineering:</strong> Identified and created relevant features for better prediction accuracy</li>
          <li><strong>Model Selection:</strong> Tested multiple algorithms including Linear Regression, Random Forest, and SVM</li>
          <li><strong>Visualization:</strong> Created insightful visualizations using Seaborn and Matplotlib</li>
        </ul>
        
        <h3>Key Learnings</h3>
        <p>This project taught me the importance of data quality and feature selection in machine learning. I learned that sometimes simpler models perform better than complex ones, and that understanding your data is more important than knowing fancy algorithms.</p>
        
        <h3>Real-World Impact</h3>
        <p>Such models can help educational institutions identify at-risk students early and provide timely interventions. They can also help students understand what factors most significantly impact their academic success.</p>
        
        <p>The complete code is available on my GitHub repository. Feel free to check it out and contribute!</p>
      `
    },
    {
      id: 3,
      title: "Python Learning Path: From Basics to Building Projects",
      excerpt: "My structured approach to mastering Python through hands-on projects and consistent practice.",
      date: "December 20, 2024",
      author: "Manu Sharan Kumar",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
      content: `
        <p>Python has been my primary programming language, and my journey with it has been both challenging and rewarding. From building simple mini-games to developing machine learning models, Python has been my gateway to the world of software development.</p>
        
        <h3>Starting with the Fundamentals</h3>
        <p>I began with the basics: variables, data types, control structures, and functions. But I didn't just read about them—I implemented them in small projects. This hands-on approach helped solidify my understanding.</p>
        
        <h3>Building Mini-Games</h3>
        <p>One of the most fun parts of my Python journey was creating mini-games. These projects taught me about:</p>
        <ul>
          <li><strong>Logic Building:</strong> Breaking down game mechanics into code</li>
          <li><strong>User Input Handling:</strong> Creating interactive experiences</li>
          <li><strong>Code Organization:</strong> Structuring projects for maintainability</li>
          <li><strong>Debugging:</strong> Finding and fixing issues systematically</li>
        </ul>
        
        <h3>Advancing to Data Science</h3>
        <p>As I grew more comfortable with Python, I explored libraries like Pandas for data manipulation, NumPy for numerical computing, and scikit-learn for machine learning. Each library opened new possibilities.</p>
        
        <h3>Problem-Solving on LeetCode</h3>
        <p>I've solved 30+ coding challenges on LeetCode, which has significantly improved my algorithmic thinking and problem-solving skills. Each problem teaches you a new pattern or technique.</p>
        
        <h3>My Advice</h3>
        <p>Don't just watch tutorials—build things. Start small, but start building from day one. Every project, no matter how simple, teaches you something valuable. And don't be afraid to break things; that's how you learn!</p>
        
        <p>Check out my GitHub for all my Python projects, from beginner-friendly mini-games to more advanced ML implementations.</p>
      `
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '', rating: '' });
  };

  const renderHero = () => (
    <section className="bg-primary text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-10 mx-auto text-center">
            <h1 className="display-4 fw-bold mb-3">Hello, I'm Manu Sharan Kumar</h1>
            <p className="lead mb-3">Computer Engineering Student | IOE Topper 2080 (Rank 1) | Tech Enthusiast</p>
            <p className="mb-4">Passionate about building intelligent systems and solving real-world problems through code</p>
            <div>
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-light btn-lg me-3 mb-2">Learn More</button>
              <button onClick={() => { setCurrentPage('blog_list'); window.scrollTo(0, 0); }} className="btn btn-outline-light btn-lg mb-2">View Blog</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderAbout = () => (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="mb-4">About Me</h2>
            <p>I'm Manu Sharan Kumar, a Computer Engineering student at Advanced College of Engineering and Management (ACEM), Tribhuvan University. As the IOE Entrance Topper 2080 with Rank 1, I've demonstrated my commitment to academic excellence and problem-solving.</p>
            <p>Currently in my 5th semester, I am specializing in Machine Learning and Artificial Intelligence while maintaining a strong focus on software development and product innovation. My journey in tech began with a curiosity to understand how things work, which has now evolved into building practical solutions using modern technologies.</p>
            <p>I actively engage in competitive programming with 30+ solved challenges on LeetCode, participate in hackathons, and contribute to open-source projects on GitHub. My goal is to leverage technology to create meaningful impact and solve real-world problems.</p>
          </div>
        </div>
      </div>
    </section>
  );

  const renderSkills = () => (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2 className="mb-4 text-center">Technical Skills</h2>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Programming Languages</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">🐍 Python (Primary)</li>
                      <li className="mb-2">💻 JavaScript</li>
                      <li className="mb-2">⚙️ C/C++</li>
                      <li className="mb-2">🌐 HTML/CSS</li>
                      <li className="mb-2">🐘 PHP</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">ML/Data Science</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">📊 Pandas</li>
                      <li className="mb-2">🔢 NumPy</li>
                      <li className="mb-2">🤖 scikit-learn</li>
                      <li className="mb-2">📈 Seaborn/Matplotlib</li>
                      <li className="mb-2">🧠 ML Algorithms</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Tools & Technologies</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">📝 Git & GitHub</li>
                      <li className="mb-2">🔧 Arduino</li>
                      <li className="mb-2">📡 ESP8266</li>
                      <li className="mb-2">💾 MySQL</li>
                      <li className="mb-2">🍃 MongoDB</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Development Focus</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">🎯 Problem Solving (30+ LeetCode)</li>
                      <li className="mb-2">🚀 Software Development</li>
                      <li className="mb-2">📱 Product Development</li>
                      <li className="mb-2">🏆 Hackathons</li>
                      <li className="mb-2">🌟 Open Source</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderAcademics = () => (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="mb-4">Academic Qualifications</h2>
            
            <div className="mb-4">
              <h4>Bachelor in Computer Engineering</h4>
              <p className="text-muted mb-2">Advanced College of Engineering and Management - Tribhuvan University | Nov 2023 - Present</p>
              <p>Currently in 4th semester, specializing in ML/AI with strong focus on Software Development and Product Development.</p>
              <ul>
                <li>First Semester GPA: 4.00</li>
                <li>Second Semester GPA: 3.92</li>
                <li>Third Semester GPA: 3.93</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4>Higher Secondary Education (+2)</h4>
              <p className="text-muted mb-2">Moonlight Secondary School - NEB | July 2021 - Sep 2023</p>
              <ul>
                <li>Grade XI GPA: 3.96</li>
                <li>Grade XII GPA: 3.92</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4>Secondary Education (SEE)</h4>
              <p className="text-muted mb-2">Paribodh Boarding High School - NEB | June 2021</p>
              <p>Perfect GPA: 4.00</p>
            </div>

            <div>
              <h4>Achievements</h4>
              <ul>
                <li><strong>IOE Entrance Topper 2080 (2023)</strong> - Rank 1</li>
                <li><strong>LeetCode</strong> - 30+ problems solved</li>
                <li><strong>GitHub Projects</strong> - ML Projects & Python games</li>
                <li><strong>Hackathons</strong> - Active participant</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderProjects = () => (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2 className="mb-4 text-center">Projects</h2>
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Student Performance Prediction</h5>
                    <p className="card-text">ML model using Pandas, NumPy, and scikit-learn to predict academic performance.</p>
                    <span className="badge bg-success">Machine Learning</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Python Mini-Games</h5>
                    <p className="card-text">Collection of interactive games demonstrating core programming concepts.</p>
                    <span className="badge bg-info">Game Dev</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Multi-Language Projects</h5>
                    <p className="card-text">Projects across C/C++, JavaScript, and PHP.</p>
                    <span className="badge bg-warning text-dark">Multi-Lang</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderContact = () => (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="mb-4">Get In Touch</h2>
            <p className="mb-4">Have a question or want to collaborate? Feel free to reach out!</p>
            
            <div className="row mb-4">
              <div className="col-md-6 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">📧 Email</h5>
                    <p className="card-text">manu.080bct37@acem.edu.np</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">📱 Phone</h5>
                    <p className="card-text">+977-9863483016</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" required />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" className="form-control" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="What's this about?" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleInputChange} rows="5" placeholder="Your message..." required></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Rate your experience</label>
                <div>
                  {['Poor', 'Fair', 'Good', 'Excellent'].map((rating, idx) => (
                    <div key={idx} className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="rating" id={`rating${idx+1}`} value={`${idx+1}`} checked={formData.rating === `${idx+1}`} onChange={handleInputChange} />
                      <label className="form-check-label" htmlFor={`rating${idx+1}`}>{rating}</label>
                    </div>
                  ))}
                </div>
              </div>
              <button type="button" onClick={handleSubmit} className="btn btn-primary">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderIndex = () => (
    <div>
      {renderHero()}
      {renderAbout()}
      {renderSkills()}
      {renderAcademics()}
      {renderProjects()}
      {renderContact()}
    </div>
  );

  const renderBlogList = () => (
    <section className="py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <h1 className="display-5 mb-3">Blog</h1>
            <p className="lead text-muted">Thoughts, stories, and experiences from my journey in tech</p>
          </div>
        </div>
        <div className="row g-4">
          {blogData.map(blog => (
            <div key={blog.id} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <img src={blog.image} className="card-img-top" alt={blog.title} style={{height: '200px', objectFit: 'cover'}} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text text-muted small mb-2">{blog.date}</p>
                  <p className="card-text">{blog.excerpt}</p>
                  <button onClick={() => { setSelectedBlog(blog); setCurrentPage('blog_detail'); window.scrollTo(0, 0); }} className="btn btn-primary mt-auto">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderBlogDetail = () => {
    if (!selectedBlog) return null;
    return (
      <article className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <button onClick={() => { setCurrentPage('blog_list'); window.scrollTo(0, 0); }} className="btn btn-link text-decoration-none mb-3">
                ← Back to Blog List
              </button>
              <img src={selectedBlog.image} alt={selectedBlog.title} className="img-fluid rounded mb-4" style={{width: '100%', height: '400px', objectFit: 'cover'}} />
              <h1 className="display-4 mb-3">{selectedBlog.title}</h1>
              <div className="d-flex align-items-center text-muted mb-4">
                <span className="me-3">By {selectedBlog.author}</span>
                <span>•</span>
                <span className="ms-3">{selectedBlog.date}</span>
              </div>
              <div className="blog-content" dangerouslySetInnerHTML={{__html: selectedBlog.content}} />
              <hr className="my-5" />
              <div className="bg-light p-4 rounded">
                <h4 className="mb-3">About the Author</h4>
                <p className="mb-0"><strong>{selectedBlog.author}</strong> is a Computer Engineering student, IOE Topper 2080, and Tech enthusiast who loves sharing knowledge through writing.</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <style>{`
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; }
        .navbar { box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card:hover { transform: translateY(-5px); box-shadow: 0 8px 16px rgba(0,0,0,0.2) !important; }
        .blog-content h3 { margin-top: 1.5rem; margin-bottom: 1rem; color: #2c3e50; }
        .blog-content p { line-height: 1.8; margin-bottom: 1rem; }
        .blog-content ul { margin-bottom: 1rem; line-height: 1.8; }
        .btn { transition: all 0.3s ease; }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0,0,0,0.2); }
        footer { margin-top: auto; background-color: #f8f9fa; }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('index'); window.scrollTo(0, 0); }}>Manu.dev</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className={`nav-link ${currentPage === 'index' ? 'active' : ''}`} href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('index'); window.scrollTo(0, 0); }}>Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${currentPage === 'blog_list' ? 'active' : ''}`} href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('blog_list'); window.scrollTo(0, 0); }}>Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={(e) => { if (currentPage !== 'index') { e.preventDefault(); setCurrentPage('index'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); } }}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main style={{flex: 1}}>
        {currentPage === 'index' && renderIndex()}
        {currentPage === 'blog_list' && renderBlogList()}
        {currentPage === 'blog_detail' && renderBlogDetail()}
      </main>

      <footer className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="mb-0">&copy; 2024 Manu Sharan Kumar. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <a href="https://github.com/manusharansah/" className="text-decoration-none me-3">GitHub</a>
              <a href="https://www.linkedin.com/in/manusharansah/" className="text-decoration-none me-3">LinkedIn</a>
              <a href="https://leetcode.com/manusharansah/" className="text-decoration-none">LeetCode</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioBlog;