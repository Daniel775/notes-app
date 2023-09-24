import { StatusBar } from 'react-native';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import RealmContext from './src/services/database';
import Router from './src/routes';


const appTheme: DefaultTheme = {
	primary: '#344955',
	secondary: '#485b66',
  alert: '#f9aa33',
	background: '#d6dadd',
	details: '#fff',
};


export default function App(): React.ReactElement {
  return (
    <ThemeProvider theme={appTheme}>
      <RealmContext.RealmProvider>
        <StatusBar backgroundColor='transparent' translucent barStyle='light-content'/>
        <Router/>
      </RealmContext.RealmProvider>
    </ThemeProvider>
  );
}