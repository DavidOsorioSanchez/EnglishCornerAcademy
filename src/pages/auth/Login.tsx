import { useState } from "react";
import SapiensLogin from "../../assets/images/sapiensLogin.svg";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmail(e: any) {
        setEmail(e.target.value)
    }

    function handlePassword(e: any) {
        setPassword(e.target.value)
    }

    async function handleSubmit(e: any) {
            e.preventDefault();
            console.log("Formulario Enviado.");
            // setPayMode(!payMode);
    }

    return (
        <section className="w-full h-screen flex flex-col-reverse gap-0 justify-center p-2 items-center md:flex-row">
            <img src={SapiensLogin} alt="Sapiens" className="max-w-[28rem] w-full mx-5 aspect-square object-contain md:mx-0" />
            <div className="max-w-2xl w-full flex flex-col gap-8 min-h-70 text-mywhite bg-[#414253] p-2 rounded-[15px]">
                <h2 className="text-2xl bg-blue-500 p-4 text-center font-bold rounded-t-[10px]">Inicio de Sesión</h2>
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
                    <div className='w-full flex justify-center items-center'>
                        <div className="relative w-full max-w-2/3 min-w-32">
                            <label className={`absolute ${email ? "-top-6 left-3 scale-90" : "top-[0.40rem] left-1/2 -translate-x-1/2"} pointer-events-none font-medium flex flex-nowrap transition-all duration-200`}>
                                <p className="text-xl text-mywhite/95">Email<span className="text-md text-[#FF8000]">*</span></p>
                            </label>
                            <input type="email" onChange={handleEmail} className={`relative w-full outline-none rounded-t-sm h-fit p-2 border-b-2 ${email ? "border-blue-500/70 bg-mywhite/25" : "border-mywhite/70 bg-mywhite/5"} `} required />
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div className="relative w-full max-w-2/3 min-w-32">
                            <label className={`absolute ${password ? "-top-6 left-3 scale-90" : "top-[0.40rem] left-1/2 -translate-x-1/2"} pointer-events-none font-medium flex flex-nowrap transition-all duration-200`}>
                                <p className="text-xl text-mywhite/95">password<span className="text-md text-[#FF8000]">*</span></p>
                            </label>
                            <input type="password" onChange={handlePassword} className={`relative w-full outline-none rounded-t-sm h-fit p-2 border-b-2 ${password ? "border-blue-500/70 bg-mywhite/25" : "border-mywhite/70 bg-mywhite/5"} `} required />
                        </div>
                    </div>
                    <button type="submit" className="w-32 rounded-md p-2 text-center bg-blue-500 text-white">Iniciar Sesión</button>
                </form>
            </div>
        </section>
    )
}