import { Text, View } from "react-native";

import {
  Slot,
} from "expo-router";


import { ClerkProvider } from "@clerk/clerk-expo";

export default function Layout() {
  // Render the children routes now that all the assets are loaded.
  return (<ClerkProvider publishableKey="YOUR_PUB_KEY"><Slot /></ClerkProvider>);
}
