import Container from "@/components/ui/Container";
import React from "react";
import loginImg from "@/assets/login.jpg";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="bg-zinc-100 h-screen flex justify-center items-center ">
      <Container className="bg-white p-5 rounded-md shadow-md mx-4 lg:mx-0">
        <div className="lg:flex justify-between items-center w-full ">
          <div className="w-1/2 hidden lg:flex">
            <Image src={loginImg} width={500} height={500} alt="login image" />
          </div>

          <div className="divider divider-horizontal"></div>

          <div className="lg:w-1/2 ">
            <form className="max-w-lg mx-auto p-1 lg:p-6  rounded-lg">
              <h2 className="text-2xl lg:text-3xl font-semibold border-b-2 pb-2 mb-3">
                Please sing up here
              </h2>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                />
              </div>

              <div className=" mb-4 flex items-center">
                <input type="checkbox" className="checkbox" />
                <label className="label ml-2">
                  I agree to the Terms and Conditions
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="custom-primary-btn py-3">Register</button>
              </div>

              <div className="mt-4 text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link href="/login" className="text-primary hover:underline">
                    Login here
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RegisterPage;
