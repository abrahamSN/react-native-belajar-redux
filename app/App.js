import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LibraryList from './components/LibraryList';

const App = () => (
        <Provider store={createStore(reducers)}>
            <View>
                <Text>ini thex</Text>
                <LibraryList />
            </View>
        </Provider>
    );

export default App;
