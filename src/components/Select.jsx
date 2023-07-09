import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";

const Select = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="mt-4 mb-1">
      <label
        className="block text-xs sm:text-sm md:text-base font-normal mb-2 mt-4"
        htmlFor={name}
      >
        {label}
      </label>
      <Field
        className="border-primary rounded-md border py-2 px-4 w-full placeholder-primary text-xs md:text-sm mt-4"
        as={"select"}
        id={name}
        name={name}
        {...rest}
      >
        {options.map((option, selectedOption) => {
          return (
            <option
              key={option.value}
              value={option.value}
              className={
                selectedOption === option ? "bg-blue-50 text-enabled-btn" : ""
              }
            >
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
