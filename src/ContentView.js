import React, { useState, useRef } from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import NavigationView from './NavigationView';


const styles = {
    container: {
        flex: 1,
    },
};

const ContentView = () => {
    const webViewRef = useRef();

    const [canGoBack, setCanGoBack] = useState(false);
    const [canGoForward, setCanGoForward] = useState(false);

    const handleBackPress = () => {
        webViewRef.current.goBack();
    }

    const handleForwardPress = () => {
        webViewRef.current.goForward();
    }

    return (
        <View style={styles.container}>
            <WebView ref={webViewRef} source={{ uri: 'https://cnh1.com.br/?o=app' }} 
            originWhitelist={['*']} 
            onNavigationStateChange={state => {
                const back = state.canGoBack;
                const forward = state.canGoForward;
                setCanGoBack(back);
                setCanGoForward(forward);
            }} 
            />
        <NavigationView 
        onBackPress={handleBackPress} 
        onForwardPress={handleForwardPress} 
        canGoBack={canGoBack} 
        canGoForward={canGoForward}
        />
        </View>
        
    );
    
    
}

  

export default ContentView;