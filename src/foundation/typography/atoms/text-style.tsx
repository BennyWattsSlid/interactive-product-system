import styled from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';

const TextStyle = ({
  type, // 기본값은 Styled-components에서 p
  text,
  color,
  weight,
  textSize,
  lineHeight,
  letterSpacing,
  marginTop,
  opacity,
  className,
}: {
  type: any;
  text: string;
  color: string;
  weight: number;
  textSize: {
    desktop: string;
    mobile: string;
  };
  lineHeight: {
    desktop: string;
    mobile: string;
  };
  letterSpacing: {
    desktop: string;
    mobile: string;
  };
  marginTop?: string;
  opacity?: number;
  className?: string;
}) => {
  return (
    <Text
      as={type} // HTML 태그 결정
      textColor={color}
      weight={weight}
      desktopFontSize={textSize.desktop}
      mobileFontSize={textSize.mobile}
      desktopLineHeight={lineHeight.desktop}
      mobileLineHeight={lineHeight.mobile}
      desktopLetterSpacing={letterSpacing.desktop}
      mobileLetterSpacing={letterSpacing.mobile}
      marginTop={marginTop}
      opacity={opacity}
      className={className}
    >
      {text}
    </Text>
  );
};

export default TextStyle;

const Text = styled.p<TextType>`
  color: var(${({ textColor }) => textColor});
  font-weight: ${({ weight }) => weight};
  //
  font-size: ${({ desktopFontSize }) => desktopFontSize};
  line-height: ${({ desktopLineHeight }) => desktopLineHeight};
  letter-spacing: ${({ desktopLetterSpacing }) => desktopLetterSpacing};
  //
  margin-top: ${({ marginTop }) => marginTop};
  opacity: ${({ opacity }) => opacity};

  @media screen and (max-width: ${mediaBreakPoint.first}) {
    font-size: ${({ mobileFontSize }) => mobileFontSize};
    line-height: ${({ mobileLineHeight }) => mobileLineHeight};
    letter-spacing: ${({ mobileLetterSpacing }) => mobileLetterSpacing};
  }
`;

type TextType = {
  textColor: any;
  weight: number;
  desktopFontSize: string;
  mobileFontSize: string;
  desktopLineHeight: string;
  mobileLineHeight: string;
  desktopLetterSpacing: string;
  mobileLetterSpacing: string;
  marginTop?: string;
  opacity?: number;
};
