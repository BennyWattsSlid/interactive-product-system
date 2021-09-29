import styled from 'styled-components';
import { motion } from 'framer-motion';
import LargeTitle from '../foundation/typography/title/large-title';
import { smoothUp, stagger } from '../foundation/framer-motion/variants';
import Title1 from '../foundation/typography/title/title1';
import Title2 from '../foundation/typography/title/title2';
import Title3 from '../foundation/typography/title/title3';
import Body1 from '../foundation/typography/body/body1';
import { mediaBreakPoint } from '../styles/common';

const StaggerTypography = () => {
  return (
    <StaggerFigure //
      variants={stagger}
      initial="initial"
      animate="animate"
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
        text="Title2 Inter English 22px Bold"
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
    </StaggerFigure>
  );
};

export default StaggerTypography;

const StaggerFigure = styled(motion.figure)`
  background-color: var(--gray1);
  border-radius: 16px;

  margin: 36px 0 0;
  padding: 56px;
  max-width: 740px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin: 36px 0 0;
    padding: 36px;
    max-width: 91vw;
  }
`;
