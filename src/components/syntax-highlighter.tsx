import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  atomDark,
  dracula,
  materialDark,
  okaidia,
  tomorrow,
  vscDarkPlus,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useSetLanguage } from '../lib/hooks/useSetLanguage';
import PMedium from '../foundation/typography/p-medium';
import { tType } from '../../type';
import { mediaBreakPoint } from '../styles/common';

const SlidSyntaxHighlighter = ({
  language,
  codeString,
  caption,
  marginTop,
}: {
  language: 'tsx' | 'typescript' | 'jsx' | 'javascript' | 'css';
  codeString: tType;
  caption?: tType;
  marginTop?: string;
}) => {
  return (
    <>
      <Figure marginTop={marginTop}>
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          wrapLines={true}
          wrapLongLines={true}
        >
          {useSetLanguage(codeString)}
        </SyntaxHighlighter>
        {caption && (
          <figcaption>
            <PMedium //
              text={caption}
              color="gray4"
              marginTop="8px"
            />
          </figcaption>
        )}
      </Figure>
    </>
  );
};

export default SlidSyntaxHighlighter;

const Figure = styled.figure<{ marginTop?: string }>`
  /* margin-top: ${({ marginTop }) => marginTop}; */

  pre {
    background: rgb(30, 30, 30, 0.95) !important;
    border-radius: 16px;

    margin: 24px 0 0 !important; // Remove default setting
    padding: 56px !important;
    max-width: 740px !important;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      margin: 16px 0 0 !important; // Remove default setting
      padding: 36px !important;
      max-width: 91vw !important;
    }
  }

  span {
    text-align: left;
    font-family: Menlo, Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono',
      'Courier New', monospace !important;

    font-size: 16px;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      font-size: 13px;
    }
  }
`;
