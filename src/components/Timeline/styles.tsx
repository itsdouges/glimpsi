import styled from 'styled-components';
import bp from '../../assets/styles/breakpoints';

export const Root = styled.div`
  display: flex;

  > * {
    flex-shrink: 0;
  }

  ${bp.tablet.css`
    display: block;
  `};
`;

export const Date = styled.button`
  padding: 20px 10px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

interface DayContainerProps {
  withinFilters: boolean;
}

export const Day = styled.div`
  display: flex;
  opacity: ${(props: DayContainerProps) => (props.withinFilters ? '1' : '0.5')};

  ${bp.tablet.css`
    display: block;
  `};
`;
