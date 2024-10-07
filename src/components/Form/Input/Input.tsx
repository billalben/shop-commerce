import { Path, FieldValues, UseFormRegister } from "react-hook-form";

type InputProps<TFieldValue extends FieldValues> = {
  label: string;
  name: Path<TFieldValue>;
  type?: string;
  register: UseFormRegister<TFieldValue>;
  error?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  formText?: string;
  success?: string;
  disabled?: boolean;
  placeholder?: string;
  touched?: boolean;
};

const Input = <TFieldValue extends FieldValues>({
  label,
  name,
  type = "text",
  register,
  error,
  onBlur,
  formText,
  success,
  disabled,
  placeholder,
  touched = false,
}: InputProps<TFieldValue>) => {
  const onblurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(e);

    register(name).onBlur(e);
  };

  console.log(touched);
  

  return (
    // <Form.Group style={{ maxWidth: 512, width: "100%" }}>
    //   <Form.Label>{label}</Form.Label>
    //   <Form.Control
    //     type={type}
    //     {...register(name)}
    //     onBlur={onblurHandler}
    //     isInvalid={!!error}
    //     isValid={touched && !error}
    //     disabled={disabled}
    //     placeholder={placeholder}
    //   />
    //   <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    //   <Form.Control.Feedback type="valid">{success}</Form.Control.Feedback>
    //   {formText && <Form.Text muted>{formText}</Form.Text>}
    // </Form.Group>
    <form className="max-w-lg w-full">
      {/* <Form.Label>{label}</Form.Label> */}
      <label htmlFor="">{label}</label>
      <input
        type={type}
        {...register(name)}
        onBlur={onblurHandler}
        disabled={disabled}
        placeholder={placeholder}
      />
      <span>{error}</span>
      <span>{success}</span>
      {formText && <span className="text-muted">{formText}</span>}
    </form>
  );
};

export default Input;
