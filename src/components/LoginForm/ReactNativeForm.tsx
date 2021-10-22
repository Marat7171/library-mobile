import {Formik, Form, Field } from "formik";
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";
import * as Yup from 'yup';
import {UserAPI} from "../../api/api";

const SignupSchema = Yup.object().shape({
    password: Yup.string()
        .min(4, 'Минимум 4 символа.')
        .required('Обязательное поле.'),
    email: Yup.string().required('Обязательное поле.'),
});

const MyReactNativeForm = (props) => (
    <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={SignupSchema}
        onSubmit={values => {
            UserAPI.getUser(values)
        }}
    >
        {({touched, errors,handleChange, handleBlur, handleSubmit, values}) => (
            <View style={styles.form}>
                <Text style={styles.itemFormTitle}>Email</Text>
                <TextInput style={styles.itemFormInput}
                           onChangeText={handleChange('email')}
                           onBlur={handleBlur('email')}
                           value={values.email}
                           name="email"
                />
                {errors.email && touched.email ? (
                    <Text style={styles.itemFormError}>{errors.email}</Text>
                ) : null}
                <Text style={styles.itemFormTitle}>Password</Text>
                <View style={styles.itemFormInputContainer}>
                    <TextInput style={styles.itemFormInput}
                               secureTextEntry
                               onChangeText={handleChange('password')}
                               onBlur={handleBlur('password')}
                               value={values.password}
                               name="password"
                    />
                    <Image style={styles.itemFormInputEye} source={require('../../images/Vector.png')}/>
                </View>
                {errors.password && touched.password ? (
                    <Text style={styles.itemFormError}>{errors.password}</Text>
                ) : null}
                <TouchableOpacity style={styles.itemFormButton} onPress={handleSubmit}>
                    <Text style={styles.itemFormButtonText}>Sign in</Text>
                </TouchableOpacity>
            </View>
        )}
    </Formik>
);

export default MyReactNativeForm;

const styles = StyleSheet.create({
    form: {
        display: "flex",
        marginTop: "15%",
    },
    itemFormTitle: {
        marginLeft: "10%",
        marginTop: "4%",
        marginBottom: "2%",
        fontSize: 12,
        lineHeight: 15,
        textTransform: "uppercase",
        letterSpacing: 1,
        color: "rgba(68, 89, 132, 0.3)",
    },
    itemFormInput: {
        paddingLeft: "8%",
        paddingRight: "8%",
        marginLeft: "10%",
        borderRadius: 8,
        height: 50,
        width: "80%",
        backgroundColor: "#FFFFFF",
        color: "#384F7D",
        borderBottomWidth: 3,
        borderBottomColor: "#BAFB67",

    },
    itemFormButton: {
        marginTop: "20%",
        marginLeft: "10%",
        width: "80%",
        height: "17%",
        backgroundColor: "#6790FB",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,

    },
    itemFormButtonText: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 18,
        letterSpacing: 2,
        textTransform: "uppercase",
        color: "#FFFFFF",
    },
    itemFormInputContainer: {
        position: "relative",
    },
    itemFormInputEye: {
        position: "absolute",
        left: "80%",
        top: "40%"
    },
    itemFormError: {
        marginLeft: "10%",
        marginTop: "2%",
        fontSize: 12,
        lineHeight: 15,
        color: "#ff0000",
    }
});