import { useState } from "react";
import SapiensLogin from "../../assets/images/sapiensLogin.svg";
// import FacebookIcon from "../../assets/icons/facebook.webp";
// import GoogleIcon from "../../assets/icons/Google.svg";
import { Link } from "react-router-dom";
import { Slide, ToastContainer, toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    function handleEmail(e: any) {
        setEmail(e.target.value)
    }

    function handlePassword(e: any) {
        setPassword(e.target.value)
    }

    function MostrarContrasena() {
        setShowPassword(!showPassword);
    }

    async function handleSubmit(e: any) {
        toast.error('Aún no se ha implementado el login.', {
            position: "top-center",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            transition: Slide,
        });
        e.preventDefault();
        console.log("Formulario Enviado.");
        // setPayMode(!payMode);
    }

    async function handleGoogleLogin(response: any) {
        console.log(response);
        console.log(jwtDecode(response.credential) as { name: string, email: string, picture: string });
        navigate('/');
        
    }

    async function handleGoogleLoginFailure() {
        toast.error('Error al iniciar sesión con Google.', {
            position: "top-center",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            transition: Slide,
        });
    }
    return (
        <section className="w-full h-screen flex flex-col-reverse gap-0 justify-center p-2 items-center md:flex-row">

            <img src={SapiensLogin} alt="Sapiens" className="max-w-[28rem] w-full mx-5 aspect-square object-contain md:mx-0" />
            <div className="max-w-2xl w-full flex flex-col gap-8 min-h-70 text-mywhite bg-[#414253] p-2 rounded-[15px]">
                <h2 className="text-2xl bg-blue-500 p-4 text-center font-bold rounded-t-[10px]">Inicio de Sesión</h2>
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7 items-center">
                    <ToastContainer
                        position="top-center"
                        autoClose={6000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                        transition={Slide}
                    />
                    <div className='w-full flex justify-center items-center'>
                        <div className="relative w-full max-w-2/3 min-w-32">
                            <label className={`absolute ${email ? "-top-7 left-3 scale-90" : "top-[0.40rem] left-1/2 -translate-x-1/2"} pointer-events-none font-medium flex flex-nowrap transition-all duration-200`}>
                                <p className="text-xl text-mywhite/95">Email<span className="text-md text-[#FF8000]">*</span></p>
                            </label>
                            <input type="email" onChange={handleEmail} className={`relative w-full outline-none rounded-t-sm h-fit p-2 border-b-2 ${email ? "border-blue-500/70 bg-mywhite text-black" : "border-mywhite/70 bg-mywhite/15 text-mywhite"} `} required />
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div className="relative w-full max-w-2/3 min-w-32">
                            <label className={`absolute ${password ? "-top-7 left-3 scale-90" : "top-[0.40rem] left-1/2 -translate-x-1/2"} pointer-events-none font-medium flex flex-nowrap transition-all duration-200`}>
                                <p className="text-xl text-mywhite/95">password<span className="text-md text-[#FF8000]">*</span></p>
                            </label>
                            <div className="flex flex-col items-start gap-0">
                                <div className="w-full flex flex-nowrap">
                                    <input type={showPassword ? "text" : "password"} id="passwordInput" onChange={handlePassword} className={`relative w-full outline-none rounded-tl-sm h-fit p-2 border-b-2 ${password ? "border-blue-500/70 bg-mywhite text-black" : "border-mywhite/70 bg-mywhite/15 text-mywhite"} `} required />
                                    <button onClick={MostrarContrasena} className="h-auto px-1 py-[9px] bg-blue-500/70 rounded-tr-sm hover:bg-blue-500/90 transition-all duration-200" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                                        </svg>

                                    </button>
                                </div>

                                <Link to="/" className='text-blue-300'>¿Olvidaste tu contraseña?</Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-5/6 flex justify-center items-center gap-2 p-2 pt-3.5 border-t-[2px] border-mywhite/30 ">
                        <button type="submit" className="w-32 rounded-full p-2 text-center bg-blue-600/90 text-white transition-all hover:brightness-110">Iniciar Sesión</button>
                        <p className="text-2xl text-mywhite/40">|</p>
                        <GoogleLogin onSuccess={handleGoogleLogin} onError={handleGoogleLoginFailure}/>
                        {/* <button type="submit" className="w-32 flex justify-center items-center gap-2 rounded-full p-2 text-center bg-cyan-500/80 text-white transition-all hover:brightness-110">Google <img src={GoogleIcon} alt="Google" className="w-4 h-4 bg-mywhite p-0.5 rounded-sm aspect-square object-contain" /></button> */}
                        {/* <button type="submit" className="w-32 flex justify-center items-center gap-2 rounded-full p-2 text-center bg-cyan-500/80 text-white transition-all hover:brightness-110">Facebook <img src={FacebookIcon} alt="Facebook" className="w-4 h-4 aspect-square object-contain" /></button> */}
                    </div>
                </form>
            </div>
        </section>
    )
}