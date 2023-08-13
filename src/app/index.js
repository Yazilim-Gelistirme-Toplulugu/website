import Navigation from "./navigation";
import useStyles from "./style";
import themes from "./themes/";
import {
  NCoreProvider,
} from 'ncore-web';

const App = () => {
  useStyles();
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
