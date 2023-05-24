import PropTypes from 'prop-types';

const Title = (props) => {
  return <TextTitle {...props}>{props.title}</TextTitle>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  padding: PropTypes.string,
};

export default Title;
