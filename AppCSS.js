import {StyleSheet} from 'react-native';

const AppCSS = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    title: {
        color: '#867ad3',
        fontWeight: 'bold',
        fontSize: 40,
    },
    titleLogo: {
        width: 40,
        height: 40,
        resizeMode: 'stretch',
    },
    urlInput: {
        width: '80%',
        height: 50,
        backgroundColor: '#ededed',
        color: '#4682b4',
        borderColor: 0,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        fontSize: 20,
    },
    shortBtn: {
        width: '80%',
        height: 50,
        backgroundColor: '#867ad3',
        borderRadius: 5,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    finalUrl: {
        width: '80%',
        height: 40,
        marginTop: 20,
        color: '#4682b4',
        textAlign: 'center',
    },
    copy: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 35,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: 0,
        backgroundColor: '#ededed',
        marginTop: 20,
    },
});

export default AppCSS;