
import { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

function SignUp() {
  const { handleSubmit, reset, control, setError, formState } = useForm();
  const { isSubmitting, errors } = formState;

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();



  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
    } else {
      const displayName = `${data.firstName} ${data.lastName}`;
      createUser(data.email, data.password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          updateUserProfile(displayName)
            .then(() => {
              console.log("user profile info updated");
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User created successfully",
                showConfirmButton: false,
                timer: 1500,
              });
  
              navigate("/");
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => {
          // Handle error creating user
          console.error("Error creating user:", error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Error creating user",
            text: error.message,
          });
        });
  
      // Post user data to the server
      fetch("https://parlour-server-seven.vercel.app/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to post user data to server");
          }
          console.log("User data posted successfully");
          // You can handle success here if needed
        })
        .catch((error) => {
          // Handle error posting user data to server
          console.error("Error posting user data to server:", error);
          // You can show an error message to the user if needed
        });
    }
  };
  

  // const password = watch("password", "");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-xl text-black mb-6 mt-2 font-semibold">
          Create an account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="firstName"
                  className="mt-1 p-2 w-full bg-white text-black rounded-md border-b-2"
                  placeholder="First Name"
                />
              )}
            />
          </div>

          <div className="mb-6">
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="lastName"
                  className="mt-1 p-2 w-full bg-white text-black rounded-md border-b-2"
                  placeholder="Last Name"
                />
              )}
            />
          </div>

          <div className="mb-6">
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  id="email"
                  className="mt-1 p-2 w-full bg-white text-black rounded-md border-b-2"
                  placeholder="Email"
                />
              )}
            />
          </div>

          <div className="mb-6">
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  id="password"
                  className="mt-1 p-2 w-full bg-white text-black rounded-md border-b-2"
                  placeholder="Password"
                />
              )}
            />
          </div>

          <div className="mb-6">
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  id="confirmPassword"
                  className="mt-1 p-2 w-full bg-white text-black rounded-md border-b-2"
                  placeholder="Confirm Password"
                />
              )}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#F63E7B] text-white font-bold py-2 px-4 rounded hover:bg-pink-300"
            disabled={isSubmitting}
          >
            Create an account
          </button>
        </form>

        <div className="text-center m-4">
          <p>
            <span className="text-black">Already have an account?</span>{" "}
            <Link to="/login" className="text-[#F63E7B] underline">
              Login
            </Link>
          </p>
        </div>

        <div className="divider">OR</div>

        <div className="mt-4 flex justify-center">
          <button className='flex justify-center gap-10 className="bg-[#F63E7B] border border-[#C7C7C7] hover:bg-pink-300 py-2 px-6 text-sm font-semibold hover:border-0 text-black rounded-full'>
            <img
              src="https://i.ibb.co/sHD8gRB/Group-573.png"
              alt=""
              width="24px"
              height="24px"
            />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
