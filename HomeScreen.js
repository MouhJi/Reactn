import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Phần Header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.greeting}>Hello 👋</Text>
                    <Text style={styles.name}>Christie Doe</Text>
                </View>
                <Image source={require('./img/Mask Group.png')} style={styles.avatar} />
            </View>

            {/* Các tính năng */}
            <View style={styles.features}>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Scan')}>
                    <Ionicons name="scan-outline" size={30} color="blue" />
                    <Text>Scan new</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <Ionicons name="warning-outline" size={30} color="red" />
                    <Text>Counterfeits</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <Ionicons name="checkmark-circle-outline" size={30} color="green" />
                    <Text>Success</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <Ionicons name="book-outline" size={30} color="blue" />
                    <Text>Directory</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    greeting: { fontSize: 24, fontWeight: 'bold' },
    name: { fontSize: 18, color: '#555' },
    avatar: { width: 50, height: 50, borderRadius: 12 },

    features: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 20
    },

    card: {
        width: 158.16,
        height: 176.82,
        backgroundColor: '#f8f8f8',
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
