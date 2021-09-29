import type { NextPage } from 'next';
import styled from 'styled-components';
import List from '../components/list';
import StaggerTypography from '../components/stagger-typography';

const Home: NextPage = () => {
  return (
    <>
      <Main>
        <Ul>
          <List codeString={codeString}>
            <StaggerTypography />
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
import {
  buttonVariants,
  smoothUp,
  stagger,
} from '../foundation/framer-motion/variants';
import LargeTitle from '../foundation/typography/title/large-title';
import Title1 from '../foundation/typography/title/title1';
import Title2 from '../foundation/typography/title/title2';
import Title3 from '../foundation/typography/title/title3';
import Body1 from '../foundation/typography/body/body1';
import { useState } from 'react';
import { mediaBreakPoint } from '../styles/common';

const StaggerTypography = () => {
  const [animationCount, setAnimationCount] = useState(0);
  const active = () => {
    setAnimationCount(animationCount + 1);
  };

  return (
    <StaggerFigure //
      variants={stagger}
      initial="initial"
      animate="animate"
      key={animationCount} // 모션 반복 위해 필요
    >
      <LargeTitle //
        variants={smoothUp}
        text="LargeTitle Inter English 34px Bold"
        color="--gray8"
      />

      <Title1
        variants={smoothUp}
        text="Title1 Inter English 28px Bold"
        color="--gray8"
        marginTop="36px"
      />

      <Title2
        variants={smoothUp}
        text="Title2 Inter English 24px Bold"
        color="--gray8"
        marginTop="36px"
      />

      <Title3
        variants={smoothUp}
        text="Title3 Inter English 20px Bold"
        color="--gray8"
        marginTop="36px"
      />

      <Body1
        variants={smoothUp}
        text="Body1 Inter English 17px Regular"
        color="--gray8"
        marginTop="36px"
      />
      <MotionButton
        onClick={() => active()}
        variants={buttonVariants}
        whileHover="whileHover"
        whileTap="whileTap"
      >
        <Body1 text="Animate" color="--gray1" weight={700} />
      </MotionButton>
    </StaggerFigure>
  );
};

export default StaggerTypography;

const StaggerFigure = styled(motion.figure)\`
  background-color: var(--gray1);
  border-radius: 16px;

  margin: 36px 0 0;
  padding: 56px 56px 36px;
  max-width: 740px;

  @media all and (max-width: \${mediaBreakPoint.first}) {
    margin: 36px 0 0;
    padding: 36px;
    max-width: 91vw;
  }
\`;

const MotionButton = styled(motion.button)\`
  background-color: var(--primary);
  padding: 24px;
  margin: 0 auto;
  display: flex;
  margin-top: 56px;
  border-radius: 21px;
\`;`;
