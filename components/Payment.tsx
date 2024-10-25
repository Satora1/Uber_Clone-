import { useAuth } from "@clerk/clerk-expo";
import { useStripe } from "@stripe/stripe-react-native";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import { ReactNativeModal } from "react-native-modal";

import CustomButton from "@/components/CustomButton";
import { images } from "@/constants";
import { fetchAPI } from "@/lib/fetch";
import { useLocationStore } from "@/store";
import { PaymentProps } from "@/types/type";

const Payment = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe()
  const [success, setSuccess] = useState(false)

  const initializePaymentSheet = async () => {
    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example,Inc.",
      intentConfiguration: {
        mode: {
          amount: 1990,
          currencyCode: "USD"
        },
        confirmHandler: confirmHandler
      }
    })

  }
  const confirmHandler = async () => {

  }
  const openPaymentSheet = async () => {
    await initializePaymentSheet();

    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      setSuccess(true);
    }
  };

  return (
    <>
      <CustomButton
        title="Confirm Ride"
        className="my-10"
        onPress={openPaymentSheet}
      />
    </>
  )
}

export default Payment