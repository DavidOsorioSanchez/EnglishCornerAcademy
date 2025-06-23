export default function ButtonHowUse({ children, customOnClick }: { children: React.ReactNode, customOnClick: any}) {
    return (
        <button 
            onClick={customOnClick} // Placeholder for onClick handler
            className={`w-full flex flex-nowrap gap-6 items-center justify-start p-2 `}
        >
            {children}
        </button>
    );
}