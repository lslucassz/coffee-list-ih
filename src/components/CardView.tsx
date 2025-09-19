import { useTranslation } from "react-i18next";
import { Image, StyleSheet, Text, View } from "react-native";

type CardProps = {
    title: string;
    image: string;
    description: string;
}

export default function CardView({ title, image, description } : CardProps) {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <View>
                <Image source={{ uri: image }} style={styles.image} />
                
                <View style={styles.viewTexts} >
                    <Text style={styles.title} numberOfLines={1}>{t(String(title))}</Text>
                </View>

                <View style={styles.viewTexts} >
                    <Text style={styles.description} numberOfLines={2}>{t(String(description))}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#815f2dff',
        borderRadius: 10,
        width: 175,
        height: 250,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30
    },
    image: {
        width: 175,
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        paddingTop: 13
    },
    description: {
        color: 'rgba(255, 255, 255, 0.81)',
        fontSize: 13,
        paddingTop: 13
    },
    viewTexts: {
        marginHorizontal: 8
    }
})