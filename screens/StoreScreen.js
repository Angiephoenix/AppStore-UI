import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Bars3CenterLeftIcon, BellIcon } from "react-native-heroicons/solid";
import { storeColors } from "../theme";
import GradientButton from "../components/gradientButton";
import GameCard from "../components/gameCard";

const categories = [
  "Action",
  "Family",
  "Puzzle",
  "Adventure",
  "Racing",
  "Education",
  "Others",
];
const featured = [
    {
        id: 1,
        title: 'Zooba',
        image: require('../assets/images/zooba-zoo.png'),
        downloads: '200k',
        stars: 4
    },
    {
        id: 2,
        title: 'Subway Surfer',
        image: require('../assets/images/subway-surfers.png'),
        downloads: '5M',
        stars: 4
    },
    {
        id: 3,
        title: 'Free Fire',
        image: require('../assets/images/freeFire.png'),
        downloads: '100M',
        stars: 3
    },
    
    {
        id: 4,
        title: "Alto's Adventure",
        image: require('../assets/images/altosadventure.png'),
        downloads: '20k',
        stars: 4
    },
  ]
  

const StoreScreen = () => {
  const [activeCategory, setActiveCategory] = useState("Action");

  return (
    <LinearGradient
      colors={["rgba(169,58,244,1)", "rgba(246,74,74,1)"]}
      className="w-full flex-1"
    >
      <SafeAreaView>
        <View className="container">
          <View className="flex-row justify-between items-center px-4">
            <Bars3CenterLeftIcon color={storeColors.text} size="50" />
            <BellIcon color={storeColors.text} size="40" />
          </View>

          {/* CATEGORIES */}
          <View className="mt-3 space-y-4">
            <Text
              style={{ color: storeColors.text }}
              className="ml-4 text-3xl font-bold"
            >
              Browse Games
            </Text>
            <View className="pl-4">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map((cat) => {
                  if (cat === activeCategory) {
                    //show gradient category
                    return (
                      <GradientButton
                        key={cat}
                        containerClass="mr-2"
                        value={cat}
                      />
                    );
                  } else {
                    //show normal category
                    return (
                      <TouchableOpacity
                        onPress={() => setActiveCategory(cat)}
                        key={cat}
                        className="bg-purple-400 p-3 px-4 rounded-full mr-2"
                      >
                        <Text>{cat}</Text>
                      </TouchableOpacity>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>

          {/* FEATURED ROW */}
          <View className="mt-3 space-y-4">
                <Text
                    style={{color: storeColors.text}}
                    className="ml-4 text-lg font-bold"
                >
                    Featured Games
                </Text>
                <View className="pl-4">
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                            featured.map((item, index) => {
                                return(
                                    <GameCard key={index} game={item} />
                                )
                            })
                        }
                    </ScrollView>
                </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default StoreScreen;
