import type { NextPage } from 'next';
import styled from 'styled-components';
import SlidSyntaxHighlighter from '../components/syntax-highlighter';
import H1Title from '../foundation/typography/h1-title';
import PMedium from '../foundation/typography/p-medium';

const Home: NextPage = () => {
  return (
    <Main>
      <Ul>
        <Li>
          <H1Title text="Example" color="--gray6" />
          <PMedium text="Example Text" color="--gray7" />
          <SlidSyntaxHighlighter language="tsx" codeString={codeString} />
        </Li>
      </Ul>
    </Main>
  );
};

export default Home;

const H1 = styled.h1`
  font-weight: 600;
  color: var(--gray6);
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  margin: 72px auto 144px;
  max-width: 800px;
  width: 100%;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Li = styled.li``;

const codeString = `...
<CopyToClipboard
  text={organizedPaletteString}
  onCopy={() => showToast(textCopyPaletteToast)}
>
  <MotionBtnPaletteCopy
    variants={buttonVariants}
    whileHover="whileHover"
    whileTap="whileTap"
  >
    <PMedium
      text={textbtnCopyPalette}
      color="gray2"
      weight={700}
    />
  </MotionBtnPaletteCopy>
</CopyToClipboard>
...`;
