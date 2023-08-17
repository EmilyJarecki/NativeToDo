import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

const TaskItem = (props) => {
  return (

    // this div puts the two divs together
    <View style={styles.container}>

        {/* this is a seperate div */}
        <View style={styles.indexContainer}>

            {/* this gives the number */}
            <Text style={styles.index}>{props.index}</Text>
        </View>

        {/* this is a seperate div */}
        <View style={styles.taskContainer}>
            <Text style={styles.task}>{props.task}</Text>

            {/* the function from the other component */}
            <TouchableOpacity onPress={() => props.deleteTask()}>

                {/* just the icon imported */}
                <MaterialIcons style={styles.delete} name="delete" size={18} color='#fff' />
            </TouchableOpacity>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    indexContainer: {
        backgroundColor: '#3E3364',
        borderRadius: 12,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    index: {
        color: '#fff',
        fontSize: 20,
    },
    taskContainer: {
        backgroundColor: '#3E3364',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        minHeight: 50,
    },
    task: {
        color: '#fff',
        width: '90%',
        fontSize: 16,
    },
    delete: {
        marginLeft: 10,
    },
});
export default TaskItem