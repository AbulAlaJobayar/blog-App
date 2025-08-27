import Link from 'next/link'

const links = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Blog',
        href: '/blog',
    },
    {
        title: 'Create Blog',
        href: '/create_blog',
    },
]

export default function FooterSection() {
    return (
        <footer className="bg-background border-b py-12">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-wrap justify-between gap-12">
                    <div className="order-last flex items-center gap-3 md:order-first">
                        <Link
                            href="#"
                            aria-label="go home">
                             <span className='font-bold text-green-700'>TechTales</span> 
                            
                        </Link>
                        <span className="text-muted-foreground block text-center text-sm">© {new Date().getFullYear()} Dexnivo Tech, All rights reserved</span>
                    </div>

                    <div className="order-first flex flex-wrap gap-x-6 gap-y-4 md:order-last">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-muted-foreground hover:text-primary block duration-150">
                                <span>{link.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}