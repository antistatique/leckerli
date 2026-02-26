import { useEffect, useState } from 'preact/hooks';

import useSettings from '../hooks/useSettings';

import Banner from './Banner';
import Settings from './Settings';

const App = () => {
  const { choiceMade, displayDelay, init, settingsOpen } = useSettings();
  const [delayElapsed, setDelayElapsed] = useState(displayDelay <= 0);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (delayElapsed || choiceMade || displayDelay <= 0) {
      return undefined;
    }

    const timer = setTimeout(() => setDelayElapsed(true), displayDelay);
    return () => clearTimeout(timer);
  }, [choiceMade, delayElapsed, displayDelay]);

  return (
    <>
      {!choiceMade && !settingsOpen && delayElapsed && <Banner />}
      {settingsOpen && <Settings />}
    </>
  );
};

export default App;
