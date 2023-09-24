import Realm from 'realm';
import { it, afterAll } from '@jest/globals';
import { render, renderHook, waitFor } from '@testing-library/react-native';
import App from '../App';
import RealmContext from '../src/services/database';


afterAll(() => {
  const wrapper = ({ children }: { children: JSX.Element }) =>(
    <RealmContext.RealmProvider>{children}</RealmContext.RealmProvider>
  );

  const { result } = renderHook(() => RealmContext.useRealm(), { wrapper });

  result.current.close();
  Realm.clearTestState();
});

it('renders correctly', async () => {
  await waitFor(() => render(<App />));
});