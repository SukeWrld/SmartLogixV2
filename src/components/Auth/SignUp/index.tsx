"use client";
import Link from "next/link";
import toast from "react-hot-toast";
import SocialSignUp from "../SocialSignUp";
import Logo from "@/components/Layout/Header/Logo";
import { useState } from "react";
import Loader from "@/components/Common/Loader";

const SignUp = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        toast.success("Funcionalidad deshabilitada para esta demo");
        setLoading(false);
    };

    return (
        <>
            <div className="mb-10 text-center mx-auto inline-block max-w-[160px]">
                <Logo />
            </div>

            <SocialSignUp />

            <span className="z-1 relative my-8 block text-center before:content-[''] before:absolute before:h-px before:w-40% before:bg-dark_border before:bg-opacity-60 before:left-0 before:top-3 after:content-[''] after:absolute after:h-px after:w-40% after:bg-dark_border after:bg-opacity-60 after:top-3 after:right-0">
                <span className="text-body-secondary relative z-10 inline-block px-3 text-base text-white">
                    O
                </span>
            </span>

            <form onSubmit={handleSubmit}>
                <div className="mb-[22px]">
                    <input
                        type="text"
                        placeholder="Nombre Completo"
                        name="name"
                        required
                        className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base outline-hidden transition text-white focus:border-white"
                    />
                </div>
                <div className="mb-[22px]">
                    <input
                        type="email"
                        placeholder="Correo Electrónico"
                        name="email"
                        required
                        className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base outline-hidden transition text-white focus:border-white"
                    />
                </div>
                <div className="mb-[22px]">
                    <input
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        required
                        className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base outline-hidden transition text-white focus:border-white"
                    />
                </div>
                <div className="mb-9">
                    {/* BOTÓN FORZADO A BLANCO CON TEXTO NEGRO */}
                    <button
                        type="submit"
                        style={{ backgroundColor: 'white', color: 'black', fontWeight: 'bold' }}
                        className="flex w-full items-center text-18 justify-center rounded-md px-5 py-3 transition duration-300 ease-in-out hover:opacity-80"
                    >
                        Registrar Sesión {loading && <Loader />}
                    </button>
                </div>
            </form>

            <p className="text-body-secondary mb-4 text-white text-base">
                Al crear una cuenta aceptas nuestra{" "}
                <a href="https://auth0.com/docs/secure/data-privacy-and-compliance" target="_blank" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline' }}>
                    Privacidad
                </a>{" "}
                y{" "}
                <a href="#!" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline' }}>
                    Térmenos
                </a>
            </p>

            <p className="text-body-secondary text-white text-base">
                ¿Ya tienes cuenta?
                <Link href="/" scroll={false} style={{ paddingLeft: '8px', color: 'white', fontWeight: 'bold', textDecoration: 'underline' }}>
                    iniciar sesion
                </Link>
            </p>
        </>
    );
};

export default SignUp;