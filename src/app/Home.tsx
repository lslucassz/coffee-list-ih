
import Feather from '@expo/vector-icons/Feather';
import Constants from "expo-constants";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CardView from "../components/CardView";

const statusBarHeight = Constants.statusBarHeight;

export default function Home() {

    const [data, setData] = useState();
    const [temperature, setTemperature] = useState("hot");

    const { t } = useTranslation()

    useEffect(() => {
        const getList = async () => {
            try {
                const response = await fetch(`{colocar a api aqui}/coffees/` + temperature);
                const json = await response.json();
                setData(json)
            } catch (error) {
                throw error
            }
        }

        getList()
        
    }, [temperature])

    return (
        <View style={styles.container}>
            <View style={styles.viewSettings}> 
                <TouchableOpacity onPress={() => router.push({
                    pathname: '/Settings'
                })}>
                    <Feather name="settings" size={24} color="white" />
                </TouchableOpacity>
            </View>
            
            <View style={styles.viewTemperature}>
                <TouchableOpacity onPress={() => { setTemperature("hot") }}>
                    <Text
                    style={[{
                        color: temperature === 'hot' ? "#e77b00ff" : "#FFF",
                        borderBottomColor: "#e77b00ff",
                        borderBottomWidth: temperature === 'iced' ? 0 : 1
                    },
                    styles.title]}
                    >
                        {t("Quente")}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setTemperature("iced") }}>
                    <Text
                    style={[{
                        color: temperature === 'iced' ? "#0086d3ff" : "#FFF",
                        borderBottomColor: "#0086d3ff",
                        borderBottomWidth: temperature === 'hot' ? 0 : 1
                    },
                    styles.title]}
                    >
                        {t("Gelado")}
                    </Text>
                </TouchableOpacity>
            </View>
            
            <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.cardView} onPress={() => router.navigate({
                    pathname: '/Details',
                    params: {
                        image: item.image,
                        title: item.title,
                        description: item.description,
                        ingredients: JSON.stringify(item.ingredients),
                        temperature: temperature
                    }
                })}>
                    <CardView title={item.title} image={item.image} description={item.description} />
                </TouchableOpacity>
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: statusBarHeight,
        marginBottom: statusBarHeight + 10
    },
    cardView: {
        marginHorizontal: '3%'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    viewSettings: {
        paddingVertical: 20,
        justifyContent: 'center',
        width: "85%",
        alignItems: 'flex-end',
        gap: 20
    },
    viewTemperature: {
        flexDirection: 'row',
        gap: '35%',
        paddingVertical: 5
    }
})