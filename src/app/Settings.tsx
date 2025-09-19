import { useActionSheet } from '@expo/react-native-action-sheet';
import Entypo from '@expo/vector-icons/Entypo';
import Constants from "expo-constants";
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const statusBarHeight = Constants.statusBarHeight

export default function Settings() {

    const { showActionSheetWithOptions } = useActionSheet();
    const { t, i18n } = useTranslation()

    const openLanguagePicker = () => {
        const options = [t("Português"), t("Inglês"), t("Cancelar")]
        const cancelButtonIndex = 2
        const showSeparators = true
        const useModal = true

        showActionSheetWithOptions(
            {
                options,
                cancelButtonIndex,
                showSeparators,
                useModal
            },
            (selectedIndex) => {
                if(selectedIndex === 0) {
                    i18n.changeLanguage('pt')
                } else if(selectedIndex === 1) {
                    i18n.changeLanguage('en')
                }
            },
        )
    }


    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.setting} onPress={() => openLanguagePicker()}>
                <Entypo name="language" size={24} color="white" />
                
                <Text style={styles.text}>{t("Idioma")}</Text>
            </TouchableOpacity>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        marginTop: statusBarHeight + 40,
        marginBottom: statusBarHeight + 10,
        paddingHorizontal: 40,
        gap: 20
    },
    text: {
        color: 'white',
        fontSize: 20
    },
    setting: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    }
})