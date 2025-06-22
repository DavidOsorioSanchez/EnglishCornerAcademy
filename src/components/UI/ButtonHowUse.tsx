export default function ButtonHowUse({ children }: { children: React.ReactNode }) {
    return (
        <button className="w-full flex flex-nowrap gap-6 items-center justify-start p-2 border-l-2 border-mywhite/50 active:border-blue-500 hover:border-blue-500 focus:border-blue-500   hover:bg-blue-500/10 transition-colors">
            {children}
        </button>
    );
}