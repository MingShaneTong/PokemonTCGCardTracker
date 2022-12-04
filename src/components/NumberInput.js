import { useState } from "react";
import { View, Alert } from "react-native";
import { Button, IconButton } from "react-native-paper";

export default function NumberInput({ minValue, value, onChange }) {
    function increment() {
        let val = value + 1;
        onChange(val);
    }
    
    function decrement() {
        let val = value - 1;
        if(minValue != undefined && minValue <= val){
            onChange(val);
        }
    }

    function onChangeText(val) {
        val = parseInt(val);
        if(!isNaN(val)) {
            onChange(val);
        }
    }

    return (
        <View style={{ flexDirection: "row" }}>
            <IconButton
                icon="minus"
                size={20}
                onPress={decrement}
            />
            <Button>{value}</Button>
            <IconButton
                icon="plus"
                size={20}
                onPress={increment}
            />
        </View>
    );
}