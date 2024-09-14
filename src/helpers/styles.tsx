import styled from 'styled-components/native';
import {colors} from './colors';

export const TextHeader = styled.Text`
  font-size: 18px;
  color: ${colors.color101};
  font-weight: bold;
`;
export const SubText = styled.Text<{fontSize?: number}>`
  font-size: ${props => props?.fontSize || 13}px;
  color: ${colors.color103};
`;
export const StyledText = styled.Text<{fontSize?: number; color?: string}>`
  font-size: ${props => props?.fontSize || 13}px;
  color: ${props => props?.color || colors.color100};
  font-weight: 600;
`;
export const HeaderView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-right: 15px;
  padding-left: 15px;
  font-weight: 900;
  align-items: center;
`;
export const StatusView = styled.View<{bgColor: string}>`
  background-color: ${props => props?.bgColor!};
  height: 60px;
  width: 40%;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const ExpenseCardView = styled.View<{bgColor: string}>`
  background-color: ${props => props?.bgColor!};
  height: 70px;
  width: 95%;
  margin: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const StyledView = styled.View`
  background-color: ${colors.color100};
  position: relative;
  flex: 1;
`;
