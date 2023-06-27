import { useEffect } from 'preact/hooks';

import Banner from './Banner';
import useSettings from '../hooks/useSettings';

const App = () => {
  const { choiceMade, init, cookie }  = useSettings();

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <pre>{JSON.stringify(cookie, null, 2)}</pre>
      {!choiceMade && <Banner/>}
    </>
  );
}

export default App;
