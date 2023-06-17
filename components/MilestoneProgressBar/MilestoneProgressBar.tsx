import React from 'react';

type Props = {
  milestoneNumber: number; // Add milestoneNumber as a prop
};

const MilestoneProgressBar = (props: Props) => {
  const { milestoneNumber } = props; // Destructure the milestoneNumber prop

  const calculateProgressWidth = (milestoneNumber: number) => {
    const MAX_PROGRESS_WIDTH = 100; // Maximum width of the progress bar in percentage
    const progressPercentage = (milestoneNumber / 5) * 100; // Calculate percentage progress
    return `${progressPercentage}%`;
  };

  return (
    <div className='milestone-progressbar'>
      {[...Array(5)].map((_, index) => (
        <div
          className={`milestone-progressbar__milestone ${
            index < milestoneNumber ? 'active' : ''
          }`}
          key={index}
        ></div>
      ))}
      <div
        className='milestone-progressbar__progress'
        style={{ width: calculateProgressWidth(milestoneNumber) }}
      ></div>
    </div>
  );
};

export default MilestoneProgressBar;
