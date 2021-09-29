import styled from 'styled-components';
import LargeTitle from '../foundation/typography/title/large-title';
import Title3 from '../foundation/typography/title/title3';
import Body1 from '../foundation/typography/body/body1';
import SlidSyntaxHighlighter from './syntax-highlighter';

const List = ({
  children,
  codeString,
}: {
  children: JSX.Element;
  codeString: string;
}) => {
  return (
    <Li>
      <LargeTitle text="Stagger Motion" color="--gray8" />
      <Title3
        text="This is subtitle test text for hierarchy"
        color="--gray5"
        marginTop="12px"
      />
      <Body1
        text="This website is for sharing interaction design with our team. Below is stagger motion example. You can refer code or copy(developing in progress). This paragraph design will imporve after tuning letter spacing and line height."
        color="--gray7"
        marginTop="36px"
      />
      {children}
      <SlidSyntaxHighlighter
        language="jsx"
        codeString={codeString}
        marginTop="16px"
      />
    </Li>
  );
};

export default List;

const Li = styled.li`
  max-width: 800px;
`;
