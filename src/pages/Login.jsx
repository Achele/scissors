import { Form, Formik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import FormikControl from "../components/FormikControl";
import { Apple, Google, LoginLine, Password } from "../components/Icon";
import Footer from "../sections/Footer";
import { UseUserAuth } from "../context/authContext";
// import { async } from "@firebase/util";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const { signIn } = UseUserAuth();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  // validation
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain one digit, one lowercase letter, one uppercase letter, and one special character"
      ),
  });

  //   Form submission
  const onSubmit = async (values) => {
    const { email, password } = values;
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (error) {
      console.error("FIREBASE error", error.message);
    }
  };

  return (
    <>
      <main className="p-9 w-1/2 my-0 mx-auto">
        <section className="py-8">
          <p className="text-center py-3">Log in with</p>
          <span className="flex items-center justify-center">
            <button className="bg-primary py-1 px-4 flex items-center text-white text-base rounded mx-3">
              <Google className={"w-4 mr-1"} />
              Google
            </button>
            <button className="bg-primary py-1 px-4 flex items-center text-white text-base rounded">
              <Apple className={"w-4 mr-1"} />
              Apple
            </button>
          </span>
        </section>
        <div className="flex items-center justify-center ">
          <LoginLine className={"hidden"} />
          <p className="px-3 text-lg">or</p>
          <LoginLine className={"hidden"} />
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className=" w-1/2 my-0 mx-auto">
                <FormikControl
                  control="input"
                  type="email"
                  placeholder="Email address or username"
                  name="email"
                />

                <div className="relative">
                  <FormikControl
                    control="input"
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    name="password"
                  />
                  <span
                    onClick={toggleShowPassword}
                    className="absolute right-0  top-5 md:top-6   flex items-center pr-3 cursor-pointer"
                  >
                    <Password />
                    {showPassword ? "hide" : "show"}
                  </span>
                  <Link
                    to={"/forgotPassword"}
                    className="text-anotherBlue text-sm py-2 text-end "
                  >
                    Forgot your Password?
                  </Link>
                </div>
                <button
                  disabled={!formik.isValid}
                  className="border bg-primary rounded-full py-1 px-4 w-full text-white my-4 cursor-pointer"
                >
                  Log in
                </button>
              </Form>
            );
          }}
        </Formik>
        <span>
          <p className="text-center text-placeholder">
            Don't have an account?{" "}
            <Link
              className="text-anotherBlue text-sm text-center"
              to={"/signup"}
            >
              Sign up
            </Link>
          </p>
          <p className="text-xs text-center py-6 text-placeholder">
            By signing in with an account, you agree to Scissor's Terms of
            Service, Privacy Policy and Acceptable Use Policy.
          </p>
        </span>
      </main>
      <Footer />
    </>
  );
};

export default Login;
