import { Heading } from "@components/common";
import { Input } from "@components/Form";
import { Form, Button, Col, Alert, Spinner } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import useLogin from "@hooks/useLogin";

const Login = () => {
  const {
    error,
    loading,
    accessToken,
    formErrors,
    searchParams,
    register,
    handleSubmit,
    submitForm,
  } = useLogin();

  if (accessToken) return <Navigate to="/" />;

  return (
    <>
      <Heading title="User Login" />

      {searchParams.get("message") === "login_required" && (
        <Alert variant="success">You need to login to view this content</Alert>
      )}

      {searchParams.get("message") === "account_created" && (
        <Alert variant="success">
          Your account successfully created, please login
        </Alert>
      )}

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
            error={formErrors.email?.message}
            placeholder="Enter your email address"
          />
        </Col>
        <Col md={{ span: 6 }}>
          <Input
            type="password"
            name="password"
            label="Password"
            register={register}
            error={formErrors.password?.message}
            placeholder="Enter your password"
          />
        </Col>
        <Col sm={{ span: 12 }}>
          <Button variant="primary" type="submit">
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
          {/* if you don't have an account, register  */}
          <Link to="/register">Don't have an account? Register</Link>
        </Col>
        {error && (
          <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
        )}
      </Form>
    </>
  );
};

export default Login;
