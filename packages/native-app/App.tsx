import { ComponentProvider } from "@native/ui/components/provider";
import { SafeAreaView } from "react-native";
import { Navigation } from "~/navigation";

const App = () => {
  return (
    <ComponentProvider>
      <SafeAreaView>
        <Navigation />
      </SafeAreaView>
    </ComponentProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
