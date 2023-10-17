import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import CreateOcorrencia from '../pages/CreateOcorrencia';
import PagInicial from '../pages/PagInicial';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name="SignUp"
                component={SignUp}
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
                    <AuthStack.Screen
                name="CreateOcorrencia"
                component={CreateOcorrencia}
                options={{
                    headerShown: false,
                }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;