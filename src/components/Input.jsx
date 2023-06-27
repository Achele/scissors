import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="mt-4 mb-1">
      <label
        className="block text-xs sm:text-sm md:text-base font-normal mb-1 "
        htmlFor={name}
      >
        {label}
      </label>
      <Field
        className="border-primary rounded-md border py-2 px-4 w-full placeholder-placeholder text-xs md:text-sm mt-4"
        // className="w-full px-4 py-2 pr-10 text-xs md:text-sm rounded-md bg-white shadow-md border-border-input placeholder-gray-500"
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
