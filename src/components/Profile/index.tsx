import React from 'react';
import { useChallenge } from '../../contexts/ChallengeContext';

import { ProfileContainer } from './styles';

export function Profile() {
  const { level } = useChallenge();

  return (
    <ProfileContainer>
      <img src="https://github.com/kevinkobori.png" alt="Kevin Kobori"/>
      <div>
        <strong>Kevin Kobori</strong>
        <p>
          <img src="icons/level.svg" alt="Level icon"/>
          Level {level}
        </p>
      </div>
    </ProfileContainer>
  );
}