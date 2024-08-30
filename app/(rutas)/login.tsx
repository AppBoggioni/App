import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

import { ThemedTextInput } from '@/components/ThemeTextImputProps';
import {personal} from '@/app/(rutas)/personal'

interface LoginFormValues {
  username: string;
  password: string;
}

  const userData = [
    { username: 'JuanPerez' },   // Supongamos que estos son los nombres de usuario de tus supervisores, operadores, etc.
    { username: 'AnaGomez' },
    { username: 'CarlosRuiz' },
    { username: 'LuisaMorales' },
    { username: 'JorgeCano' },
    { username: 'SofiaCastro' },
    { username: 'EstebanQuito' },
    { username: 'MartaSaenz' },
    { username: 'OscarCampo' },
    { username: 'FernandaValle' },
    { username: 'DiegoMar' },
    { username: 'AliciaSierra' }
];



const loginValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required')  // La contraseña es requerida pero no verificada
});

const LoginScreen = () => {
    const navigation = useNavigation();

    const handleSubmit = (values: LoginFormValues, { setSubmitting }: FormikHelpers<LoginFormValues>) => {
        const userExists = userData.some(user => user.username.toLowerCase() === values.username.toLowerCase());
        if (userExists) {
            console.log('Login successful', values.username);
            navigation.navigate('personal'); // Navega a la pantalla Home
            setSubmitting(false); // Finaliza el estado de submitting
        } else {
            console.error('Login failed: username not found');
            alert('Login failed: username not found'); // Muestra un mensaje de error
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={loginValidationSchema}
            onSubmit={handleSubmit}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.container}>
                    <ThemedTextInput
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                        placeholder="Username"
                    />
                    {touched.username && errors.username &&
                        <Text style={styles.errorText}>{errors.username}</Text>}
                    <ThemedTextInput
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholder="Password"
                        secureTextEntry
                    />
                    {touched.password && errors.password &&
                        <Text style={styles.errorText}>{errors.password}</Text>}
                    <Button onPress={() => handleSubmit()} title="Login" />
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
  }
});

export default LoginScreen;
