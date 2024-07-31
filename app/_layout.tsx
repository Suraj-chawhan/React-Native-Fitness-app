import {Stack} from "expo-router"

export default function RootLayout(){

  return (
  
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false,title:"" }} />
        <Stack.Screen name="data/[id]" options={{ headerShown: true,title:"Exercises" }} />
        <Stack.Screen name="game/[id]" options={{ headerShown: true,title:"Games " }} />
        <Stack.Screen name="heart/[id]" options={{ headerShown: true,title:"Heart Exercises" }} />
        <Stack.Screen name="about" options={{ headerShown: true,title:"About" }} />
        <Stack.Screen name="help" options={{ headerShown: true,title:"Help" }} />
      </Stack>
  
  );
}
