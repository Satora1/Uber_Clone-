import { icons } from "@/constants"
import { router } from "expo-router"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import Map from "@/components/map";

const RideLayout = ({ title, children }: { title: string, children: React.ReactNode }) => {
    return (
        <GestureHandlerRootView>
            <View className="flex-1 bg-white">
                <View className="flex flex-col h-screen bg-blue-500">
                    <View className="flex flex-row absolute z-10 top-16 items-center justify-start px-5">
                        <TouchableOpacity onPress={() => router.back()}>
                            <View className="w-10 h-10 bg-white rounded-full items-center justify-center">
                                <Image source={icons.backArrow} resizeMode="contain" className="w-6 h-6" />
                            </View>
                        </TouchableOpacity>
                        <Text className="text-xl font-JakartaSemiBold">
                            {title||"Go Back"}
                        </Text>
                       
                    </View>
                     <Map/>
                </View>
            </View>
        </GestureHandlerRootView>
    )

}
export default RideLayout