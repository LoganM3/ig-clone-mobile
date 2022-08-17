import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
    headerBar: {
        height:40,
        backgroundColor: 'white',
    },
    headerText:{
        fontSize: 18,
        fontWeight: '900',
        textAlign: 'center',
    },
})

export const photCardStyles = StyleSheet.create({
    cardContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginHorizontal: 15,
    },
    cardHeader: {
        marginLeft: 1,
        flexDirection: 'row',
    },
    cardHeaderText: {
        marginLeft:15,
    },
    cardLocation: {
        color: 'gray',
        fontSize: 12,
    },
    cardText:{
        margin: 20,
    },
    cardImage: {
        width: '100',
        aspectRatio: 1,
        flex: 1,
    }

})

export const photoListStyles = StyleSheet.create({
    photoList: {
        flex: 1,
        backgroundColor: 'white',
    }
})

