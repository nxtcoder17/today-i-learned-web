import styled, { css } from 'styled-components';
import { doSpacing } from '#commons/styled-components-util';

export const IconLinkComp = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding-left: ${doSpacing(1)};
  gap: ${doSpacing(1)};
  ${(props) => css`
    color: black;
    border: 4px solid ${props.color};
    :hover {
    }
  `}

  span {
    font-weight: 800;
  }
`;
