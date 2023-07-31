import { Form, Formik } from "formik";
import * as Yup from "yup";
import { CloseIcon } from "./Icon";
import FormikControl from "./FormikControl";

const Modal = ({ setShowPopup, createShortenLink }) => {
  const initialValues = {
    name: "",
    longURL: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    longURL: Yup.string()
      .matches(
        /^(ht|f)tp(s?):\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*((0-9)*)*(\/?)([a-zA-Z0-9\-.?,'/\\+&=%$#_]*)?$/,
        "Enter a valid url"
      )
      .required("Required"),
  });

  const onSubmit = (values) => {
    setShowPopup(false);
    createShortenLink(values.name, values.longURL);
    console.log("FORM DATA: ", values);
  };
  return (
    <>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto sm:w-1/2 lg:max-w-2xl bg-white p-8 rounded-md shadow-md z-50">
        <span className="flex items-center justify-between">
          <h2 className="text-xl font-bold mb-4 pl-14 lg:pl-24">Shorten URL</h2>
          <CloseIcon onClick={() => setShowPopup(false)} />
        </span>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className="container w-2/3 mx-auto">
                <FormikControl
                  control="input"
                  type="text"
                  placeholder="Name"
                  name="name"
                />

                <FormikControl
                  control="input"
                  type="text"
                  placeholder="Long URL"
                  name="longURL"
                />
                <button
                  type="submit"
                  disabled={!formik.isValid}
                  className="bg-primary text-white px-4 rounded py-1 my-3 ml-40 text-sm"
                >
                  Shorten URL
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default Modal;
