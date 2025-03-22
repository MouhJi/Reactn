import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SuccessScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>&lt;</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.successContent}>
        <Image
          source={require('./assets/success.png')} // Đặt đường dẫn chính xác tới hình ảnh của bạn
          style={styles.successImage}
        />
        <Text style={styles.successTitle}>Payment Success, Yayy!</Text>
        <Text style={styles.successMessage}>
          We will send order details and invoice in your contact no. and registered email
        </Text>
        <TouchableOpacity style={styles.checkDetailsButton}>
          <Text style={styles.checkDetailsButtonText}>Check Details -&gt;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.downloadInvoiceButton}>
          <Text style={styles.downloadInvoiceButtonText}>Download Invoice</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  backButton: {
    fontSize: 24,
    position: 'absolute',
    left: 20,
  },
  successContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  successMessage: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  checkDetailsButton: {
    backgroundColor: '#e0f7fa',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  checkDetailsButtonText: {
    fontSize: 16,
    color: '#2196f3',
  },
  downloadInvoiceButton: {
    backgroundColor: '#2196f3',
    padding: 15,
    borderRadius: 5,
  },
  downloadInvoiceButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SuccessScreen;