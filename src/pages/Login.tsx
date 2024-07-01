import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, signInType } from "@validations/signInSchema";
import { Heading } from "@components/common";
import { Input } from "@components/Form";
import { Form, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signInType>({
    mode: "onBlur",
    resolver: zodResolver(signInSchema),
  });

  const submitForm: SubmitHandler<signInType> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Heading title="User Login" />
      <Form
        onSubmit={handleSubmit(submitForm)}
        className="row g-3 my-4 p-4 rounded"
        style={{ backgroundColor: "#f4ecea" }}
      >
        <Col md={{ span: 6 }}>
          <Input
            name="email"
            label="Email Address"
            register={register}
            error={errors.email?.message}
            placeholder="Enter your email address"
          />
        </Col>
        <Col md={{ span: 6 }}>
          <Input
            type="password"
            name="password"
            label="Password"
            register={register}
            error={errors.password?.message}
            placeholder="Enter your password"
          />
        </Col>
        <Col sm={{ span: 12 }}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
        <Col md={{ span: 12 }} className="text-end">
          {/* if you don't have an account, register  */}
          <Link to="/register">Don't have an account? Register</Link>
        </Col>
      </Form>
    </>
  );
};

export default Login;
