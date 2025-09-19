import Constants from "expo-constants";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const statusBarHeight = Constants.statusBarHeight;

export default function WelcomeScreen() {

    const { t } = useTranslation()

    return (
        <ImageBackground
            source={{ uri:
                 "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg1fHxibGFjayUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"
            }}
            style={styles.container}
        >
            <View style={styles.viewTitle}>
                <Text style={styles.title}>{t("Para Quem Ama Café")}</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.navigate({
                    pathname: '/Home'
                })}
            >
                <Text style={styles.titleButton}>{t("Avançar")}</Text>
            </TouchableOpacity>
            
        
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    viewTitle: {
        flex: 1,
        paddingTop: statusBarHeight,
        margin: 45
    },
    title: {
        fontSize: 45,
        color: '#FFF',
        fontWeight: 'bold',
        width: 150
    },
    button: {
        width: 200,
        height: 60,
        backgroundColor: '#815f2dff',
        alignSelf: 'center',
        bottom: statusBarHeight + 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    titleButton: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold'
    }
})