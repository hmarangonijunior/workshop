import styled from 'styled-components';
import colors from '../../constants/colors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 130px 1fr;
`;

const Info = styled.div``;

const Title = styled.h1`
  grid-row: 1;
  margin-top: 40px;
`;

const WorkshopsCounter = styled.div`
  grid-row: 1;
  margin-top: -20px;
  color: ${colors.font_lighter};
  font-weight: bold;

  span {
    color: #000;
  }
`;

const List = styled.div`
  grid-row: 2;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const LoadMore = styled.div``;

export { Grid, Info, Container, Title, WorkshopsCounter, List, LoadMore };
