import React, { useMemo } from 'react';
import { Wrapper } from '@components/room/games/GameMenu.style';
import GameBox from '@components/room/games/GameBox';
import { GameIcon } from '@components/icons';

type GameMenuPropTypes = {
  startGamesRef: React.MutableRefObject<Object>;
};
const GameMenu: React.FC<GameMenuPropTypes> = ({ startGamesRef }) => {
  const GameList = useMemo(
    () => [
      //아이콘, 설명은 임시
      { icon: <GameIcon />, title: '랜덤뽑기', explain: '설명' },
      { icon: <GameIcon />, title: '업다운', explain: '설명' },
      { icon: <GameIcon />, title: '라이어게임', explain: '설명' },
    ],
    [],
  );

  return (
    <Wrapper>
      {GameList.map(({ icon, title, explain }, index) => (
        <GameBox
          key={index}
          icon={icon}
          title={title}
          explain={explain}
          start={startGamesRef.current[title]}
        />
      ))}
    </Wrapper>
  );
};

export default GameMenu;
