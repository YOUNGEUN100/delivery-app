import {Pressable, Text, View} from 'react-native';
import {useState} from 'react';

function Settings() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Pressable onPress={() => setCount(p => p + 1)}>
        <Text>{count}</Text>
      </Pressable>
    </View>
  );
}

export default Settings;
