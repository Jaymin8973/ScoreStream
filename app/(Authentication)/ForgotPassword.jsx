import { Fontisto } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useFormik } from 'formik';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as yup from 'yup';

const ForgotPassword = () => {
  const router = useRouter();
  const ValidationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
  });

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: ValidationSchema,
    onSubmit: async (values) => {
     router.push("Verification")
    },
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-8">
          <View className="gap-10">
            <View className="gap-5 ">
              <Text className="text-3xl font-bold">Forgot password?</Text>
              <Text className="text-gray-500">
                Enter email associated with your account and we’ll send and email with intructions to reset your password
              </Text>
            </View>
            <View >
              <View className="flex-row justify-center items-center border-b border-gray-400  px-3 py-2">
                <Fontisto name="email" size={20} color="gray" />
                <TextInput
                  keyboardType="email-address"
                  placeholder="Enter your email here"
                  placeholderTextColor="gray"
                  className="flex-1 ml-2 text-base text-black "
                  autoFocus
                  value={formik.values.email}
                  onBlur={formik.handleBlur('email')}
                  onChangeText={formik.handleChange('email')}
                />
              </View>

              {formik.touched.email && formik.errors.email && <Text className="text-red-500 mt-2">{formik.errors.email}</Text>}
            </View>
            <View className="items-center mt-10">
              <TouchableOpacity className="bg-[#2D201C] px-12 py-4 rounded-full" onPress={formik.handleSubmit}>
                <Text className="text-white">Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ForgotPassword