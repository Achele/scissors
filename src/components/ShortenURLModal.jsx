import { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { CloseIcon } from "./Icon";
import FormikControl from "./FormikControl";

const ShortenURLModal = ({ setShowPopup, createShortenLink }) => {
  const initialValues = {
    citeName: "",
    longURL: "",
  };

  const validationSchema = Yup.object({
    citeName: Yup.string().required("Required"),
    longURL: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    setShowPopup(false);
    createShortenLink(values.citeName, values.longURL);
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
                className="bg-primary text-white px-4 rounded py-1 my-3 ml-40 text-sm"
              >
                Shorten URL
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ShortenURLModal;
