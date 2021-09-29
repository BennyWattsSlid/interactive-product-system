import TextStyle from '../atoms/text-style';
import { useSetLanguage } from '../../../lib/hooks/useSetLanguage';

const Title2 = ({
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
      type="h3"
      text={useSetLanguage(text)}
      color={color}
      weight={weight || 700}
      textSize={{
        desktop: '22px',
        mobile: '22px',
      }}
      // lineHeight={{
      //   desktop: '42px',
      //   mobile: '42px',
      // }}
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

export default Title2;
