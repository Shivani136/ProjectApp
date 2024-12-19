import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Modal,
} from 'react-native';
import React, { useState } from 'react';

// Dummy JSON Data
const productData = [
  {
    id: '1',
    title: 'Lorem ipsum Lorem ipsum',
    price: '₹1000/-',
    stock: '50 in stocks',
    image: require('../Assests/image/girl.png'), // Replace with actual product images
  },
  {
    id: '2',
    title: 'Lorem ipsum Lorem ipsum',
    price: '₹1500/-',
    stock: '30 in stocks',
    image: require('../Assests/image/girl1.png'),
  },
  {
    id: '3',
    title: 'Lorem ipsum Lorem ipsum',
    price: '₹2000/-',
    stock: '20 in stocks',
    image: require('../Assests/image/girl4.png'),
  },
  {
    id: '4',
    title: 'Lorem ipsum Lorem ipsum',
    price: '₹2500/-',
    stock: '10 in stocks',
    image: require('../Assests/image/girl3.png'),
  },
  {
    id: '5',
    title: 'Lorem ipsum Lorem ipsum',
    price: '₹3000/-',
    stock: '10 in stocks',
    image: require('../Assests/image/girl4.png'),
  },
  {
    id: '6',
    title: 'Lorem ipsum Lorem ipsum',
    price: '₹1000/-',
    stock: '50 in stocks',
    image: require('../Assests/image/girl.png'), // Replace with actual product images
  },
  {
    id: '7',
    title: 'Lorem ipsum Lorem ipsum',
    price: '₹1500/-',
    stock: '30 in stocks',
    image: require('../Assests/image/girl1.png'),
  },
  {
    id: '8',
    title: 'Lorem ipsum Lorem ipsum',
    price: '₹2000/-',
    stock: '20 in stocks',
    image: require('../Assests/image/girl4.png'),
  },
  {
    id: '9',
    title: 'Lorem ipsum Lorem ipsum',
    price: '₹2500/-',
    stock: '10 in stocks',
    image: require('../Assests/image/girl3.png'),
  },
  {
    id: '10',
    title: 'Lorem ipsum Lorem ipsum',
    price: '₹3000/-',
    stock: '10 in stocks',
    image: require('../Assests/image/girl4.png'),
  },
];

function ProductList({ navigation }) {
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered Data Based on Search Input
  const filteredData = productData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render Each Product
  const renderItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <View style={styles.priceStockContainer}>
          <Text style={styles.productPrice}>{item.price}</Text>
          <Text style={styles.productStock}>{item.stock}</Text>
        </View>

      </View>
      <TouchableOpacity>
        <Text style={styles.editText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Product List</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddProduct')}>
          <Image
            style={styles.plusIcon}
            source={require('../Assests/image/plus1.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <Image
            style={styles.dotIcon}
            source={require('../Assests/image/dot.png')}
          />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Image
          style={styles.searchIcon}
          source={require('../Assests/image/search.png')}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#A9A9A9"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      {/* Product List */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      {/* Logout Confirmation Modal */}
      <Modal transparent={true} visible={showModal} animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Image
              style={styles.error}
              source={require('../Assests/image/error.png')} />
            <Text style={styles.modalText}>Are you sure you want to Log out?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.logOutButton}
                onPress={() => {
                  setShowModal(false);
                  // Add your logout functionality here
                  console.log('User Logged Out');
                }}
              >
                <Text style={styles.buttonText}>Log Out</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setShowModal(false)}
              >
                <Text style={styles.cancelText}>cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  heading: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  plusIcon: {
    width: 20,
    height: 20,
    marginLeft: 130,
  },
  dotIcon: {
    width: 24,
    height: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DADADA',
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 38,
    marginBottom: 10,
  },
  searchIcon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 2, // Shadow for Android
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 21,
    color: '#000',
  },
  priceStockContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 12,
    color: '#A9A9A9',
    marginVertical: 3,
  },
  productStock: {
    fontSize: 12,
    color: '#A9A9A9',
  },
  editText: {
    fontFamily: 'Poppins',
    color: '#007BFF',
    fontSize: 10,
    lineHeight: 15,
    fontWeight: '400',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    height: 269,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  error: {
    width: 70,
    height: 70,
    marginBottom:10,
  },
  modalText: {
    fontFamily: 'Poppins',
    fontSize: 20,
    lineHeight:30,
    fontWeight: '500',
    marginBottom: 20,
    color: '#000',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  logOutButton: {
    backgroundColor: '#233142',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderColor: '#233142',
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'Poppins',
    color: '#FFF',
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '500',
  },
  cancelText: {
    fontFamily: 'Poppins',
    color: '#252525',
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '500',
  },
});

export default ProductList;


