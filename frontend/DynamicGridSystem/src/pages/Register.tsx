// import { useState } from "react";
import {
  FormControl,
  Input,
  FormHelperText,
  Container,
  Flex,
  FormLabel,
  Text,
  Link,
  Button,
  // useToast,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { ThemeToggler } from "../components/ThemeToggler";
import MainIcon from "../components/icons/MainIcon"

const Register = () => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const toast = useToast();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   let response;
  //   try {
  //     response = await register({ username, email, password, phoneNumber });
  //     toast({
  //       position: "top-right",
  //       title: response.data,
  //       description: "You have been registered successfully.",
  //       status: "success",
  //       duration: 5000,
  //       isClosable: true,
  //     });
  //   } catch (error) {
  //     console.log(error.response.data);
  //     let errorsString = "";
  //     if (error.response.status == 422) {
  //       if (error.response.data["user.UserName"]) {
  //         error.response.data["user.UserName"] + "\n";
  //       }
  //       if (error.response.data["user.PhoneNumber"]) {
  //         errorsString += error.response.data["user.PhoneNumber"];
  //       }
  //     }
  //     console.log(errorsString);
  //     toast({
  //       position: "top-right",
  //       title: "Registration failed",
  //       description: "An error occurred",
  //       status: "error",
  //       duration: 10000,
  //       isClosable: true,
  //     });
  //   }
  // };

  return (
    <Flex
      minH="90vh"
      alignItems="center"
      justifyContent="center"
      m={10}
      direction={"column"}
    >
      <Flex justifyContent="center" alignItems="center" mb={4}>
        <MainIcon></MainIcon>
        <Text textAlign={"center"} fontSize={"5xl"} ml={3}>
          Dynamic Grid System
        </Text>
      </Flex>

      <Container
        maxW="container.sm"
        p={6}
        borderRadius="md"
        boxShadow="dark-lg"
        centerContent
      >
        <Text textAlign={"center"} fontSize={"2xl"}>
          Register
        </Text>
        <form style={{ width: 85 + "%" }} >
        {/*  onSubmit={handleSubmit}> */}
          <FormControl isRequired p={2}>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              focusBorderColor="teal.400"
              // onChange={(event) => setEmail(event.target.value)}
            />
            <FormHelperText>We`ll never share your email.</FormHelperText>
          </FormControl>
          <FormControl isRequired p={2}>
            <FormLabel>UserName</FormLabel>
            <Input
              type="text"
              placeholder="UserName"
              focusBorderColor="teal.400"
              // onChange={(event) => setUsername(event.target.value)}
            />
          </FormControl>
          <FormControl isRequired p={2}>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Password"
              focusBorderColor="teal.400"
              // onChange={(event) => setPassword(event.target.value)}
            />
          </FormControl>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Button
              colorScheme="teal"
              variant="outline"
              type="submit"
              m={4}
              width={40}
            >
              Register
            </Button>
          </Flex>
        </form>
        <Text>
          Have account?
          <Link color="teal.500" as={ReactRouterLink} to="/login">
            Login!
          </Link>
        </Text>
      </Container>
      <Flex alignItems={"center"} gap={3} mt={10}>
        <Text textAlign={"center"} fontSize={"1xl"}>
          Switch theme
        </Text>
        <ThemeToggler></ThemeToggler>
      </Flex>
    </Flex>
  );
};

export default Register;
