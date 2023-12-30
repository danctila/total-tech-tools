import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import { SetStateAction, useState } from "react";

const DataForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [formError, setFormError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [businessNameError, setBusinessNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setName(e.target.value);
  };
  const handleBusinessNameChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setBusinessName(e.target.value);
  };
  const handlePhoneChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPhone(e.target.value);
  };
  const handleMessageChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (email.indexOf("@") === -1 || email.length === 0) {
      setFormError(true);
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (name.length === 0) {
      setFormError(true);
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (businessName.length === 0) {
      setBusinessNameError(true);
    } else {
      setBusinessNameError(false);
    }
    if (phone.length === 0) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
    if (message.length === 0) {
      setFormError(true);
      setMessageError(true);
    } else {
      setMessageError(false);
    }
    if (
      emailError &&
      !nameError &&
      !businessNameError &&
      !phoneError &&
      !messageError
    ) {
      setFormError(false);
    }
  };
  return (
    <Box
      bg="#3E3B45"
      h="400px"
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="white"
    >
      <FormControl
        isInvalid={formError}
        isRequired
        w={{ base: "90%", sm: "80%", md: "50%", lg: "40%" }}
      >
        <HStack>
          <VStack w="50%" align="left" spacing="-10px">
            <FormLabel>Your Name</FormLabel>
            <Input
              borderRadius="1px"
              value={name}
              onChange={handleNameChange}
              type="text"
              borderColor="white"
              _invalid={
                nameError ? { borderColor: "red" } : { borderColor: "white" }
              }
            />
          </VStack>
          <VStack w="50%" align="left" spacing="-10px">
            <FormLabel>Business Name</FormLabel>
            <Input
              borderRadius="1px"
              value={businessName}
              onChange={handleBusinessNameChange}
              type="text"
              _invalid={
                businessNameError
                  ? { borderColor: "red" }
                  : { borderColor: "white" }
              }
            />
          </VStack>
        </HStack>
        <HStack pt="20px">
          <VStack w="50%" align="left" spacing="-10px">
            <FormLabel>Email</FormLabel>
            <Input
              borderRadius="1px"
              value={email}
              onChange={handleEmailChange}
              type="text"
              _invalid={
                emailError ? { borderColor: "red" } : { borderColor: "white" }
              }
            />
          </VStack>
          <VStack w="50%" align="left" spacing="-10px">
            <FormLabel>Phone</FormLabel>
            <Input
              borderRadius="1px"
              value={phone}
              onChange={handlePhoneChange}
              type="text"
              _invalid={
                phoneError ? { borderColor: "red" } : { borderColor: "white" }
              }
            />
          </VStack>
        </HStack>
        <VStack w="100%" align="left" spacing="-10px" pt="20px">
          <FormLabel>Message</FormLabel>
          <Input
            borderRadius="1px"
            value={message}
            onChange={handleMessageChange}
            type="text"
            _invalid={
              messageError ? { borderColor: "red" } : { borderColor: "white" }
            }
          />
        </VStack>
        <Button
          type="submit"
          mt="20px"
          bg="#8C52FF"
          color="white"
          fontSize="22px"
          fontWeight="none"
          borderRadius="8px"
          _hover={{ bg: "#8C52FF", transform: "scale(1.1)" }}
          onClick={handleSubmit}
        >
          SEND
        </Button>
      </FormControl>
    </Box>
  );
};

export default DataForm;
