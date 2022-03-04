import '../styles/pagination.css';
import { Link } from 'react-router-dom';

function Pagination() {
  const currentPage = parseInt(window.location.pathname.slice(-1));
  return (
    <div className="pagination">
      <Link to={currentPage === 1 ? '/' : `/survey/${currentPage - 1}`}>
        <div className="pagination-arrow prev">
          <div className="pagination-arrow-up"></div>
          <div className="pagination-arrow-down"></div>
        </div>
      </Link>
      {currentPage > 1 ? (
        <Link to="/survey/1">
          <div className="pagination-circle active"></div>
        </Link>
      ) : (
        <div className={`pagination-circle ${currentPage >= 1 && 'active'}`}></div>
      )}

      {currentPage > 2 ? (
        <Link to="/survey/2">
          <div className="pagination-circle active"></div>
        </Link>
      ) : (
        <div className={`pagination-circle ${currentPage >= 2 && 'active'}`}></div>
      )}

      {currentPage > 3 ? (
        <Link to="/survey/3">
          <div className="pagination-circle active"></div>
        </Link>
      ) : (
        <div className={`pagination-circle ${currentPage >= 3 && 'active'}`}></div>
      )}
      {currentPage > 4 ? (
        <Link to="/survey/4">
          <div className="pagination-circle active"></div>
        </Link>
      ) : (
        <div className={`pagination-circle ${currentPage >= 4 && 'active'}`}></div>
      )}

      <div className={`pagination-circle ${currentPage === 5 && 'active'}`}></div>

      <Link to={`/survey/${currentPage + 1}`}>
        <div className="pagination-arrow next">
          <div className="pagination-arrow-up"></div>
          <div className="pagination-arrow-down"></div>
        </div>
      </Link>
    </div>
  );
}

export default Pagination;
