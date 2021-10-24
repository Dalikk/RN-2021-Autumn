import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Lab1 from '../screens/Lab1'
import Lab2 from '../screens/Lab2'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions = {{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 80,
                    width: '90%'
                }
            }}
        >
            <Tab.Screen name = "lab1" component = {Lab1} />
            <Tab.Screen name = "lab2" component = {Lab2} />
        </Tab.Navigator>
    );
}

export default TabNavigator;