import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import FormikControl from "../components/FormikControl";
import styles from "../styles/Hero.module.css";

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
    <section className={`${styles.bckgroundGradient} border py-16  `}>
      <div className="bg-white w-4/5 sm:w-2/5  my-0 mx-auto py-7 px-10 border rounded">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className=" my-0 mx-auto">
                <FormikControl
                  control="input"
                  placeholder="Paste URL here..."
                  name="url"
                />
                <span className="flex items-center justify-between">
                  <span>
                    <FormikControl
                      control="select"
                      name="selectDomain"
                      options={dropDownOptions}
                    />
                  </span>

                  <span className="mx-4">
                    <FormikControl
                      control="input"
                      placeholder="Type alias here"
                      name="alias"
                    />
                  </span>
                </span>
                <button
                  className="bg-primary border rounded-full py-2 px-4 text-white w-full my-4"
                  disabled={!formik.values}
                >
                  Trim URL
                </button>
              </Form>
            );
          }}
        </Formik>
        <p className="text-primary text-xs">
          By clicking TrimURL, I agree to the Terms of Service, Privacy Policy
          and Use of Cookies.
        </p>
      </div>
    </section>
  );
};

export default TrimUrl;
