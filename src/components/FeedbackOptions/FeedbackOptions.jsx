import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { List, Button } from './Feedbackptions.styled';

class FeedbackOptions extends Component {
  static defaultProps = {
    options: [],
  };

  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
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
  }
}

export default FeedbackOptions;
