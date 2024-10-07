import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { actAuthRegister, resetUI } from "@/store/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, signUpType } from "@/validations/signUpSchema";
import useCheckEmailAvailability from "@/hooks/useCheckEmailAvailability";

const useRegister = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { loading, error, token } = useAppSelector((state) => state.auth);

  const form = useForm<signUpType>({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
  });

  const submitForm: SubmitHandler<signUpType> = async (data) => {
    if (emailAvailabilityStatus === "notAvailable") return;

    const { firstName, lastName, email, password } = data;
    dispatch(actAuthRegister({ firstName, lastName, email, password }))
      .unwrap()
      .then(() => {
        navigate("/login?message=account_created");
      });
  };

  const {
    emailAvailabilityStatus,
    enteredEmail,
    checkEmailAvailability,
    resetCheckEmailAvailability,
  } = useCheckEmailAvailability();

  const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    await form.trigger("email");
    const value = e.target.value;
    const { isDirty, invalid } = form.getFieldState("email");

    if (isDirty && !invalid && enteredEmail !== value) {
      checkEmailAvailability(value);
    }

    if (isDirty && invalid && enteredEmail) {
      resetCheckEmailAvailability();
    }
  };

  useEffect(() => {
    return () => {
      dispatch(resetUI());
    };
  }, [dispatch]);

  const getEmailErrorMessage = () => {
    // if (form.formState.errors.email?.message)
    //   return form.formState.errors.email;

    const fieldError = form.formState.errors.email?.message;

    if (fieldError) {
      return typeof fieldError === "string" ? fieldError : "";
    }

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

  return {
    loading,
    error,
    token,
    emailAvailabilityStatus,
    submitForm,
    emailOnBlurHandler,
    getEmailErrorMessage,
    getEmailFormText,
    form,
  };
};

export default useRegister;
