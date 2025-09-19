import Constants from "expo-constants";
import { useGlobalSearchParams } from "expo-router/build/hooks";
import { useTranslation } from "react-i18next";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const statusBarHeight = Constants.statusBarHeight;

export default function Details() {

    const { t } = useTranslation();

    const { 
        image,
        title,
        description,
        ingredients,
        temperature
    } = useGlobalSearchParams();

    return (
        <View style={styles.container}>
            <Image
            source={{ uri: String(image) }}
            style={styles.image}
            />
            
            <View style={styles.viewInformation}>
                <Text style={[styles.text, { fontSize: 23 },]}>{t(String(title))}</Text>
                <Text style={styles.textG}>{t(String(temperature))}</Text>
                <Text style={styles.text}>Descrição</Text>
                <Text style={styles.textG}>{t(String(description))}</Text>
                <Text style={styles.text}>Ingredientes</Text>

                {/* Listar os ingredientes */}
                <FlatList
                    data={JSON.parse(String(ingredients))}
                    keyExtractor={(item) => item.toString()}
                    renderItem={({item}) => (
                        <Text style={styles.textG}>- {t(String(item))}</Text>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: statusBarHeight + 10,
        margin: 40
    },
    text: {
        color: 'white',
        fontSize: 20
    },
    textG: {
        color: '#cacacaff',
        fontSize: 15
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 10,
        alignSelf: 'center'
    },
    viewInformation: {
        gap: 16,
        marginVertical: 50
    }
})
