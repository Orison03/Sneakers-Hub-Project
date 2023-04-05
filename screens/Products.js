import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { FlatList } from "react-native";
import { mockUpData } from "../data";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Products = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const filteredData = mockUpData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <SafeAreaView className="flex-1 m-5">
      {/* header */}
      <View className="flex-row justify-between">
        <View className="py-3 px-3 bg-white w-12 rounded-full">
          <Ionicons name="arrow-back" size={24} color="black" />
        </View>
        <View className="py-3 px-3 bg-white w-12 rounded-full">
          <Ionicons name="ios-cart-outline" size={24} color="black" />
        </View>
      </View>
      {/* title and search box */}
      <View>
        <Text className="text-2xl capitalize font-semibold pt-5">
          sneakers hub
        </Text>
        <View className="my-5 bg-white shadow rounded-md">
          <View className="flex-row justify-between items-center pr-3">
            <TextInput
              className="p-4 w-full"
              placeholder="search sneakers"
              onChangeText={setSearchQuery}
              value={searchQuery}
              autoCorrect={false}
            />
            {/* <TouchableOpacity>
              <Text className="text-blue-500">filter</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
      {/* items */}
      <FlatList
        keyExtractor={(item) => item.id}
        data={filteredData}
        renderItem={({ item }) => {
          const tempStars = Array;
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("product", {
                  image: item.image,
                  title: item.title,
                  rating: item.rating,
                  description: item.description,
                  size: item.size,
                  price: item.price,
                  flexibility: item.flexibility,
                  thickness: item.thickness,
                })
              }
            >
              <View className="flex-row my-5 space-x-6">
                <Image source={item.image} className="w-36 h-24" />
                <View>
                  <Text className="mt-4 text-base font-medium capitalize">
                    {item.title}
                  </Text>
                  <View className="flex-row space-x-1 pt-2">
                    {tempStars.from({ length: 5 }, (_, index) => {
                      const number = index + 0.5;
                      return (
                        <View key={index}>
                          {item.rating >= index + 1 ? (
                            <FontAwesome name="star" size={16} color="gold" />
                          ) : item.rating >= number ? (
                            <FontAwesome
                              name="star-half-full"
                              size={16}
                              color="gold"
                            />
                          ) : (
                            <FontAwesome name="star-o" size={16} color="gray" />
                          )}
                        </View>
                      );
                    })}
                  </View>
                  <Text className="py-4">$ {item.price}.00</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Products;
