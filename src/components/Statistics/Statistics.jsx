import PropTypes from 'prop-types';
import { List, Item } from './Statistics.styled';

const Statistics = ({ stats, total, positivePercentage }) => {
  return (
    <>
      <List>
        {Object.entries(stats).map(([key, value]) => {
          return (
            <Item key={key}>
              <span>{key}: </span>
              <span>{value}</span>
            </Item>
          );
        })}

        <Item key="total">
          <span>total: </span>
          <span>{total}</span>
        </Item>

        <Item key="percentage">
          <span>positive feedback: </span>
          <span>{positivePercentage ? positivePercentage + '%' : 0}</span>
        </Item>
      </List>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  stats: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
