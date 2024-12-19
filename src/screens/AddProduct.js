import {
    StyleSheet,
    Text,
    View,
    Alert,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import React, { useState } from 'react';
import Button from '../component/Button';
import TextInputs from '../component/TextInputs';

function AddProduct({ navigation }) {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productSize, setProductSize] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [offerPrice, setOfferPrice] = useState('');
    const [noq, setNoq] = useState('');
    const [stock, setStock] = useState('');

    const handleSubmit = () => {
        if (!productName || !productDescription || !productPrice || !stock) {
            Alert.alert('Error', 'All required fields must be filled.');
        } else {
            Alert.alert('Product Added', `Product: ${productName}`);
        }
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Header Section */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        style={styles.icon}
                        source={require('../Assests/image/chevron-left.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.heading}>Add Product</Text>
                <TouchableOpacity>
                    <Image
                        style={styles.dotIcon}
                        source={require('../Assests/image/dot.png')}
                    />
                </TouchableOpacity>
            </View>

            {/* Form Section */}
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Product Name</Text>
                    <TextInputs
                        placeholder="Product Name"
                        value={productName}
                        onChangeText={setProductName}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Product Description</Text>
                    <TextInputs
                        placeholder="Product Description"
                        value={productDescription}
                        onChangeText={setProductDescription}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Product Image</Text>
                    <View style={styles.inputWithIcon}>
                        <TextInput
                            placeholder="Product Image"
                            value={productImage}
                            onChangeText={setProductImage}
                            style={styles.textInput}
                        />
                        <Image
                            style={styles.iconImage}
                            source={require('../Assests/image/pin.png')}
                        />
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Product Size</Text>
                    <TextInputs
                        placeholder="Product Size"
                        value={productSize}
                        onChangeText={setProductSize}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Product Price</Text>
                    <TextInputs
                        placeholder="Product Price"
                        value={productPrice}
                        onChangeText={setProductPrice}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Product Offer Price</Text>
                    <View style={styles.inputWithIcon}>
                        <TextInput
                            placeholder="Product Offer Price"
                            value={offerPrice}
                            onChangeText={setOfferPrice}
                            style={styles.textInput}
                        />
                        <Image
                            style={styles.iconImage}
                            source={require('../Assests/image/eye-crossed.png')}
                        />
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>NOQ</Text>
                    <TextInputs
                        placeholder="NOQ"
                        value={noq}
                        onChangeText={setNoq}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Stock</Text>
                    <View style={styles.inputWithIcon}>
                        <TextInput
                            placeholder="Stock"
                            value={stock}
                            onChangeText={setStock}
                            style={styles.textInput}
                        />
                        <Image
                            style={styles.iconImage}
                            source={require('../Assests/image/chevron-down.png')}
                        />
                    </View>
                </View>

                <Button
                    title="Submit"
                    onPress={handleSubmit}
                    buttonStyle={styles.button}
                    textStyle={styles.buttonText}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       // backgroundColor: 'gray',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    heading: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '500',
        color: '#000000',
        flex: 1,
        textAlign: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    },
    dotIcon: {
        width: 24,
        height: 24,
    },
    formContainer: {
        paddingHorizontal: 18,
        paddingTop: 10,
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '500',
        color: '#000000',
        marginBottom: 5,
    },
    inputWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
    },
    textInput: {
        flex: 1,
        fontSize: 14,
       // color: '#000',
    },
    iconImage: {
        width: 20,
        height: 20,
       // tintColor: '#aaa',
    },
    button: {
        backgroundColor: '#233142',
        borderRadius: 8,
        paddingVertical: 12,
        marginTop: 10,
        alignItems: 'center',
        marginBottom:20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Poppins',
    },
});

export default AddProduct;


// import {
//     StyleSheet,
//     Text,
//     View,
//     Alert,
//     Image,
//     TextInput,
//     TouchableOpacity,
//     ScrollView
// } from 'react-native';
// import React, { useState } from 'react';
// import Button from '../component/Button';
// import TextInputs from '../component/TextInputs';

// function AddProduct({ navigation }) {
//     const [email, setEmail] = useState('');
//     const [fullName, setFullName] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleLogin = () => {
//         if (email === '' || password === '' || fullName === '') {
//             setError('All fields are required.');
//         } else {
//             setError('');
//             Alert.alert('Profile Saved', `Welcome, ${fullName}!`);
//         }
//     };

//     return (
//         <ScrollView>
//         <View style={styles.container}>
//             {/* Header Section */}
//             <View style={styles.headerContainer}>
//                 <TouchableOpacity onPress={() => navigation.goBack()}>
//                     <Image
//                         style={styles.icon}
//                         source={require('../Assests/image/chevron-left.png')}
//                     />
//                 </TouchableOpacity>
//                 <Text style={styles.heading}>Add Product</Text>
//                 <TouchableOpacity>
//                     <Image
//                         style={styles.dotIcon}
//                         source={require('../Assests/image/dot.png')}
//                     />
//                 </TouchableOpacity>
//             </View>



//             {/* Form Section */}
//             <View style={styles.box}>

//                 <View style={styles.inputContainer}>
//                     <Text style={styles.label}> Product Name</Text>
//                     <TextInputs
//                         placeholder="Product Name"
//                         value={email}
//                         onChangeText={setEmail}
//                      />
//                 </View>

//                 <View style={styles.inputContainer}>
//                     <Text style={styles.label}> Product Description</Text>
//                     <TextInputs
//                         placeholder="Product Description"
//                         value={fullName}
//                         onChangeText={setFullName}
//                     />
//                 </View>

//                 <View style={styles.inputContainer}>
//                     <Text style={styles.label}>Product Image</Text>
//                     <View style={styles.passwordContainer}>
//                         <TextInput
//                             placeholder="Product Image"
//                             value={password}
//                             onChangeText={setPassword}
//                             style={styles.passwordInput}
//                         />
//                         <Image
//                             style={styles.eyeIcon}
//                             source={require('../Assests/image/pin.png')}
//                         />
//                     </View>
//                 </View>

//                 <View style={styles.inputContainer}>
//                     <Text style={styles.label}>Product Size</Text>
//                     <TextInputs
//                         placeholder="Product Size"
//                         value={email}
//                         onChangeText={setEmail}
//                         />
//                 </View>

//                 <View style={styles.inputContainer}>
//                     <Text style={styles.label}>Product Price</Text>
//                     <TextInputs
//                         placeholder="Product Price"
//                         value={fullName}
//                         onChangeText={setFullName}
//                     />
//                 </View>

//                 <View style={styles.inputContainer}>
//                     <Text style={styles.label}>Product Offer Price</Text>
//                     <View style={styles.passwordContainer}>
//                         <TextInput
//                             placeholder="Product Offer Price"
//                             value={password}
//                             onChangeText={setPassword}
//                             secureTextEntry={true}
//                             style={styles.passwordInput}
//                         />
//                         <Image
//                             style={styles.eyeIcon}
//                             source={require('../Assests/image/eye-crossed.png')}
//                         />
//                     </View>
//                 </View>

//                 <View style={styles.inputContainer}>
//                     <Text style={styles.label}>NOQ</Text>
//                     <TextInputs
//                         placeholder="NOQ"
//                         value={fullName}
//                         onChangeText={setFullName}
//                     />
//                 </View>

//                 <View style={styles.inputContainer}>
//                     <Text style={styles.label}>Stock</Text>
//                     <View style={styles.passwordContainer}>
//                         <TextInput
//                             placeholder="Stock"
//                             value={password}
//                             onChangeText={setPassword}
//                             style={styles.passwordInput}
//                         />
//                         <Image
//                             style={styles.eyeIcon}
//                             source={require('../Assests/image/chevron-down.png')}
//                         />
//                     </View>
//                 </View>


//                 <Button
//                     title="Submit"
//                     onPress={handleLogin}
//                     buttonStyle={styles.button}
//                     textStyle={styles.buttonText}
//                 />
//             </View>
//         </View>
//         </ScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     headerContainer: {
//         flexDirection: 'row',
//         justifyContent: 'flex-start',
//         alignItems: 'flex-start',
//         paddingHorizontal: 20,
//         backgroundColor: '#FFFFFF',
//         padding: 20,
//     },
//     heading: {
//         fontFamily: 'Poppins',
//         fontSize: 16,
//         lineHeight: 24,
//         fontWeight: '600',
//         color: '#252525',
//         marginLeft: 20,
//     },
//     icon: {
//         width: 24,
//         height: 24,
//         // marginLeft: 10,
//     },
//     dotIcon: {
//         width: 24,
//         height: 24,
//         marginLeft: 155,
//     },

//     box: {
//         backgroundColor: 'white',
//         width: '100%',
//         flex: 1,
//         padding: 20,
//         marginTop: 20,
//     },
//     inputContainer: {
//         marginBottom: 20,
//     },
//     label: {
//         fontFamily: 'Poppins',
//         fontSize: 16,
//         fontWeight: '500',
//         lineHeight:24,
//         color: '#000000',
//     },

//     passwordContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 8,
//         paddingHorizontal: 10,
//         marginTop: 5,
//     },
//     passwordInput: {
//         flex: 1,
//         fontSize: 16,
//         color: '#000',
//     },
//     eyeIcon: {
//         width: 24,
//         height: 24,
//         tintColor: '#aaa',
//     },
//     button: {
//         backgroundColor: '#233142',
//         width: '100%',
//         borderRadius: 10,
//         paddingVertical: 10,
//         marginTop: 20,
//     },
//     buttonText: {
//         fontFamily: 'Poppins',
//         fontSize: 20,
//         color: 'white',
//         textAlign: 'center',
//         fontWeight: '500',
//     },
// });

// export default AddProduct;




