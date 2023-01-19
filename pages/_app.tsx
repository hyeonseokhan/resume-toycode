import 'bootstrap/dist/css/bootstrap.min.css';
import { NextComponentType } from 'next';

export default function App({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  pageProps: any;
}) {
  return <Component {...pageProps} />;
}
