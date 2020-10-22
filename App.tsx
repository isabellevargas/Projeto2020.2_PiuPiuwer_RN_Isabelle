import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";
import AppProvider from "./src/hooks/index";
import Routes from "./src/Routes/index";

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppProvider>
        <Routes/>
      <StatusBar style="auto" />
    </AppProvider>
    </SafeAreaView>
  );
}
