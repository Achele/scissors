import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import FormikControl from "../components/FormikControl";

const TrimUrl = () => {
  const dropDownOptions = [
    { key: "Enter Domain", value: "" },
    { key: "Scissors.com", value: "scissors.com" },
    { key: "Add Domain", value: "Add Domain" },
  ];

  const navigate = useNavigate();

  const initialValues = {
    url: "",
    selectDomain: "",
    alias: "",
  };

  const validationSchema = Yup.object({
    url: Yup.string().required("Required"),
    selectDomain: Yup.string().required("Required"),
    alias: Yup.string(),
  });

  const onSubmit = (values) => {
    console.log("FORM DATA: ", values);
    navigate("/signup");
  };

  return (
    <section>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <FormikControl
                  control="input"
                  placeholder="Paste URL here..."
                  name="url"
                />
                <span>
                  <FormikControl
                    control="select"
                    name="selectDomain"
                    options={dropDownOptions}
                  />
                  <FormikControl
                    control="input"
                    placeholder="Type alias here"
                    name="alias"
                  />
                </span>
                <button
                  className="bg-primary border rounded py-2 px-4 text-white"
                  disabled={!formik.values}
                >
                  Trim URL
                </button>
              </Form>
            );
          }}
        </Formik>
        <p className="text-primary">
          By clicking TrimURL, I agree to the Terms of Service, Privacy Policy
          and Use of Cookies.
        </p>
      </div>
    </section>
  );
};

export default TrimUrl;
