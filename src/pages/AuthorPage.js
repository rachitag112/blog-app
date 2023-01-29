import Header from "../components/Header";
import { author } from "./Author";
import image from '../img/author.png'

const AuthorPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="inner-container">
          <h1 className="page-title">About the Author: {author.name}</h1>
          <div className="image">
            <img src={image} className="author-image" alt="" />
          </div>
          <div className="author-content">
            <p className="author-text">{author.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;
