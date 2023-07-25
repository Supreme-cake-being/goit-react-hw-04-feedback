import PropTypes from 'prop-types';
import shortid from 'shortid';
import { List, Button } from './Feedbackptions.styled';

const FeedbackOptions = ({ options = [], onLeaveFeedback }) => {
  return (
    <>
      <List>
        {options.map(option => {
          return (
            <li key={shortid.generate()}>
              <Button type="button" onClick={onLeaveFeedback} value={option}>
                {option}
              </Button>
            </li>
          );
        })}
      </List>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
