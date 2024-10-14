import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Header Component
const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">TechFaith Insights</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Topics
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// BlogPost Component
const BlogPost = ({ title, excerpt, image, current }) => {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-500 ${
        current ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          filter: "brightness(50%) blur(5px)",
        }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center max-w-2xl p-8">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl">{excerpt}</p>
          <button className="mt-6 bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentPost, setCurrentPost] = useState(0);
  const [posts] = useState([
    {
      id: 1,
      title: "AI and Religious Ethics: A Modern Dialogue",
      excerpt:
        "Exploring the nuanced intersection of artificial intelligence and centuries-old religious principles in today's rapidly evolving technological landscape.",
      image: "/api/placeholder/1200/800",
    },
    {
      id: 2,
      title: "Virtual Sanctuaries: The Future of Worship?",
      excerpt:
        "Examining how virtual and augmented reality technologies are reshaping religious practices and creating new forms of spiritual community.",
      image: "/api/placeholder/1200/800",
    },
    {
      id: 3,
      title: "Blockchain and Faith-Based Philanthropy",
      excerpt:
        "Analyzing the potential of blockchain technology to revolutionize religious charitable giving through enhanced transparency and global accessibility.",
      image: "/api/placeholder/1200/800",
    },
  ]);

  const nextPost = () => {
    setCurrentPost((prev) => (prev + 1) % posts.length);
  };

  const prevPost = () => {
    setCurrentPost((prev) => (prev - 1 + posts.length) % posts.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow relative">
        <img
          src="/Landing.png"
          alt="Landing"
          className="w-full h-64 object-cover"
        />
        <div className="relative h-full">
          {posts.map((post, index) => (
            <BlogPost key={post.id} {...post} current={index === currentPost} />
          ))}
          <button
            onClick={prevPost}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextPost}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
