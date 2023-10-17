import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import DetailsUser from "../pages/DetailsUser";
import CreateOcorrencia from "../pages/CreateOcorrencia";
import PagInicial from "../pages/PagInicial";


const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="CreateOcorrencia"
        component={CreateOcorrencia}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="DetailsUser"
        component={DetailsUser}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="PagInicial"
        component={PagInicial}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
