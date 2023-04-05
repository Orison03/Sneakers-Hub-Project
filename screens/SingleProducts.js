import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native";

const SingleProducts = ({ navigation, route }) => {
  const {
    image,
    title,
    rating,
    description,
    size,
    price,
    flexibility,
    thickness,
  } = route.params;

  return (
    <ScrollView className=" my-10">
      {/* header */}
      <View className="flex-row mx-5 justify-between">
        {/* back button */}
        <TouchableOpacity onPress={() => navigation.navigate("products")}>
          <View className="py-3 px-3 bg-white w-12 rounded-full">
            <Ionicons name="arrow-back" size={24} color="black" />
          </View>
        </TouchableOpacity>
        {/* cart */}
        <View className="py-3 px-3 bg-white w-12 rounded-full">
          <AntDesign name="hearto" size={24} color="black" />
        </View>
      </View>
      {/* image container */}
      <View className="justify-center items-center ">
        <Image source={image} className="h-60 w-full" />
      </View>
      <Text className="text-2xl capitalize font-semibold mx-6 my-2">
        {title}
      </Text>
      {/* description */}
      <View className="mx-6">
        <View className="flex-row space-x-1 mb-6">
          <Text>reviews :</Text>
          {Array.from({ length: 5 }, (_, index) => {
            const number = index + 0.5;
            return (
              <View key={index}>
                {rating >= index + 1 ? (
                  <FontAwesome name="star" size={16} color="gold" />
                ) : rating >= number ? (
                  <FontAwesome name="star-half-full" size={16} color="gold" />
                ) : (
                  <FontAwesome name="star-o" size={16} color="gray" />
                )}
              </View>
            );
          })}
        </View>
        {/* horizontal line */}
        <View className="h-2 rounded-full w-24 bg-blue-500"></View>
        {/* description */}
        <Text className="my-8 leading-5">{description}</Text>
        {/* material */}
      </View>
      <View>
        <Text className="bg-white w-full text-blue-500 py-4 px-6 font-medium text-xs">
          Flexibility : {flexibility}%, Thickness : {thickness}% , size : {size}
        </Text>
      </View>
      <View className="flex-row px-6 justify-between my-14 bg-blue-300 py-4 mx-6 items-center rounded-md">
        <View>
          <Text className="text-white capitalize font-medium">price</Text>
          <Text className="text-xl text-white font-bold">${price}</Text>
        </View>
        <TouchableOpacity className="rounded-lg  bg-blue-500 px-4 py-3">
          <Text className="text-white">add to cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SingleProducts;
