import Navigation from "./navigation";
import themes from "./themes/";
import {
  NCoreProvider,
} from 'ncore-web';

const App = () => {
  return <NCoreProvider
    config={{
      themes: themes,
      initialThemeKey: "dark",
    }}
  >
    <Navigation />
  </NCoreProvider>;
};

export default App;
