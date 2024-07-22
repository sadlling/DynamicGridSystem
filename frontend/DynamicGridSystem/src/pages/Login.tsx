import {
  FormControl,
  Input,
  // FormHelperText,
  Container,
  Flex,
  FormLabel,
  Text,
  Link,
  Button,
  //useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link as ReactRouterLink, } from "react-router-dom";
import { ThemeToggler } from "../components/ThemeToggler";
import { Loader } from "../components/Loader";
import MainIcon from "../components/icons/MainIcon"

const Login = () => {
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const toast = useToast();
  // const navigate = useNavigate();

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();
    setLoading(true);
    // let response;
    try {
      // response = await login({ userName, password });
      // toast({
      //   position: "top-right",
      //   title: response.data,
      //   description: "You have been login successfully.",
      //   status: "success",
      //   duration: 5000,
      //   isClosable: true,
      // });
      // navigate("/home");
    } catch (error) {
      // console.log(error.response.data);
      // toast({
      //   position: "top-right",
      //   title: "Login failed",
      //   description: error.response.data.detail || "An error occurred",
      //   status: "error",
      //   duration: 6000,
      //   isClosable: true,
      // });
    } finally {
      setLoading(false);
    }
  };
  return loading ? (
    <Loader></Loader>
  ) : (
    <Flex
      minH="100vh"
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
          Login
        </Text>
        <form style={{ width: 85 + "%" }} onSubmit={handleSubmit}>
          <FormControl isRequired p={2}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              focusBorderColor="teal.400"
              // onChange={(event) => setUserName(event.target.value)}
            />
            {/* <FormHelperText>We`ll never share your email.</FormHelperText> */}
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
              Login
            </Button>
          </Flex>
        </form>
        <Text>
          No account? 
          <Link color="teal.500" as={ReactRouterLink} to="/register">
            Register!
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
export default Login;
