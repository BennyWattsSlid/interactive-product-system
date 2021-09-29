import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const IconCopy24 = () => {
  return (
    <SVG width="32px" height="32px" viewBox="0 0 24 24" version="1.1">
      <g
        id="icon_share_copyURL_24"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect x="0" y="0" width="24" height="24" rx="2"></rect>
        <rect x="6" y="6" width="10" height="15" rx="1"></rect>
        <rect x="8" y="3" width="11" height="2" rx="1"></rect>
        <rect x="17" y="3" width="2" height="16" rx="1"></rect>
      </g>
    </SVG>
  );
};

export default IconCopy24;

const SVG = styled.svg`
  rect {
    fill: var(--gray8);
  }

  rect:nth-child(1) {
    fill: var(--gray5);
  }

  border-radius: 6px;
`;
