import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/pages/Login";
import AppProvider from "./src/hooks/index";
import Routes from "./src/Routes/index";

export default function App() {
  return (
    
    <AppProvider>
    <Routes/>
      <StatusBar style="auto" />
    </AppProvider>
      

  );
}
