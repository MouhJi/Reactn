import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const PaymentScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <Text style={styles.amount}>₹ 1,527</Text>
        <Text style={styles.gst}>Including GST (18%)</Text>
      </View>

      <View style={styles.paymentOptions}>
        <TouchableOpacity style={[styles.paymentOption, styles.activePaymentOption]}>
          <Text style={styles.paymentOptionText}>Credit card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentOption}>
          <Text style={styles.paymentOptionText}>Apple Pay</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Card number" />
        <TextInput style={styles.input} placeholder="Cardholder name" />
        <View style={styles.row}>
          <TextInput style={[styles.input, styles.halfInput]} placeholder="Expiry date" />
          <TextInput style={[styles.input, styles.halfInput]} placeholder="CVV / CVC" />
        </View>
        <Text style={styles.orderDetails}>
          We will send you an order details to your email after the successful payment
        </Text>
        <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate('Success')}>
          <Text style={styles.payButtonText}>Pay for the order</Text>
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
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  gst: {
    fontSize: 14,
    color: '#888',
  },
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  paymentOption: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  activePaymentOption: {
    backgroundColor: '#e0f7fa',
  },
  paymentOptionText: {
    fontSize: 16,
  },
  form: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: width / 2 - 25,
  },
  orderDetails: {
    fontSize: 14,
    color: '#888',
    marginTop: 10,
    textAlign: 'center',
  },
  payButton: {
    backgroundColor: '#2196f3',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default PaymentScreen;