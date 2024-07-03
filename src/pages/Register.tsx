import { Heading } from "@components/common";
import { Input } from "@components/Form";
import { Form, Button, Col, Spinner } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import useRegister from "@hooks/useRegister";

const Register = () => {
  const {
    loading,
    error,
    accessToken,
    formErrors,
    emailAvailabilityStatus,
    submitForm,
    register,
    handleSubmit,
    emailOnBlurHandler,
    getEmailErrorMessage,
    getEmailFormText,
    touchedFields,
  } = useRegister();

  if (accessToken) return <Navigate to="/" />;

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
            error={formErrors.firstName?.message}
            placeholder="Enter your first name"
            touched={touchedFields.firstName}
            success={formErrors.firstName?.message ? "" : "Looks good!"}
          />
        </Col>
        <Col md={{ span: 6 }}>
          <Input
            label="Last Name"
            name="lastName"
            register={register}
            error={formErrors.lastName?.message}
            placeholder="Enter your last name"
            touched={touchedFields.lastName}
            success={formErrors.lastName?.message ? "" : "Looks good!"}
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
            error={formErrors.password?.message}
            placeholder="Enter your password"
            touched={touchedFields.password}
            success={formErrors.password?.message ? "" : "Looks good!"}
          />
        </Col>
        <Col md={{ span: 6 }}>
          <Input
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            register={register}
            error={formErrors.confirmPassword?.message}
            placeholder="Confirm your password"
            touched={touchedFields.confirmPassword}
            success={formErrors.confirmPassword?.message ? "" : "Looks good!"}
          />
        </Col>
        <Col sm={{ span: 12 }}>
          <Button
            className="mx-auto"
            variant="primary"
            type="submit"
            disabled={
              emailAvailabilityStatus === "checking" || loading === "pending"
            }
          >
            {loading === "pending" ? (
              <>
                <Spinner animation="border" size="sm"></Spinner> Loading...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </Col>
        <Col md={{ span: 12 }} className="text-end">
          {/* if you have an account, Login  */}
          <Link to="/login">Already have an account? Login</Link>
        </Col>
        {error && (
          <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
        )}
      </Form>
    </>
  );
};

export default Register;
