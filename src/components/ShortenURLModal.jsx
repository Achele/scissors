import { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { CloseIcon } from "./Icon";
import FormikControl from "./FormikControl";
import Loading from "./Loader";

const ShortenURLModal = ({ setShowPopup, createShortenLink }) => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    citeName: "",
    longURL: "",
  };

  const validationSchema = Yup.object({
    citeName: Yup.string()
      .required("Required")
      .min(3, "Name must be at least 3 characters long")
      .max(15, "Limit exceeded!! maximum 15 char long"),
    longURL: Yup.string()
      .required("Required")
      .matches(
        /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
        "Please type in a valid URL"
      ),
  });

  const onSubmit = async (values) => {
    setShowPopup(false);
    setLoading(true);
    try {
      setTimeout(
        () => createShortenLink(values.citeName, values.longURL),
        1000
      );
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto sm:w-1/2 lg:max-w-2xl bg-white p-8 rounded-md shadow-md z-50">
        <span className="flex items-center justify-between">
          <h2 className="text-xl font-bold mb-4 pl-14 lg:pl-24">Trim URL</h2>
          <CloseIcon onClick={() => setShowPopup(false)} />
        </span>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form className="container w-2/3 mx-auto">
              <FormikControl
                control="input"
                type="text"
                placeholder="Name"
                name="citeName"
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
                className="bg-primary text-white px-4 rounded py-2 my-4  text-sm  w-full"
              >
                {loading ? <Loading /> : " Trim URL"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ShortenURLModal;
