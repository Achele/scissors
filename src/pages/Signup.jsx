import { Form, Formik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import FormikControl from "../components/FormikControl";
import { Apple, Google, LoginLine, Password } from "../components/Icon";
import Footer from "../sections/Footer";
import { UseUserAuth } from "../context/authContext";
// import { UserAuth } from "../context/authContext";
// import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const { createUser, googleSignIn } = UseUserAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // validation
  const validationSchema = Yup.object({
    displayName: Yup.string().required("Required"),
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
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),
  });

  //   Form submission
  const onSubmit = async (values) => {
    const { email, password } = values;
    try {
      // console.log("Form data", values);
      await createUser(email, password);
      navigate("/login");
    } catch (error) {
      console.error("FIREBASE error", error.message);
      // alert(error.response.data);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  // console.log(firebaseAuth, updateCurrentUser);

  return (
    <>
      <main className="xs:w-full p-9 sm:w-3/4 lg:w-1/2 my-0 mx-auto">
        <section className="py-8">
          <p className="text-center py-3">Log in with</p>
          <span className="flex items-center justify-center">
            <button className="bg-primary py-1 px-4 flex items-center text-white text-base rounded mx-3">
              <Google className={"w-4 mr-1"} onClick={handleGoogleSignIn} />
              Google
            </button>
            <button className="bg-primary py-1 px-4 flex items-center text-white text-base rounded">
              <Apple className={"w-4 mr-1"} />
              Apple
            </button>
          </span>
        </section>
        <div className="flex items-center justify-center ">
          <LoginLine className={"xs:w-1/3"} />
          <p className="px-3 text-lg">or</p>
          <LoginLine className={"xs:w-1/3"} />
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
                  type="text"
                  placeholder="Username"
                  name="displayName"
                />

                <FormikControl
                  control="input"
                  type="email"
                  placeholder="Email"
                  name="email"
                />

                <div className="relative">
                  <FormikControl
                    control="input"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                  />
                  <span
                    onClick={toggleShowPassword}
                    className="absolute right-0  top-5 md:top-6   flex items-center pr-3 cursor-pointer"
                  >
                    <Password />
                    {showPassword ? "hide" : "show"}
                  </span>
                </div>

                <div className="relative">
                  <FormikControl
                    control="input"
                    type={showPassword ? "text" : "password"}
                    placeholder="Retype Password"
                    name="confirmPassword"
                  />
                  <span
                    onClick={toggleShowPassword}
                    className="absolute right-0  top-5 md:top-6   flex items-center pr-3 cursor-pointer"
                  >
                    <Password />
                    {showPassword ? "hide" : "show"}
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={!formik.isValid}
                  className="border bg-primary rounded-full py-1 px-4 w-full text-white my-4 cursor-pointer xs:text-xs xs:py-2"
                >
                  Sign up with Email
                </button>
              </Form>
            );
          }}
        </Formik>
        <span>
          <p className="text-center">
            Already have an account?{" "}
            <Link className="text-anotherBlue text-sm text-center">Log in</Link>
          </p>
          <p className="text-xs text-center py-6">
            By signing up, you agree to Scissor's Terms of Service, Privacy
            Policy and Acceptable Use Policy.
          </p>
        </span>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
