// import PropTypes from 'prop-types';
import React from 'react';
// import {
//   Description,
//   Avatar,
//   NameProfile,
//   ProfileInfo,
//   UserList,
//   UserCard,
//   UserLabel,
//   UserValue,
// } from './Profile.styled';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleIncrementNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleIncrementBed = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return Math.round((good / total) * 100);
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.handleIncrementGood}>
          Good
        </button>
        <button type="button" onClick={this.handleIncrementNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleIncrementBed}>
          Bad
        </button>
        <h3>Statistics</h3>
        <p>Good:{this.state.good}</p>
        <p>Neutral:{this.state.neutral}</p>
        <p>Bad:{this.state.bad}</p>
        <p>Total:{this.countTotalFeedback()}</p>
        <p>Positive feedback:{this.countPositiveFeedbackPercentage()}</p>
      </div>
    );
  }
}

export default Feedback;
// export const Profile = ({ username, tag, location, avatar, stats }) => {
//   return (
//     <Section>
//       <Description>
//         <Avatar src={avatar} alt="User avatar" />
//         <NameProfile>{username}</NameProfile>
//         <ProfileInfo>{tag}</ProfileInfo>
//         <ProfileInfo>{location}</ProfileInfo>
//       </Description>

//       <UserList>
//         <UserCard>
//           <UserLabel>Followers</UserLabel>
//           <UserValue>{stats.followers}</UserValue>
//         </UserCard>
//         <UserCard>
//           <UserLabel>Views</UserLabel>
//           <UserValue>{stats.views}</UserValue>
//         </UserCard>
//         <UserCard>
//           <UserLabel>Likes</UserLabel>
//           <UserValue>{stats.likes}</UserValue>
//         </UserCard>
//       </UserList>
//     </Section>
//   );
// };

// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.shape({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   }).isRequired,
// };
