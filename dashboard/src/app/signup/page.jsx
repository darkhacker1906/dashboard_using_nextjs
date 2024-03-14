"use client";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

function page() {
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
    confirm_password: "",
  };
  const { values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        console.log(response);
        router.push("/")
      } catch (e) {
        console.log(e);
      } finally {
        resetForm();
      }
    },
  });
  return (
    <>
      <div className="flex justify-center">
        <div style={{ minWidth: "30%" }}>
          <div className="shadow-lg flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8 bg-white">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Create a new account
              </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      onChange={handleChange}
                      value={values.email}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={values.password}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="confirm_password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="confirm_password"
                      name="confirm_password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={values.confirm_password}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign up
                  </button>
                </div>
              </form>

              <p className="mt-5 text-center text-sm text-gray-500">
                Already registered{" "}
                <span
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
                  onClick={() => router.push("/")}
                >
                  Sign in
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
