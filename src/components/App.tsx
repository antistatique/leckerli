import { useEffect } from 'preact/hooks';

import useSettings from '../hooks/useSettings';

import Banner from './Banner';
import Settings from './Settings';

const App = () => {
  const { choiceMade, init, settingsOpen } = useSettings();

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      {!choiceMade && !settingsOpen && <Banner />}
      {settingsOpen && <Settings />}
    </>
  );
};

export default App;
