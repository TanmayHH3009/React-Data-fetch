
import PropTypes from 'prop-types';
import './card.css';

function Card({ title, body, userid  }) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{body}</p>
      <p className="card-content">{userid}</p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  userid: PropTypes.number.isRequired,
};

export default Card;
