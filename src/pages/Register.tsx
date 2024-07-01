import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, signUpType } from "@validations/signUpSchema";
import useCheckEmailAvailability from "@hooks/useCheckEmailAvailability";
import { Heading } from "@components/common";
import { Input } from "@components/Form";
import { Form, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    emailAvailabilityStatus,
    enteredEmail,
    checkEmailAvailability,
    resetCheckEmailAvailability,
  } = useCheckEmailAvailability();

  const {
    register,
    handleSubmit,
    getFieldState,
    trigger,
    formState: { errors, touchedFields },
  } = useForm<signUpType>({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
  });

  const submitForm: SubmitHandler<signUpType> = (data) => {
    console.log(data);
  };

  const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    await trigger("email");
    const value = e.target.value;
    const { isDirty, invalid } = getFieldState("email");

    if (isDirty && !invalid && enteredEmail !== value) {
      // checking
      checkEmailAvailability(value);
    }

    if (isDirty && invalid && enteredEmail) {
      resetCheckEmailAvailability();
    }
  };

  const getEmailErrorMessage = () => {
    if (errors.email?.message) return errors.email.message;

    switch (emailAvailabilityStatus) {
      case "notAvailable":
        return "This email is already in use.";
      case "failed":
        return "Error from the server.";
      default:
        return "";
    }
  };

  function getEmailFormText() {
    return emailAvailabilityStatus === "checking"
      ? "We're currently checking the availability of this email address. Please wait a moment."
      : "";
  }

  return (
    <>
      <Heading title="User Registration" />
      <Form
        onSubmit={handleSubmit(submitForm)}
        className="row g-3 my-4 p-4 rounded"
        style={{ backgroundColor: "#f4ecea" }}
      >
        <Col md={{ span: 6 }}>
          <Input
            label="First Name"
            name="firstName"
            register={register}
            error={errors.firstName?.message}
            placeholder="Enter your first name"
            touched={touchedFields.firstName}
            success={errors.firstName?.message ? "" : "Looks good!"}
          />
        </Col>
        <Col md={{ span: 6 }}>
          <Input
            label="Last Name"
            name="lastName"
            register={register}
            error={errors.lastName?.message}
            placeholder="Enter your last name"
            touched={touchedFields.lastName}
            success={errors.lastName?.message ? "" : "Looks good!"}
          />
        </Col>
        <Col md={{ span: 6 }}>
          <Input
            label="Email Address"
            name="email"
            register={register}
            onBlur={emailOnBlurHandler}
            error={getEmailErrorMessage()}
            formText={getEmailFormText()}
            success={
              emailAvailabilityStatus === "available"
                ? "This email is available for use."
                : ""
            }
            disabled={emailAvailabilityStatus === "checking"}
            placeholder="Enter your email address"
            touched={touchedFields.email}
          />
        </Col>
        <Col md={{ span: 6 }}>
          <Input
            type="password"
            label="Password"
            name="password"
            register={register}
            error={errors.password?.message}
            placeholder="Enter your password"
            touched={touchedFields.password}
            success={errors.password?.message ? "" : "Looks good!"}
          />
        </Col>
        <Col md={{ span: 6 }}>
          <Input
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            register={register}
            error={errors.confirmPassword?.message}
            placeholder="Confirm your password"
            touched={touchedFields.confirmPassword}
            success={errors.confirmPassword?.message ? "" : "Looks good!"}
          />
        </Col>
        <Col sm={{ span: 12 }}>
          <Button
            className="mx-auto"
            variant="primary"
            type="submit"
            disabled={emailAvailabilityStatus === "checking" ? true : false}
          >
            Submit
          </Button>
        </Col>
        <Col md={{ span: 12 }} className="text-end">
          {/* if you have an account, Login  */}
          <Link to="/login">Already have an account? Login</Link>
        </Col>
      </Form>
    </>
  );
};

export default Register;
