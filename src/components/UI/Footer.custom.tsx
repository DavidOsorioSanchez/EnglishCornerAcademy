import BookEffect from "@/assets/BookEfect"

export default function FooterCustom() {
    return (
        <footer className="relative min-h-24 bottom-0 h-auto items-end mt-6 bg-linear-to-r from-cyan-500 to-blue-500 text-mywhite">
            <BookEffect />
            <div className="absolute pt-8 w-full h-full flex justify-around items-center">
                <p>©2025 English Corner Academy</p>
                {/* <div className="flex gap-2">
                    <a href="https://github.com/DavidOsorioSanchez/EnglishCornerAcademy.git" target="_blank" rel="noopener noreferrer">
                        <img src="/GitHub.svg" alt="GitHub" className="w-10 h-10 aspect-square object-contain" />
                    </a>
                    <a href="https://www.facebook.com/alejandro.osorio.39142072?locale=es_LA" target="_blank" rel="noopener noreferrer">
                        <img src="/Facebook.svg" alt="Facebook" className="w-16 h-16 aspect-square object-contain" />
                    </a>
                </div> */}
            </div>
        </footer>
    );
}