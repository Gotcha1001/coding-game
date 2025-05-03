export const reactNativeData = {
  components: {
    title: "React Native Components",
    description: "Learn how to build UI with React Native components.",
    pages: [
      {
        title: "Introduction to Components",
        content: `
# React Native Components

Components are the building blocks of React Native apps.

\`\`\`jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello, React Native!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
\`\`\`

Key concepts:
- **View**: Basic container component
- **Text**: Displays text
- **StyleSheet**: Defines styles for components
        `,
      },
      {
        title: "Functional Components",
        content: `
# Functional Components

Use functional components with hooks for state and effects.

\`\`\`jsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Counter;
\`\`\`

Tips:
- **useState**: Manages component state
- **Button**: Basic button component
- **Event Handling**: Use onPress for touch events
        `,
      },
      {
        title: "Styling in React Native",
        content: `
# Styling in React Native

Style components using StyleSheet or inline styles.

\`\`\`jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Styled Text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default App;
\`\`\`

Key points:
- **Flexbox**: Default layout system
- **StyleSheet.create**: Optimizes style definitions
- **Platform-Specific Styles**: Use Platform module for iOS/Android
        `,
      },
    ],
    quiz: [
      {
        question:
          "Which component is used as a basic container in React Native?",
        options: ["Div", "View", "Section", "Container"],
        answer: 1,
      },
      {
        question: "What hook is used to manage state in functional components?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        answer: 1,
      },
      {
        question: "Which module is used to define styles in React Native?",
        options: ["Style", "CSS", "StyleSheet", "Styles"],
        answer: 2,
      },
    ],
  },
  navigation: {
    title: "React Native Navigation",
    description: "Master navigation in React Native apps.",
    pages: [
      {
        title: "Introduction to Navigation",
        content: `
# React Native Navigation

Navigation enables moving between screens in an app.

\`\`\`jsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home Screen</Text>
    <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
  </View>
);

const DetailsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
\`\`\`

Features:
- **NavigationContainer**: Wraps navigation structure
- **Stack Navigator**: Provides stack-based navigation
- **navigate**: Moves to a new screen
        `,
      },
      {
        title: "Passing Parameters",
        content: `
# Passing Parameters

Pass data between screens using navigation parameters.

\`\`\`jsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details', { itemId: 42 })}
    />
  </View>
);

const DetailsScreen = ({ route }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Item ID: {route.params.itemId}</Text>
  </View>
);

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
\`\`\`

Notes:
- **route.params**: Access parameters passed to a screen
- **navigate**: Pass parameters as second argument
- **Default Values**: Handle missing parameters
        `,
      },
      {
        title: "Tab Navigation",
        content: `
# Tab Navigation

Use tab navigation for bottom or top tabs.

\`\`\`jsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Settings</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
\`\`\`

Key points:
- **BottomTabNavigator**: Creates bottom tab navigation
- **Screen Options**: Customize tab icons and labels
- **NavigationContainer**: Required for all navigators
        `,
      },
    ],
    quiz: [
      {
        question:
          "Which component wraps the navigation structure in React Native?",
        options: [
          "Navigator",
          "NavigationContainer",
          "StackNavigator",
          "Route",
        ],
        answer: 1,
      },
      {
        question: "How do you access parameters passed to a screen?",
        options: [
          "props.params",
          "route.params",
          "navigation.params",
          "screen.params",
        ],
        answer: 1,
      },
      {
        question: "Which navigator creates bottom tab navigation?",
        options: [
          "StackNavigator",
          "TabNavigator",
          "BottomTabNavigator",
          "createBottomTabNavigator",
        ],
        answer: 3,
      },
    ],
  },
  lists: {
    title: "React Native Lists",
    description: "Learn to render lists efficiently in React Native.",
    pages: [
      {
        title: "Introduction to Lists",
        content: `
# Lists

FlatList is used to render large lists efficiently in React Native.

\`\`\`jsx
import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const DATA = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 20 },
  item: { padding: 10, fontSize: 18, height: 44 },
});

export default App;
\`\`\`

Key concepts:
- **FlatList**: Efficiently renders lists
- **renderItem**: Defines how each item is rendered
- **keyExtractor**: Provides unique keys for items
        `,
      },
    ],
    quiz: [
      {
        question:
          "Which component is used for rendering large lists in React Native?",
        options: ["ListView", "FlatList", "ScrollView", "MapView"],
        answer: 1,
      },
    ],
  },
  touchables: {
    title: "React Native Touchables",
    description:
      "Handle touch events with touchable components in React Native.",
    pages: [
      {
        title: "Introduction to Touchables",
        content: `
# Touchables

Touchable components handle user touch interactions.

\`\`\`jsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Button Pressed!')}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: { backgroundColor: 'blue', padding: 10, borderRadius: 5 },
  buttonText: { color: 'white', fontSize: 16 },
});

export default App;
\`\`\`

Key concepts:
- **TouchableOpacity**: Button with opacity feedback
- **onPress**: Handles touch events
- **Alert**: Displays simple alerts
        `,
      },
    ],
    quiz: [
      {
        question: "Which component provides a button with opacity feedback?",
        options: [
          "Button",
          "TouchableOpacity",
          "Pressable",
          "TouchableHighlight",
        ],
        answer: 1,
      },
    ],
  },
  platform: {
    title: "React Native Platform-Specific Code",
    description:
      "Write platform-specific code for iOS and Android in React Native.",
    pages: [
      {
        title: "Introduction to Platform-Specific Code",
        content: `
# Platform-Specific Code

Handle differences between iOS and Android using the Platform module.

\`\`\`jsx
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Running on {Platform.OS === 'ios' ? 'iOS' : 'Android'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: {
    fontSize: 18,
    ...Platform.select({
      ios: { color: 'blue' },
      android: { color: 'green' },
    }),
  },
});

export default App;
\`\`\`

Key concepts:
- **Platform.OS**: Detects the platform (ios or android)
- **Platform.select**: Chooses platform-specific values
- **File Extensions**: Use .ios.js or .android.js for platform-specific files
        `,
      },
    ],
    quiz: [
      {
        question: "What does Platform.OS return in React Native?",
        options: [
          "ios or android",
          "true or false",
          "web or native",
          "version number",
        ],
        answer: 0,
      },
    ],
  },
  asyncStorage: {
    title: "React Native Async Storage",
    description: "Persist data locally in React Native using AsyncStorage.",
    pages: [
      {
        title: "Introduction to AsyncStorage",
        content: `
# AsyncStorage

AsyncStorage is a simple key-value storage system for persisting data.

\`\`\`jsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('key').then(storedValue => {
      setValue(storedValue);
    });
  }, []);

  const saveData = async () => {
    await AsyncStorage.setItem('key', 'Hello, AsyncStorage!');
    setValue('Hello, AsyncStorage!');
  };

  return (
    <View style={styles.container}>
      <Text>Stored Value: {value || 'None'}</Text>
      <Button title="Save Data" onPress={saveData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default App;
\`\`\`

Key concepts:
- **AsyncStorage.setItem**: Saves data
- **AsyncStorage.getItem**: Retrieves data
- **Async**: All operations are asynchronous
        `,
      },
    ],
    quiz: [
      {
        question: "What is AsyncStorage used for in React Native?",
        options: [
          "Network requests",
          "Local data persistence",
          "State management",
          "Animation",
        ],
        answer: 1,
      },
    ],
  },
  gestures: {
    title: "React Native Gestures",
    description:
      "Handle gestures in React Native using react-native-gesture-handler.",
    pages: [
      {
        title: "Introduction to Gestures",
        content: `
# Gestures

Use react-native-gesture-handler for advanced touch interactions.

\`\`\`jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

const App = () => {
  const onGestureEvent = event => {
    console.log('Gesture:', event.nativeEvent.translationX);
  };

  const onHandlerStateChange = event => {
    if (event.nativeEvent.state === State.END) {
      console.log('Gesture ended');
    }
  };

  return (
    <View style={styles.container}>
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <View style={styles.box} />
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  box: { width: 100, height: 100, backgroundColor: 'blue' },
});

export default App;
\`\`\`

Key concepts:
- **PanGestureHandler**: Handles drag gestures
- **State**: Tracks gesture lifecycle
- **Event Handling**: Responds to gesture changes
        `,
      },
    ],
    quiz: [
      {
        question:
          "Which library is used for advanced gestures in React Native?",
        options: [
          "react-native-gestures",
          "react-native-gesture-handler",
          "react-native-touch",
          "react-native-interact",
        ],
        answer: 1,
      },
    ],
  },
  animations: {
    title: "React Native Animations",
    description: "Create smooth animations in React Native using Animated API.",
    pages: [
      {
        title: "Introduction to Animations",
        content: `
# Animations

The Animated API creates smooth, performant animations.

\`\`\`jsx
import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const App = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { opacity: fadeAnim }]}>
        <Text>Fade In</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  box: { width: 100, height: 100, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' },
});

export default App;
\`\`\`

Key concepts:
- **Animated.Value**: Tracks animation state
- **Animated.timing**: Creates timed animations
- **useNativeDriver**: Improves performance
        `,
      },
    ],
    quiz: [
      {
        question: "Which API is used for animations in React Native?",
        options: ["Animation", "Animated", "Motion", "Transition"],
        answer: 1,
      },
    ],
  },
  redux: {
    title: "React Native Redux",
    description: "Manage state in React Native apps using Redux.",
    pages: [
      {
        title: "Introduction to Redux",
        content: `
# Redux

Redux provides centralized state management for React Native apps.

\`\`\`jsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createStore } from 'redux';

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch({ type: 'INCREMENT' })} />
    </View>
  );
};

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default App;
\`\`\`

Key concepts:
- **Store**: Holds the app state
- **Reducer**: Updates state based on actions
- **Provider**: Makes store available to components
        `,
      },
    ],
    quiz: [
      {
        question: "What is the role of a Redux reducer?",
        options: [
          "Renders components",
          "Updates state based on actions",
          "Handles navigation",
          "Manages animations",
        ],
        answer: 1,
      },
    ],
  },
  typescript: {
    title: "React Native with TypeScript",
    description: "Use TypeScript in React Native for type-safe development.",
    pages: [
      {
        title: "Introduction to TypeScript",
        content: `
# TypeScript in React Native

TypeScript adds type safety to React Native components.

\`\`\`tsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface Props {
  title: string;
}

const MyComponent: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Button title="Click" onPress={() => console.log('Pressed')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default MyComponent;
\`\`\`

Key concepts:
- **Interfaces**: Define prop types
- **React.FC**: Type for functional components
- **Type Safety**: Prevents runtime errors
        `,
      },
    ],
    quiz: [
      {
        question:
          "What does React.FC represent in TypeScript for React Native?",
        options: [
          "Functional Class",
          "Functional Component",
          "Factory Component",
          "File Component",
        ],
        answer: 1,
      },
    ],
  },
  imageHandling: {
    title: "React Native Image Handling",
    description: "Learn to display and manage images in React Native apps.",
    pages: [
      {
        title: "Introduction to Image Handling",
        content: `
# Image Handling

The Image component displays images from local or remote sources.

\`\`\`jsx
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />
      <Image
        source={require('./assets/local-image.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 100, height: 100, margin: 10 },
});

export default App;
\`\`\`

Key concepts:
- **Image Component**: Displays images
- **source**: Specifies image URL or local file
- **resizeMode**: Controls image scaling (cover, contain, stretch)
        `,
      },
      {
        title: "Image Caching and Loading",
        content: `
# Image Caching and Loading

Optimize image loading with caching and placeholders.

\`\`\`jsx
import React from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
        defaultSource={require('./assets/placeholder.png')}
        onLoad={() => console.log('Image loaded')}
        onError={() => console.log('Image failed to load')}
      />
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 100, height: 100, margin: 10 },
});

export default App;
\`\`\`

Tips:
- **defaultSource**: Placeholder image during loading
- **onLoad/onError**: Handle loading events
- **ActivityIndicator**: Shows loading spinner
        `,
      },
    ],
    quiz: [
      {
        question: "Which component is used to display images in React Native?",
        options: ["ImageView", "Image", "Picture", "Img"],
        answer: 1,
      },
      {
        question:
          "What prop specifies the image source in the Image component?",
        options: ["src", "source", "uri", "image"],
        answer: 1,
      },
    ],
  },
  networking: {
    title: "React Native Networking",
    description: "Make API requests in React Native using fetch or Axios.",
    pages: [
      {
        title: "Introduction to Networking",
        content: `
# Networking

Use fetch to make HTTP requests in React Native.

\`\`\`jsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <View style={styles.container}>
      {data ? (
        <Text>{data.title}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default App;
\`\`\`

Key concepts:
- **fetch**: Built-in API for HTTP requests
- **useEffect**: Manages side effects like API calls
- **Error Handling**: Catch and handle network errors
        `,
      },
      {
        title: "Using Axios for Networking",
        content: `
# Using Axios for Networking

Axios simplifies HTTP requests with a cleaner API.

\`\`\`jsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => setData(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <View style={styles.container}>
      {data ? (
        <Text>{data.title}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default App;
\`\`\`

Notes:
- **axios**: Third-party library for HTTP requests
- **Response Data**: Access data via response.data
- **Interceptors**: Customize requests and responses
        `,
      },
    ],
    quiz: [
      {
        question:
          "Which built-in API is used for HTTP requests in React Native?",
        options: ["axios", "fetch", "http", "request"],
        answer: 1,
      },
      {
        question: "What does axios.get return in React Native?",
        options: ["JSON string", "Promise", "Array", "Object"],
        answer: 1,
      },
    ],
  },
  pushNotifications: {
    title: "React Native Push Notifications",
    description: "Implement push notifications in React Native apps.",
    pages: [
      {
        title: "Introduction to Push Notifications",
        content: `
# Push Notifications

Use react-native-push-notification for local and remote notifications.

\`\`\`jsx
import React, { useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import PushNotification from 'react-native-push-notification';

const App = () => {
  useEffect(() => {
    PushNotification.configure({
      onNotification: notification => {
        console.log('Notification:', notification);
      },
      requestPermissions: true,
    });
  }, []);

  const sendNotification = () => {
    PushNotification.localNotification({
      title: 'Hello',
      message: 'This is a test notification!',
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Send Notification" onPress={sendNotification} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default App;
\`\`\`

Key concepts:
- **react-native-push-notification**: Library for notifications
- **localNotification**: Sends local notifications
- **Permissions**: Request user permission for notifications
        `,
      },
      {
        title: "Remote Push Notifications",
        content: `
# Remote Push Notifications

Handle remote notifications with a server integration.

\`\`\`jsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PushNotification from 'react-native-push-notification';

const App = () => {
  useEffect(() => {
    PushNotification.configure({
      onRegister: token => {
        console.log('Token:', token);
      },
      onNotification: notification => {
        console.log('Remote Notification:', notification);
      },
      senderID: 'YOUR_SENDER_ID',
      requestPermissions: true,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Waiting for notifications...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default App;
\`\`\`

Notes:
- **onRegister**: Retrieves device token for remote notifications
- **senderID**: Required for Android FCM
- **Backend**: Integrate with a server for remote notifications
        `,
      },
    ],
    quiz: [
      {
        question:
          "Which library is used for push notifications in React Native?",
        options: [
          "react-native-notifications",
          "react-native-push-notification",
          "react-native-alert",
          "react-native-message",
        ],
        answer: 1,
      },
      {
        question: "What is required for remote notifications on Android?",
        options: ["senderID", "apiKey", "deviceID", "tokenKey"],
        answer: 0,
      },
    ],
  },
  performanceOptimization: {
    title: "React Native Performance Optimization",
    description: "Optimize React Native apps for better performance.",
    pages: [
      {
        title: "Introduction to Performance Optimization",
        content: `
# Performance Optimization

Optimize React Native apps to reduce lag and improve user experience.

\`\`\`jsx
import React, { useCallback } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const DATA = Array(100).fill().map((_, i) => ({ id: String(i), title: \`Item \${i}\` }));

const Item = React.memo(({ title }) => (
  <View style={styles.item}>
    <Text>{title}</Text>
  </View>
));

const App = () => {
  const renderItem = useCallback(({ item }) => <Item title={item.title} />, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        initialNumToRender={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 20 },
  item: { padding: 10, fontSize: 18, height: 44 },
});

export default App;
\`\`\`

Key concepts:
- **React.memo**: Prevents unnecessary re-renders
- **useCallback**: Memoizes render functions
- **initialNumToRender**: Limits initial list rendering
        `,
      },
      {
        title: "Optimizing Images and Animations",
        content: `
# Optimizing Images and Animations

Improve performance by optimizing images and animations.

\`\`\`jsx
import React, { useEffect, useRef } from 'react';
import { View, Image, Animated, StyleSheet } from 'react-native';

const App = () => {
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
        resizeMode="contain"
      />
      <Animated.View style={[styles.box, { transform: [{ translateX: slideAnim }] }]}>
        <Text>Sliding Box</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 50, height: 50 },
  box: { width: 100, height: 100, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' },
});

export default App;
\`\`\`

Techniques:
- **resizeMode**: Reduces image processing
- **useNativeDriver**: Offloads animations to native thread
- **Smaller Images**: Use appropriately sized images
        `,
      },
    ],
    quiz: [
      {
        question: "What does React.memo do in React Native?",
        options: [
          "Handles gestures",
          "Prevents unnecessary re-renders",
          "Manages state",
          "Optimizes networking",
        ],
        answer: 1,
      },
      {
        question: "What does useNativeDriver improve in animations?",
        options: [
          "Image loading",
          "Performance",
          "Gesture handling",
          "Navigation",
        ],
        answer: 1,
      },
    ],
  },
};
