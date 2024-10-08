import { assets } from "@/Assets/assets";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";

import { string } from "yup";
import * as Yup from "yup";

let validetion = Yup.object({
  name: string(),
  email: string().email("Invalid email address").required("Email is Required"),
  password: string()
    .required("No password provided.")
    .min(8, "Password is too short-should be 8 chars minimum."),
  turm: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions."
  ),
});

// eslint-disable-next-line react/prop-types
const LoginFrom = ({ setIsLoginPupupShow }) => {
  const [state, setState] = useState("login");

  function handleSubmit(values, { resetForm }) {
    // handle form submission
    resetForm();
    console.log(values);
  }
  return (
    <div className="absolute z-10 bg-[#0000007c] w-full h-full flex justify-center items-center transition-all overscroll-none">
      <Card className="md:min-w-[370px] min-w-[300px] ">
        <CardHeader>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl text-black font-semibold">{state}</h2>
            <div>
              <img
                onClick={() => setIsLoginPupupShow(false)}
                src={assets.cross_icon}
                className="cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div>
            <Formik
              onSubmit={handleSubmit}
              validationSchema={validetion}
              initialValues={{
                name: "",
                email: "",
                password: "",
                turm: false,
              }}
            >
              <Form className="w-full flex flex-col gap-5">
                <div className="">
                  {state === "Sign Up" ? (
                    <Field
                      className={`w-full border border-[#0000004b] rounded h-10 outline-none px-4 ${
                        state === "login" ? "hidden" : "block"
                      }`}
                      type="name"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                  ) : (
                    <></>
                  )}

                  <ErrorMessage
                    className="text-red-500 text-xs"
                    name="name"
                    component="div"
                  />
                </div>

                <div>
                  <Field
                    className="w-full border border-[#0000004b] rounded h-10 outline-none px-4"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  />
                  <ErrorMessage
                    className="text-red-500 text-xs"
                    name="email"
                    component="div"
                  />
                </div>
                <div>
                  <Field
                    className="w-full border border-[#0000004b] rounded h-10 outline-none px-4"
                    type="password"
                    name="password"
                    placeholder="Your Password"
                  />
                  <ErrorMessage
                    className="text-red-500 text-xs"
                    name="password"
                    component="div"
                  />
                </div>

                <button
                  className="w-full bg-tomato px-4 py-2 text-white rounded text-center"
                  type="submit"
                >
                  {state === "login" ? "Login" : "Create Account"}
                </button>

                <div className="">
                  <Field type="checkbox" name="turm" className="" id="turm" />

                  <label className="text-sm ml-2" htmlFor="turm">
                    By Continuing, I agree to the terms <br /> of use & privacy
                    policy.
                  </label>
                  <ErrorMessage
                    className="text-red-500 text-xs"
                    name="turm"
                    component="div"
                  />
                </div>
              </Form>
            </Formik>
          </div>
        </CardContent>
        <CardFooter>
          {state === "Sign Up" ? (
            <p className="text-sm">
              Already have an account?
              <span
                onClick={() => setState("login")}
                className="text-tomato cursor-pointer text-xs"
              >
                click here
              </span>
            </p>
          ) : (
            <p className="text-sm">
              Create account for ,
              <span
                onClick={() => setState("Sign Up")}
                className="text-tomato cursor-pointer text-xs"
              >
                Click here
              </span>
            </p>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginFrom;
