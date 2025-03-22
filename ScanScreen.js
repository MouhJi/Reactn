import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
    
export default function ScanScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Nút back */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>

      {/* Khu vực quét */}
      <View style={styles.scanArea}>
        <Image
          source={{ uri: 'https://via.placeholder.com/200' }}
          style={styles.productImage}
        />
      </View>

      {/* Thông tin sản phẩm */}
      <View style={styles.productInfo}>
        <Text style={styles.productName}>Lauren's Orange Juice</Text>
        <TouchableOpacity style={styles.scanButton}>
          <Text style={styles.scanButtonText}>Scan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', backgroundColor: '#f5f5f5' },
  backButton: { position: 'absolute', top: 40, left: 20, zIndex: 10 },
  scanArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  productImage: { width: 200, height: 300, borderRadius: 20 },
  productInfo: { alignItems: 'center', marginBottom: 50 },
  productName: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  scanButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  scanButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});
