import { useState } from "react";
import { View, Alert } from "react-native";
import { Button, IconButton } from "react-native-paper";

export default function NumberInput({ initialValue, minValue, onChange, promptTitle }) {
    const [value, setValue] = useState(initialValue);
    
    function increment() {
        let val = value + 1;
        setValue(val);
        onChange(val);
    }
    
    function decrement() {
        let val = value - 1;
        if(minValue && minValue <= val){
            setValue(val);
            onChange(val);
        }
    }

    function onChangeText(val) {
        val = parseInt(val);
        if(!isNaN(val)) {
            setValue(val);
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