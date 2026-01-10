import { Link } from "react-router";
import { useState } from "react";

type HeaderProps = {
    currentPath: string
}

const getRootPath = (pathname: string) => {
  const segment = pathname.split("/").filter(Boolean)[0]
  return segment ? `/${segment}` : "/"
}

const navItemClass = (path: string, currentPath: string) => {
    const rootPath = getRootPath(currentPath)
    return (
        `
          px-3 py-2 text-sm font-medium transition-colors
          ${rootPath === path
            ? "text-primary"
            : "text-slate-500 hover:text-primary dark:text-slate-400"}
        `
    )
}

const mobileNavItemClass = (path: string, currentPath: string) => {
    const rootPath = getRootPath(currentPath)
    return (
        `
          block px-4 py-3 text-base font-medium transition-colors rounded-lg
          ${rootPath === path
            ? "bg-primary/10 text-primary"
            : "text-slate-700 hover:bg-slate-100 hover:text-primary"}
        `
    )
}

export default function Header({ currentPath }: HeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            <nav
                className="fixed w-full z-50 top-0 left-0 border-b border-slate-200 bg-background-light/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* <!-- Logo --> */}
                        <Link to="/" onClick={closeMobileMenu}>    
                            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                                    <span className="material-icons-outlined text-xl">monitor_heart</span>
                                </div>
                                <span className="text-xl font-bold tracking-tight">Heartbeat Classifier</span>
                            </div>
                        </Link>
                        {/* <!-- Desktop Menu --> */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <Link to="/" className={navItemClass("/", currentPath)}>Home</Link>
                                <Link className={navItemClass("/analyze", currentPath)}
                                    to="/analyze">Analyze</Link>
                            </div>
                        </div>
                        {/* <!-- CTA & Theme Toggle --> */}
                        <div className="flex items-center gap-4">
                            <Link className="hidden sm:flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-primary/25"
                                to="/analyze">
                                <span>Get started</span>
                                <span className="material-icons-outlined text-sm">arrow_forward</span>
                            </Link>
                            {/* <!-- Mobile Menu Button --> */}
                            <button
                                onClick={toggleMobileMenu}
                                className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-primary hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors"
                                aria-expanded={isMobileMenuOpen}
                                aria-label="Toggle mobile menu">
                                <span className="material-icons-outlined text-2xl">
                                    {isMobileMenuOpen ? 'close' : 'menu'}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* <!-- Mobile Menu Overlay --> */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
                    onClick={closeMobileMenu}
                    aria-hidden="true"
                />
            )}

            {/* <!-- Mobile Menu Slide-in --> */}
            <div
                className={`fixed top-16 right-0 bottom-0 w-64 bg-background-light z-40 md:hidden transform transition-transform duration-300 ease-in-out shadow-xl ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="px-4 py-6 space-y-2">
                    <Link
                        to="/"
                        className={mobileNavItemClass("/", currentPath)}
                        onClick={closeMobileMenu}>
                        <div className="flex items-center gap-3">
                            <span className="material-icons-outlined text-xl">home</span>
                            <span>Home</span>
                        </div>
                    </Link>
                    <Link
                        to="/analyze"
                        className={mobileNavItemClass("/analyze", currentPath)}
                        onClick={closeMobileMenu}>
                        <div className="flex items-center gap-3">
                            <span className="material-icons-outlined text-xl">analytics</span>
                            <span>Analyze</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
