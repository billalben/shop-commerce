import { useEffect } from "react";
import { Heading } from "@/components/common";
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
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";

const Login = () => {
  const { toast } = useToast();
  const { error, loading, token, searchParams, submitForm, form } = useLogin();

  useEffect(() => {
    if (searchParams.get("message") === "login_required") {
      toast({
        title: "You need to login to view this content",
        description: "Please login to view this content",
        variant: "destructive",
      });
    }

    if (searchParams.get("message") === "account_created") {
      toast({
        title: "Account created successfully",
        description: "You can now login to your account",
      });
    }
  }, [searchParams, toast]);

  if (token) return <Navigate to="/" />;

  return (
    <>
      <Heading title="User Login" />

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
            <Link to="/register" className="font-semibold transition-colors cursor-pointer hover:underline hover:text-blue-500">
              Register
            </Link>
          </div>
        </form>
      </Form>
    </>
  );
};

export default Login;
