import { Heading } from "@/components/common";
import { Link, Navigate } from "react-router-dom";
import useRegister from "@/hooks/useRegister";

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
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/feedback";

const Register = () => {
  const {
    loading,
    error,
    token,
    emailAvailabilityStatus,
    submitForm,
    emailOnBlurHandler,
    getEmailErrorMessage,
    getEmailFormText,
    form,
  } = useRegister();

  if (token) return <Navigate to="/" />;

  return (
    <>
      <Heading title="User Registration" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitForm)} className="space-y-8">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your first name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter your last name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your email"
                    onBlur={emailOnBlurHandler}
                  />
                </FormControl>
                <FormDescription>{getEmailFormText()}</FormDescription>
                <FormDescription>
                  {emailAvailabilityStatus === "available" && (
                    <span className="text-green-500">
                      This Email is available
                    </span>
                  )}
                </FormDescription>
                <FormMessage>{getEmailErrorMessage()}</FormMessage>
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

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    {...field}
                    placeholder="Enter your confirm password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="flex gap-2 text-white"
            type="submit"
            disabled={
              emailAvailabilityStatus === "checking" ||
              emailAvailabilityStatus === "notAvailable" ||
              loading === "pending"
            }
          >
            {loading === "pending" ? (
              <>
                <Spinner /> <span>Loading...</span>
              </>
            ) : (
              "Submit"
            )}
          </Button>

          {error && <p className="mt-3 text-[#DC3545]">{error}</p>}
          <div className="text-end">
            {/* if you have an account, Login  */}
            Already have an account?
            <Link to="/login" className="cursor-pointer hover:underline">
              Login
            </Link>
          </div>
        </form>
      </Form>
    </>
  );
};

export default Register;
