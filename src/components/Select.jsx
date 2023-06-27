import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";

const Select = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label
        className="block text-xs sm:text-sm md:text-base font-normal mb-2 mt-4"
        htmlFor={name}
      >
        {label}
      </label>
      <Field
        className="w-full px-4 py-2 pr-10 text-xs md:text-sm border border-disabled rounded-md focus:outline-none focus:ring-2 bg-white shadow-md"
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
