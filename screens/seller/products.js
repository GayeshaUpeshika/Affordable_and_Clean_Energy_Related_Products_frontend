import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {styles} from '../../styles'
import Background from '../Background';

export default function Products(){


    return (
        <Background>
        <View style={styles.container3}>
            <Text>
                Products page!
            </Text>
        </View>
        </Background>

    )

}

