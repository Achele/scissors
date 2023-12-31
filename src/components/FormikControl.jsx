import Input from "./Input";
import Select from "./Select";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "select":
      return <Select {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
