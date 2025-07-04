import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import './Home.css'

export default function Home({articles}) {

  return (
    <div className="home">
      <h2>Shop Catalog</h2>      
      {articles && articles.map(article => (
        <div key={article.id} className="card">
          <h3>{article.title}</h3>

    {article.imageUrl && (
      <img
        src={article.imageUrl}
        alt={article.title}
        className="article-img"
      />
    )}

          <p>PRICE = {article.author}</p>
          <Link to={`/articles/${article.id}`}>Read More...</Link>
        </div>
      ))}
    </div>
  )
}
