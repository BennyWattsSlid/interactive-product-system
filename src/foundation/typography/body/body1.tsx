import TextStyle from '../atoms/text-style';
import { useSetLanguage } from '../../../lib/hooks/useSetLanguage';

const Body1 = ({
  text,
  color,
  weight,
  lineHeight,
  marginTop,
  className,
  variants,
  initial,
  animate,
}: {
  text:
    | {
        k: string;
        e: string;
      }
    | string;
  color: string;
  weight?: 100 | 300 | 400 | 700;
  lineHeight?: {
    desktop: string;
    mobile: string;
  };
  marginTop?: string;
  className?: string;
  variants?: any;
  initial?: string;
  animate?: string;
}) => {
  return (
    <TextStyle
      type="p"
      text={useSetLanguage(text)}
      color={color}
      weight={weight || 400}
      textSize={{
        desktop: '17px',
        mobile: '17px',
      }}
      // lineHeight={
      //   lineHeight || {
      //     desktop: '36px',
      //     mobile: '30px',
      //   }
      // }
      // letterSpacing={{
      //   desktop: '0px',
      //   mobile: '0px',
      // }}
      marginTop={marginTop}
      className={className}
      variants={variants}
      initial={initial}
      animate={animate}
    />
  );
};

export default Body1;