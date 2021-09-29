import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { mediaBreakPoint } from '../../../styles/common';
import { useToast } from '../../../lib/hooks/useToast';
import Body1 from '../../../foundation/typography/body/body1';

const Toast = () => {
  const { toastOn, toastMessage } = useToast();
  return (
    <>
      <AnimatePresence>
        {toastOn && (
          <MotionToastPositionContainer
            key={toastMessage}
            variants={toastVariants}
            initial="hide"
            animate="show"
            exit="hide"
          >
            <ToastContainer>
              <Body1 text={toastMessage} color="--gray1" />
            </ToastContainer>
          </MotionToastPositionContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default React.memo(Toast);

const MotionToastPositionContainer = styled(motion.div)`
  z-index: 10000;
  position: fixed; // toast 위치의 핵심
  top: 28px;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 400px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: 4.5vw;
  }
`;

const ToastContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  background-color: var(--gray6);
  padding: 16px 24px;
`;

const toastVariants = {
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },

  hide: {
    y: -240,
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.4,
    },
  },
};
