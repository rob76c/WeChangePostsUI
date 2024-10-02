import { withLayoutContext } from "expo-router";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Text } from "react-native";

const DrawerNavigator= createDrawerNavigator().Navigator;

const Drawer= withLayoutContext(DrawerNavigator);

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(tabs)',
  };

  function CustomDrawerContent(props) {
    return (
    <DrawerContentScrollView {...props}>
        <Text style= {{alignSelf: 'center', fontSize: 20, color: "white"}}>Robert</Text>
        <DrawerItemList {...props} />
    </DrawerContentScrollView>
    );
  }

export default function DrawerLayout() {
    return ( 
        <Drawer drawerContent={(props) => <CustomDrawerContent {...props}/>}>
        <Drawer.Screen name="(tabs)" options={{headerShown: false, title: 'Home'}} />
        <Drawer.Screen name="bookmarks" options={{headerShown: false, title: 'Bookmarks'}} />
        <Drawer.Screen name="post-blue" options={{headerShown: false, title: 'Post Blue'}} />
        </Drawer>
);
}
