
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Define una interfaz para los datos de trabajadores
interface Worker {
    id: string;
    name: string;
    role: string;
}

const workersData: Worker[] = [
    { id: '1', name: 'Juan Pérez', role: 'Supervisor' },
    { id: '2', name: 'Ana Gómez', role: 'Supervisor' },
    { id: '3', name: 'Carlos Ruiz', role: 'Supervisor' },
    { id: '4', name: 'Luisa Morales', role: 'Operador' },
    { id: '5', name: 'Jorge Cano', role: 'Operador' },
    { id: '6', name: 'Sofía Castro', role: 'Operador' },
    { id: '7', name: 'Esteban Quito', role: 'Ayudante Primario' },
    { id: '8', name: 'Marta Saenz', role: 'Ayudante Primario' },
    { id: '9', name: 'Oscar Campo', role: 'Ayudante Primario' },
    { id: '10', name: 'Fernanda Valle', role: 'Ayudante Secundario' },
    { id: '11', name: 'Diego Mar', role: 'Ayudante Secundario' },
    { id: '12', name: 'Alicia Sierra', role: 'Ayudante Secundario' }
];

const WorkersScreen = () => {
    const renderItem = ({ item }: { item: Worker }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.role}>{item.role}</Text>
        </View>
    );

    return (
        <FlatList
            data={workersData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContainer}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        padding: 20,
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    role: {
        fontSize: 14
    }
});

export default WorkersScreen;
