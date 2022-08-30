import styled from "styled-components";

import { ContainerType } from "./type";

export const colors = {
  white: "rgba(255,255,255,1)",
  darkwhite: "rgba(229,229,229,1)",
  grey: "rgba(120,120,120,1)",
  lightgrey: "rgba(69,69,69,1)",
  black: "rgba(0,0,0,1)",
};

export const width = window.innerWidth
export const height = window.innerHeight

export const FontSize = {
  big: (width<400 ? '15px': width<500 ?  '25px' : width<900 ? '35px': '45px' ),
  medium:  (width<400 ? '10px': width<500 ?  '20px' : width<900 ? '25px': '30px' ),
  small: (width<400 ? '8px': width<500 ?  '15px' : width<900 ? '20px': '25px' ),
  TransitionTitle:(width<400 ? '40px': width<500 ?  '50px' : width<900 ? '80px': '150px' ),
  Internshipsmall: (width<400 ? '8px': width<500 ?  '10px' : width<900 ? '15px': '20px' )
}
export const SizeConfig ={
  Container: (width<400 ? '10px': width<500 ?  '25px' : width<1000 ? '80px': '100px' ),
  Grid: (width<1600 ? 'grid-template-rows: 1fr 1fr': 'grid-template-columns: 1fr 1fr'),
  Grid_first_child: (width<900 ?'grid-row:${props => props.reverse? "1": "2"};' :'grid-column:${props => props.reverse? "2": "1"};'),
  Grid_gap:( width< 400 ? '50px': width<900 ? '100px': width<1600 ? '100px': '50px')
}
export const Timeline_Style ={
  Pointer:(width<400? '8px': '20px'),
  LineSmall: (width<400? '10px': '50px'),
  PointerContent: (width<400? '150px': '300px'),
  Line: (width<400? '20px': '100px'),
}

export const Card_Style ={
  Box_Width:(width<400? '300px' : '681px'),
  Box_Height:(width<400? '400px': '589px'),
  ImageInner_Width: (width<400? '200px': '480px'),
  ImageInner_Height:(width<400? '119px': '295px'),
  ImageInner_Top:(width<400? '140px': '155px'),
  ImageInner_Left:(width<400? '50px': '100px')
}

export const Container = styled.div<ContainerType>`
  padding: ${SizeConfig.Container};
  padding-bottom: ${width<400 ? '100px': ''};
  width: 100vw;
  overflow: hidden;
  min-height: 100vh;
  background-color: ${(props) => (props.light ? colors.grey : colors.white)};
  color: ${(props) => (props.light ? colors.white : colors.black)};
`;

export const Grid_Box = styled.div<any>`
    display: grid;
    justify-content: center;
    ${SizeConfig.Grid};
    grid-gap: ${SizeConfig.Grid_gap};
    margin:0;
    padding:0;
    div:first-child{
        ${SizeConfig.Grid_first_child}
    }  
`


export const Stroke = styled.div`
width: ${width<400 ? '120px':'240px'};
height:  ${width<400 ? '50px':'100px'};
border: ${width<400 ? '3px': '7px'} solid #000000;
border-color: #000 transparent transparent transparent;
border-radius: ${width<400 ? '50%/10px 30px 0 0':'50%/20px 60px 0 0'};
`;
