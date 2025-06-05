import { Avatar } from 'primereact/avatar';
import avatar from '~/assets/icons/avatar.svg';

export default function NavbarCustom() {
    return (
        <nav className="bg-Items/20 flex justify-between items-center px-6 py-2 shadow-md ">
            <div className="flex text-nowrap items-center space-x-2">
                <img src="/IconPage.svg" alt="logo" className="w-16 h-16 aspect-square object-contain" />
                <p className="font-bold text-xl underline underline-offset-1 underline-mywhite/50">English Corner Academy.</p>
            </div>
            <div className="flex items-center space-x-6">
                <div className="flex flex-nowrap gap-3 text-lg"> 
                    <a href="/" className="text-mywhite hover:text-details transition-colors duration-300">Home</a> |
                    <a href="/about" className="text-mywhite hover:text-details transition-colors duration-300">About</a> |
                    <a href="/contact" className="text-mywhite hover:text-details transition-colors duration-300">Contact</a>
                </div>
                <Avatar image={avatar} size='xlarge' shape="circle" className='w-12 h-12 border-1 border-mywhite/75 aspect-square object-cover' />
            </div>
        </nav>
    );
}