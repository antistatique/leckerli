import { useEffect } from 'preact/hooks';

import Banner from './Banner';
import Settings from './Settings';
import useSettings from '../hooks/useSettings';

const App = () => {
  const { choiceMade, init, cookie, settingsOpen }  = useSettings();

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <pre>{JSON.stringify(cookie, null, 2)}</pre>
      {!choiceMade && !settingsOpen && <Banner/>}
      {settingsOpen && <Settings/>}
    </>
  );
}

export default App;
