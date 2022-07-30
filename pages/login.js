import Layout from "../components/layout";
import { useState } from "react";
import Head from "next/head";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState();

  return (
    <Layout>
      <>
        <Head>
          <title>Login</title>
        </Head>
        <main className="flex flex-col w-full min-h-screen items-center justify-center">
          <div className="flex flex-col space-y-3 p-5 rounded-lg w-full md:w-2/4 lg:w-2/6">
            <h1 className="font-semibold text-2xl">Login</h1>
            <div className="flex flex-col">
              <label>Email *</label>
              <input type="text" onChange={(e) => setEmail(e.target.value)} className="p-1 rounded-sm ring-1 ring-gray-400 focus:outline-none" placeholder="Email"></input>
            </div>
            <div className="flex flex-col">
              <label>Password *</label>
              <input type="password" onChange={(e) => setPassowrd(e.target.value)} className="p-1 rounded-sm ring-1 ring-gray-400 focus:outline-none" placeholder="Password"></input>
            </div>
            <button className="text-white bg-blue-600 rounded w-full py-2">LOGIN</button>
          </div>
        </main>
      </>
    </Layout>
  );
};

export default Login;
