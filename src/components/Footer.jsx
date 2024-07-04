
import PropTypes from 'prop-types';
import './footer.css';

function Footer({ year }) {
  return (
    <div className="footer">
      Copyright reserved || {year}
    </div>
  );
}

Footer.propTypes = {
  year: PropTypes.number.isRequired,
};

export default Footer;
