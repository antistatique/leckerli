import { useEffect } from 'preact/hooks';

import Banner from './Banner';
import Settings from './Settings';
import useSettings from '../hooks/useSettings';

const App = () => {
  const { choiceMade, init, settingsOpen }  = useSettings();

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      {!choiceMade && !settingsOpen && <Banner/>}
      {settingsOpen && <Settings/>}
    </>
  );
}

export default App;
