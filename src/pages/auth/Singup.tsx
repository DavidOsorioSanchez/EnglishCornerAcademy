import SapiensRegister from "../../assets/images/sapiensRegister.svg";

export default function Singup(){
    return(
        <section className="w-full h-screen flex justify-around items-center ">
            <img src={SapiensRegister} alt="Sapiens"  className="max-w-xl  aspect-square object-contain"/>
            <p className="text-center text-2xl font-bold text-mywhite">
                Ingrese a tu cuenta
            </p>
        </section>
    )
}