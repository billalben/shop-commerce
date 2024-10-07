import { Heading } from "@/components/common";
// import { Input } from "@/components/Form";
import { Link, Navigate } from "react-router-dom";
import useLogin from "@/hooks/useLogin";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";

const Login = () => {
  const { error, loading, token, searchParams, submitForm, form } = useLogin();

  if (token) return <Navigate to="/" />;

  console.log(loading);

  return (
    <>
      <Heading title="User Login" />

      {searchParams.get("message") === "login_required" && (
        // <Alert variant="success">You need to login to view this content</Alert>
        <div>You need to login to view this content</div>
      )}

      {searchParams.get("message") === "account_created" && (
        // <Alert variant="success">
        //   Your account successfully created, please login
        // </Alert>
        <div>Your account successfully created, please login</div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitForm)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your email" />
                </FormControl>
                <FormDescription>We'll never share your email.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Enter your password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {error && <p className="mt-3 text-[#DC3545]">{error}</p>}
          <Button type="submit">
            {loading === "pending" ? "Loading..." : "Login"}
          </Button>

          <div className="text-end">
            {/* if you don't have an account, register  */}
            Don't have an account?{" "}
            <Link to="/register" className="cursor-pointer hover:underline">
              Register
            </Link>
          </div>
        </form>
      </Form>
    </>
  );
};

export default Login;
