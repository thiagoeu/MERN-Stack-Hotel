import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`recebeu o email ${email} e a senha ${password}`);

    if (email && password) {
      const axiosResponse = await axios.post(
        "http://localhost:3001/api-v1/users/login",
        {
          email,
          password,
        },
      );
      console.log(axiosResponse);
    } else {
      alert("Preencha todos os campos");
    }
  };
  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Faça seu Login</h1>
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
          <input
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder="Digite sua senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-primary w-full cursor-pointer rounded-full px-4 py-2 font-bold text-white">
            Entrar
          </button>
        </form>
        <p className="">
          Ainda nao possui uma conta?
          <Link to="/register" className="font-semibold underline">
            Registre-se aqui
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
