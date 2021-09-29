import '../styles/globals.css';
import '../styles/fonts.css';
import '../styles/colors.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Toast from '../components/common-components/toast/toast';
import { useRouter } from 'next/router';

function SlidInteractiveProductSystemApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <RecoilRoot>
        <Component {...pageProps} />
        <Toast key={`Toast${router.pathname}`} />
      </RecoilRoot>
    </>
  );
}
export default SlidInteractiveProductSystemApp;
