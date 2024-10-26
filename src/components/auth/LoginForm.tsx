import React, { useEffect, useState } from "react";
import Button from "../globals/Button";
import { useRouter } from "next/navigation";
import { useLogin } from "utils/hooks/authHooks";
import { useFormik } from "formik";

const LoginForm = () => {
  const { mutate: login, isLoading, isError, error } = useLogin();

  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    onSubmit: values => {
      login(values, {
        onError: (error: any) => {
          const errMsg = "Erreur lors de la connexion";
          setErrorMessage(errMsg);
        }
      });
    }
  });

  return (
    <>
      <div className=" flex flex-col  justify-start items-center w-full xs:w-96 p-4 overflow-hidden ">
        <img
          src="/images/logo.webp"
          alt="Logo"
          className="w-96"
        />
        <div className="card dark:bg-background-dark bg-background text-foreground dark:text-foreground-dark border-2 dark:border-primary-dark border-primary w-full  p-6 sm:p-8 m-2">
          <div className="flex flex-col mx-auto w-4/5">
            <h2 className="text-center text-lg md:text-2xl font-bold mb-4">
              Connexion
            </h2>

            <div className="justify-center">
              <form
                onSubmit={formik.handleSubmit}
                className="space-y-4"
                method="post">
                {/* Identifiant */}
                <div className="flex flex-col">
                  <label
                    className="text-sm font-semibold mb-1"
                    htmlFor="username">
                    Identifiant
                  </label>
                  <input
                    className={`w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white ${
                      formik.errors.username && formik.touched.username
                        ? "border-red-500"
                        : ""
                    }`}
                    type="text"
                    name="username"
                    id="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />

                  {formik.errors.username && formik.touched.username && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.username}
                    </p>
                  )}
                </div>
                {/* Mot de passe */}
                <div className="flex flex-col">
                  <label
                    className="text-sm font-semibold mb-1"
                    htmlFor="password">
                    Mot de passe
                  </label>
                  <input
                    className={`w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white  ${
                      formik.errors.password && formik.touched.password
                        ? "border-red-500"
                        : ""
                    }`}
                    type="password"
                    name="password"
                    id="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    required
                  />
                  {formik.errors.password && formik.touched.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.password}
                    </p>
                  )}
                </div>
                {/* Bouton de soumission */}
                <Button
                  disabled={isLoading}
                  type="submit"
                  className="btn w-full mt-4">
                  {isLoading ? "Connexion..." : "Se connecter"}{" "}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
