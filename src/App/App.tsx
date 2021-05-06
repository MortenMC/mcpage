import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import styles from './index.module.scss'
import MyParticles from '../background/index'
import Layout from './Layout'
import reducers from '../redux/reducers'
import WindowContainer from '../components/TransparentWindow'

const store = createStore(reducers);
console.log(store.getState())

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <div className={styles.App}>
        <MyParticles />
        <Layout>
          <WindowContainer />
        </Layout>
      </div>
    </Provider>
  );
}

export default App;
