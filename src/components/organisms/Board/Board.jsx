import React, { useContext } from "react";
import Column from "../../molecules/Column/Column";
import { Wrapper, BoardBody } from "./Board.styles";
import Navigation from "../../molecules/Navigation/Navigation";
import InformationTable from "../../molecules/InformationTable/InformationTable";
import Scoreboard from "../../molecules/Scoreboard/Scoreboard";
import { GameContext } from "../../../providers/ContextProvider";

const Board = () => {
  const { modalVisibility } = useContext(GameContext);

  return (
    <Wrapper>
      <Navigation />
      <InformationTable
        style={
          modalVisibility
            ? { opacity: 1 }
            : { opacity: 0, pointerEvents: "none" }
        }
      />
      <BoardBody style={modalVisibility ? { pointerEvents: "none" } : {}}>
        <Column column={0} />
        <Column column={1} />
        <Column column={2} />
        <Column column={3} />
        <Column column={4} />
        <Column column={5} />
        <Column column={6} />
      </BoardBody>
      <Scoreboard />
    </Wrapper>
  );
};

export default Board;
