import type { NextPage } from 'next';
import styled from 'styled-components';
import List from '../components/list';
import SlidSyntaxHighlighter from '../components/syntax-highlighter';
import Typography from '../components/typography';

const Home: NextPage = () => {
  return (
    <>
      <Main>
        <Ul>
          {/* <Typography /> */}
          <List codeString={codeString}>
            <Typography />
          </List>
        </Ul>
      </Main>
    </>
  );
};

export default Home;

const Main = styled.main`
  display: flex;
  justify-content: center;
  margin: 72px auto 144px;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 640px;
  max-width: 840px;
`;

const codeString = `import styled from 'styled-components';
import { motion } from 'framer-motion';

const StaggerExample = () => {
  return (
    <StaggerFigure
      variants={stagger}
      initial="initial"
      animate="animate"
    >
      <LargeTitle
        variants={smoothUp}
        text="Display Inter English 34px Bold"
        color="--gray8"
      />

      <Title1
        variants={smoothUp}
        text="Title 1 Inter English 28px Bold"
        color="--gray8"
        marginTop="36px"
      />

      <Title2
        variants={smoothUp}
        text="Title 2 Inter English 22px Bold"
        color="--gray8"
        marginTop="36px"
      />

      <Title3
        variants={smoothUp}
        text="Title 3 Inter English 20px Bold"
        color="--gray8"
        marginTop="36px"
      />

      <Body1
        variants={smoothUp}
        text="Body 1 Inter English 17px Regular"
        color="--gray8"
        marginTop="36px"
      />
    </StaggerFigure>
  );
};

export default StaggerExample;

const StaggerFigure = styled(motion.figure)\`
  background-color: var(--gray1);
  border-radius: 16px;

  margin: 36px 0 0;
  padding: 56px;
  max-width: 740px;

  @media all and (max-width: \${mediaBreakPoint.first}) {
    margin: 36px 0 0;
    padding: 36px;
    max-width: 91vw;
  }
\`;`;
