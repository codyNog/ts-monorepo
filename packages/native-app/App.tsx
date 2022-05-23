import { NativeBaseProvider } from "native-base";
import { SafeAreaView } from "react-native";
import { Navigation } from "~/navigation";

const App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Navigation />
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
