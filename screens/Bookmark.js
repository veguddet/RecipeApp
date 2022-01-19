import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Bookmark = () => {
    return (
        <View style={styles.container}>
            <Text>Bookmarks Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default Bookmark;
