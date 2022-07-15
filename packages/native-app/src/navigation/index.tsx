import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PostsScreen } from "~/screens/posts";
import { TopScreen } from "~/screens/top";

const { Navigator, Screen } = createNativeStackNavigator();

type Screens = { name: string; component: () => JSX.Element | null }[];

const screens: Screens = [
	{ name: "Top", component: TopScreen },
	{ name: "Post", component: PostsScreen },
];

export const Navigation = (): JSX.Element => {
	return (
		<NavigationContainer>
      <Navigator>
        {screens.map((screen) => (
          <Screen key={screen.name} {...screen} />
        ))}
      </Navigator>
    </NavigationContainer>
	);
};
