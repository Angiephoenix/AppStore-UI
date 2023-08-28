import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon } from "react-native-heroicons/solid";
import { storeColors } from "../theme";
import StarRating from "react-native-star-rating";

export default function GameCard({ game }) {
  const [favourite, setFavourite] = useState(false);
  return (
    <View className="mr-4 relative">
      <Image source={game.image} className="w-80 h-60 rounded-3xl" />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.6)"]}
        className="absolute p-4 h-full w-full flex justify-between rounded-3xl"
      >
        <View className="flex-row justify-end">
          <TouchableOpacity
            onPress={() => setFavourite(!favourite)}
            className="p-3 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
          >
            <HeartIcon
              size="30"
              color={favourite ? storeColors.redHeart : "white"}
            />
          </TouchableOpacity>
        </View>
        <View>

        </View>
      </LinearGradient>
    </View>
  );
}
