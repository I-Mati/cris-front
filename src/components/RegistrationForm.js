import { useState } from "react";

import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

import { HOME } from "../constants/paths";
import RedirectionButton from "./RedirectionButton";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    subject: "",
    courseDuration: "",
    career: "",
    enrollmentYear: "",
    numberOfTimesEnrolled: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    address: "",
    subject: "",
    courseDuration: "",
    career: "",
    enrollmentYear: "",
    numberOfTimesEnrolled: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.fullName) {
      newErrors.fullName = "Required";
    }

    if (!formData.email) {
      newErrors.email = "Required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.address) {
      newErrors.address = "Required";
    }

    if (!formData.subject) {
      newErrors.subject = "Required";
    }

    if (!formData.courseDuration) {
      newErrors.courseDuration = "Required";
    }

    if (!formData.career) {
      newErrors.career = "Required";
    }

    if (!formData.enrollmentYear) {
      newErrors.enrollmentYear = "Required";
    }

    if (!formData.numberOfTimesEnrolled) {
      newErrors.numberOfTimesEnrolled = "Required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const generatedId = Math.floor(Math.random() * 10000); // Genera un ID aleatorio
    navigate(`/success?id=${generatedId}`);
  };

  return (
    <Box w="350px">
      <form onSubmit={handleSubmit}>
        <FormControl id="fullName" mb="16px" isInvalid={!!errors.fullName}>
          <FormLabel>Full Name</FormLabel>
          <Input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            type="text"
          />
          {errors.fullName && <Text color="red.500">{errors.fullName}</Text>}
        </FormControl>

        <FormControl id="email" mb="16px" isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
          />
          {errors.email && <Text color="red.500">{errors.email}</Text>}
        </FormControl>

        <FormControl id="address" mb="16px" isInvalid={!!errors.address}>
          <FormLabel>Address</FormLabel>
          <Input
            name="address"
            value={formData.address}
            onChange={handleChange}
            type="text"
          />
          {errors.address && <Text color="red.500">{errors.address}</Text>}
        </FormControl>

        <FormControl id="subject" mb="16px" isInvalid={!!errors.subject}>
          <FormLabel>Subject</FormLabel>
          <Input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            type="text"
          />
          {errors.subject && <Text color="red.500">{errors.subject}</Text>}
        </FormControl>

        <FormControl
          id="courseDuration"
          mb="16px"
          isInvalid={!!errors.courseDuration}
        >
          <FormLabel>Course Duration</FormLabel>
          <Input
            name="courseDuration"
            value={formData.courseDuration}
            onChange={handleChange}
            type="text"
          />
          {errors.courseDuration && (
            <Text color="red.500">{errors.courseDuration}</Text>
          )}
        </FormControl>

        <FormControl id="career" mb="16px" isInvalid={!!errors.career}>
          <FormLabel>Career</FormLabel>
          <Input
            name="career"
            value={formData.career}
            onChange={handleChange}
            type="text"
          />
          {errors.career && <Text color="red.500">{errors.career}</Text>}
        </FormControl>

        <FormControl
          id="enrollmentYear"
          mb="16px"
          isInvalid={!!errors.enrollmentYear}
        >
          <FormLabel>Enrollment Year</FormLabel>
          <Input
            name="enrollmentYear"
            value={formData.enrollmentYear}
            onChange={handleChange}
            type="text"
          />
          {errors.enrollmentYear && (
            <Text color="red.500">{errors.enrollmentYear}</Text>
          )}
        </FormControl>

        <FormControl
          id="numberOfTimesEnrolled"
          mb="16px"
          isInvalid={!!errors.numberOfTimesEnrolled}
        >
          <FormLabel>Number of Times Enrolled</FormLabel>
          <Input
            name="numberOfTimesEnrolled"
            value={formData.numberOfTimesEnrolled}
            onChange={handleChange}
            type="number"
          />
          {errors.numberOfTimesEnrolled && (
            <Text color="red.500">{errors.numberOfTimesEnrolled}</Text>
          )}
        </FormControl>

        <VStack justify="center" mt="30px" spacing="20px">
          {/* We don't use the RedirectionButton here as we have to consider handleSubmit when clicking on it */}
          <Button type="submit" colorScheme="green">
            Register
          </Button>
          <RedirectionButton text="Go Home" path={HOME} />
        </VStack>
      </form>
    </Box>
  );
};

export default LeadForm;
