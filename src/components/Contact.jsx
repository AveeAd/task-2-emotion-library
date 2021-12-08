import {
  Container,
  Title,
  P,
  Form,
  Input,
  Textarea,
  Button,
} from "./styledComponents/styledComponents";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

const Contact = () => {
  const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    alert(
      `${data.name}, you sent a message: "${data.message}". we will get back to you as soon as possible in your email: ${data.email}`
    );
  };
  return (
    <Container>
      <Form bg="hotpink" onSubmit={handleSubmit(onSubmit)}>
        <Title color="#fff" size="2rem">
          Contact Us
        </Title>
        <P color="#fff" align="center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
          reprehenderit?
        </P>
        <Input type="text" {...register("name")} placeholder="Your Name" />
        {errors.name && (
          <P color="red" bg="#fff" padding="0.1rem 1rem">
            {errors.name.message}
          </P>
        )}
        <Input type="email" {...register("email")} placeholder="Your Email" />
        {errors.email && (
          <P color="red" bg="#fff" padding="0.1rem 1rem">
            {errors.email.message}
          </P>
        )}
        <Textarea
          {...register("message")}
          placeholder="Your Message"
        ></Textarea>
        {errors.message && (
          <P color="red" bg="#fff" padding="0.1rem 1rem">
            {errors.message.message}
          </P>
        )}
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default Contact;
