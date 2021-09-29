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
import IconCopy24 from '../foundation/svg/icon_copy_24';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { buttonVariants } from '../foundation/framer-motion/variants';
import { motion } from 'framer-motion';
import { useToast } from '../lib/hooks/useToast';

const SlidSyntaxHighlighter = ({
  language,
  codeString,
  caption,
  marginTop,
}: {
  language: 'tsx' | 'typescript' | 'jsx' | 'javascript' | 'css';
  codeString: string;
  caption?: tType;
  marginTop?: string;
}) => {
  const { showToast } = useToast();

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
        <CopyToClipboard
          text={codeString}
          onCopy={() => showToast('Copy it 👍')}
        >
          <CopyButton
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <IconCopy24 />
          </CopyButton>
        </CopyToClipboard>
      </Figure>
    </>
  );
};

export default SlidSyntaxHighlighter;

const Figure = styled.figure<{ marginTop?: string }>`
  /* margin-top: ${({ marginTop }) => marginTop}; */

  position: relative;

  pre {
    background: rgb(30, 30, 30, 0.95) !important;
    border-radius: 16px;

    margin: 24px 0 0 !important; // Remove default setting
    padding: 56px !important;
    max-width: 800px !important;

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

const CopyButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 24px;
  right: 24px;
`;
