import { Stack } from 'expo-router'

const _layout = () => {
  return (
   <Stack>
    <Stack.Screen
      name="Signup"
      options={{ headerShown: false }}
      />
        <Stack.Screen
      name="Login"
      options={{ headerShown: false }}
      />

        <Stack.Screen
      name="ForgotPassword"
      options={{ headerShown: false }}
      />

        <Stack.Screen
      name="Verification"
      options={{ headerShown: false }}
      />

         <Stack.Screen
      name="Password"
      options={{ headerShown: false }}
      />
   </Stack>
  )
}

export default _layout