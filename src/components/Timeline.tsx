import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontSize, Timeline_Style, width } from "../style/General";
const Line = styled.div`
  border: ${width < 400 ? "1px" : "2px"} solid #000;
  height: ${Timeline_Style.Line};
  width: 0px;
`;
const Pointer = styled(motion.div)`
  flex: 1;
  display: flex;
  height: ${Timeline_Style.Pointer};
  width: ${Timeline_Style.Pointer};
  border-radius: 100%;
  border: 2px solid black;
  background-color: black;
`;
const Time = styled.div<any>`
  font-size: ${FontSize.small};
  display: flex;
  flex-direction: ${(props) => (props.vertical ? "row" : "column")};
  justify-content: center;
  align-items: center;
`;
const PointerGroup = styled(motion.div)`
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-height: 50px;
  div:first-child {
    margin-right: auto;
  }
  div:last-child {
    margin-left: auto;
  }
`;
const PointerDate = styled.div<any>`
  flex: 1;
  padding:10px;
  text-align: ${(props) => (props.left ? "left" : "right")};
  min-width:${Timeline_Style.PointerContent};
`;
const LineSmall = styled.div`
  border: 1px solid #000;
  background-color: black;
  height: 0px;
  min-width: ${Timeline_Style.LineSmall};
`;
const PointerContent = styled.div<any>`
  flex: 1;
  display: flex;
  padding:10px;
  flex-direction: row;
  max-height: 20px;
  justify-content: center;
  align-items: center;
  max-width: ${Timeline_Style.PointerContent};
  text-align: ${(props) => (props.left ? "left" : "right")};
`;

const MainPointer = (props: any) => {
  const date = props.date;
  const content = props.content;
  const reverse = props.reverse;
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <PointerGroup
        onHoverStart={() => {
          setHovered(true);
        }}
        onHoverEnd={() => {
          setHovered(false);
        }}
        animate={hovered ? { scale: 1.5 } : ""}
      >
        {reverse ? (
          <PointerDate left={true}>{date}</PointerDate>
        ) : (
          <PointerContent left={true}>
            <p
            >
              {content}
            </p>
            <LineSmall />
          </PointerContent>
        )}
        <div>
          <Pointer />
        </div>
        {reverse ? (
          <PointerContent left={false}>
            <LineSmall />
            <p>
              {content}
            </p>
          </PointerContent>
        ) : (
          <PointerDate left={false}>
            <h2>{date}</h2>
          </PointerDate>
        )}
      </PointerGroup>
      {props.last ? "" : <Line />}
    </>
  );
};
const Timeline = (props: any) => {
  console.log(props.content);
  return (
    <Time>
      {props.content &&
        props.content.map((data: any, index: number) => (
          <MainPointer
            reverse={index % 2 == 0 ? true : false}
            content={data.content}
            date={data.date}
            last={index == props.content.length - 1 ? true : false}
          />
        ))}
    </Time>
  );
};

export default Timeline;
