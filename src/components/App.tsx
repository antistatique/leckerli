import { useEffect } from 'preact/hooks';

import Banner from './Banner';
import useSettings from '../hooks/useSettings';

const App = () => {
  const { initCookie, cookie }  = useSettings();

  useEffect(() => {
    initCookie();
  }, []);

  return (
    <>
      <pre>{JSON.stringify(cookie, null, 2)}</pre>
      <Banner/>
    </>
  );
}

export default App;
