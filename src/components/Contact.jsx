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

import * as yup from "yup";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  });
  const onSubmit = (data) => {
    schema.isValid(data).then((valid) => {
      if (valid) {
        alert(
          `${data.name}, you sent a message: "${data.message}". we will get back to you as soon as possible in your email: ${data.email}`
        );
      } else {
        alert("Please fill all the fields");
      }
    });
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
        <Input type="email" {...register("email")} placeholder="Your Email" />
        <Textarea
          {...register("message")}
          placeholder="Your Message"
        ></Textarea>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default Contact;
