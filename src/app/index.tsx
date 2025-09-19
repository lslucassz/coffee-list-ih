import { View } from "react-native";
import "../translation/i18n";
import WelcomeScreen from "./WelcomeScreen";

export default function Index() {
    
    return (
        <View style={{ flex: 1 }}>
            <WelcomeScreen />
        </View>
    )
}