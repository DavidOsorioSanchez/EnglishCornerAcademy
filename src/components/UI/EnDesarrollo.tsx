
interface Props {
    children: React.ReactNode;
    rounded?: boolean;
}

export default function EnDesarrollo({ children, rounded }: Props) {
    return (
            <div className={`relative w-auto h-auto z-50 bg-black/80 flex justify-center items-center ${rounded ? 'rounded-md' : ''}`}>
                <h1 className="absolute text-xl font-bold text-white">En Desarrollo</h1>
                {children}
            </div>
    );
}