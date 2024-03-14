"use client"
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Home() {
 const router=useRouter();
 const initialValues={
  email:"",
  password:"",
 }
 const {handleChange,values,handleSubmit}=useFormik({
  initialValues:initialValues,
  onSubmit:async(values)=>{
    try{
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      router.push("/dashboard")
    }catch(e){
   console.log(e)
    }
  }
 })
  return (
  <>
  <div className="flex justify-center mt-5">
    <div style={{minWidth:"30%"}}>
    <div className="shadow-lg flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex justify-center"> <img 
            src='login.gif'
            height={70}
            width={70}
            />
            </div>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" /*action="#" method="POST"*/ onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
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
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  value={values.password}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                // onClick={()=>router.push("/dashboard")}
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-gray-500">
            Not a member?{' '}
            <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
            onClick={()=>router.push("/signup")}
            >
              Start a 14 day free trial
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
   
      </>
  );
}
