import { Link } from "react-router";

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

export default function Header({ currentPath }: HeaderProps) {

    return (
        <nav
            className="fixed w-full z-50 top-0 left-0 border-b border-slate-200 bg-background-light/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* <!-- Logo --> */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                            <span className="material-icons-outlined text-xl">monitor_heart</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight">AnalyzeECG</span>
                    </div>
                    {/* <!-- Desktop Menu --> */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link to="/" className={navItemClass("/", currentPath)}>Home</Link>
                            <Link className={navItemClass("/analyze", currentPath)}
                                to="/analyze">Analyze</Link>
                            {/* <Link className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors px-3 py-2 text-sm font-medium"
                            to="/demo">Live Demo</Link> */}
                        </div>
                    </div>
                    {/* <!-- CTA & Theme Toggle --> */}
                    <div className="flex items-center gap-4">
                        <Link className="hidden sm:flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-primary/25"
                            to="/analyze">
                            <span>Get started</span>
                            <span className="material-icons-outlined text-sm">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
