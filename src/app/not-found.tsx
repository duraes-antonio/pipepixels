import Link from 'next/link';
import { Button } from './ui/button';

const texts = {
    title: 'Page not found',
    subtitle:
        'Oops! It seems you got lost. The page you are looking for does not exist or has been moved.',
    button: 'Back to home page',
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4 sm:p-6 md:p-8">
            <div className="max-w-md w-full text-center space-y-6 sm:space-y-8">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto">
                    <Butterfly />
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0088FF]">
                    404
                </h1>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
                    {texts.title}
                </h2>

                <p className="text-sm sm:text-base text-gray-500 mx-auto max-w-xs sm:max-w-sm">
                    {texts.subtitle}
                </p>

                <div className="pt-2">
                    <Button
                        asChild
                        className="bg-[#0088FF] hover:bg-[#0066CC] text-white font-medium px-4 sm:px-6 py-2 text-sm sm:text-base">
                        <Link href="/public">{texts.button}</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

function Butterfly() {
    return (
        <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full animate-float">
            {/* Left Wing */}
            <path
                d="M100 100C70 70 30 80 20 30C10 80 40 110 100 100Z"
                fill="#0088FF"
                className="animate-pulse"
                style={{ animationDelay: '0.1s' }}
            />

            {/* Right Wing */}
            <path
                d="M100 100C130 70 170 80 180 30C190 80 160 110 100 100Z"
                fill="#0088FF"
                className="animate-pulse"
                style={{ animationDelay: '0.3s' }}
            />

            {/* Left Lower Wing */}
            <path
                d="M100 100C70 130 30 120 20 170C10 120 40 90 100 100Z"
                fill="#00AAFF"
                className="animate-pulse"
                style={{ animationDelay: '0.5s' }}
            />

            {/* Right Lower Wing */}
            <path
                d="M100 100C130 130 170 120 180 170C190 120 160 90 100 100Z"
                fill="#00AAFF"
                className="animate-pulse"
                style={{ animationDelay: '0.7s' }}
            />

            {/* Body */}
            <path
                d="M100 70C105 70 105 130 100 130C95 130 95 70 100 70Z"
                fill="#0066CC"
            />

            {/* Antennae */}
            <path
                d="M95 70C90 60 85 50 80 45"
                stroke="#0066CC"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M105 70C110 60 115 50 120 45"
                stroke="#0066CC"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}
