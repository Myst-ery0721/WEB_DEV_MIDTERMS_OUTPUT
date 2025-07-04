import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Home.css';


export default function Article({ articles }) {
  const { urlId } = useParams();
  const navigate = useNavigate();

  const article = articles.find(({ id }) => id === urlId);

  useEffect(() => {
    if (!article) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 2000);
      return () => clearTimeout(timer); 
    }
  }, [article, navigate]);

  return (
    <div className="article-detail">
      {!article && <p>No records found!</p>}

      {article && (
        <div key={article.id}>
          <h2>{article.title}</h2>
          {article.imageUrl && (
            <img
              src={article.imageUrl}
              alt={article.title}
              className="article-img"
              // style={{
              //   width: "100%",
              //   maxWidth: "600px",
              //   height: "auto",
              //   borderRadius: "10px",
              //   margin: "1rem 0",
              // }}
            />
          )}

          <p><strong> PRICE = </strong> {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}
