import React from 'react';
import {StatusView, StyledText, SubText} from '../../helpers/styles';
import {Text} from 'react-native';
import {colors} from '../../helpers/colors';

interface props {
  bgColor?: string;
  title: string;
  sum?:string|number
}
const Status = ({bgColor = colors.color104, title = '',sum}: props) => {
  return (
    <StatusView bgColor={bgColor}>
      <StyledText fontSize={12}>{title}</StyledText>
      <StyledText fontSize={17}>${sum} </StyledText>
    </StatusView>
  );
};

export default Status;
