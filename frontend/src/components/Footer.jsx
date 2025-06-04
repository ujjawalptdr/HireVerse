const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#12111D] via-[#1E1E2F] to-[#12111D] text-[#E4E4E7] py-12 shadow-lg">
            <div className="max-w-7xl mx-auto px-6">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center border-b border-[#3A3A50] pb-8 mb-8">
                    <div className="text-3xl font-extrabold mb-5 lg:mb-0 select-none bg-clip-text text-transparent bg-gradient-to-r from-[#F48C06] to-[#F83002]">
                        HireVerse
                    </div>
                    <ul className="flex gap-8 text-base font-medium">
                        {[
                            { name: "About Us", href: "/" },
                            { name: "Contact", href: "/" },
                            { name: "Privacy Policy", href: "/" },
                            { name: "Terms of Service", href: "/" },
                        ].map(({ name, href }) => (
                            <li key={name}>
                                <a
                                    href={href}
                                    className="relative text-[#E4E4E7] hover:text-[#00D4FF] transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#00D4FF] hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] rounded"
                                    aria-label={name}
                                >
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Middle Section */}
                <div className="flex flex-col lg:flex-row justify-between gap-12 text-[#B0B0BC]">
                    <div className="max-w-xs">
                        <h3 className="text-xl font-semibold text-[#F48C06] mb-3">HireVerse</h3>
                        <p className="text-sm leading-relaxed">
                            Connecting job seekers with the best opportunities. Your career,
                            your way.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-[#F48C06] mb-3">Quick Links</h3>
                        <ul className="flex flex-col gap-3 text-base font-medium">
                            {[
                                { name: "Find Jobs", href: "/" },
                                { name: "Post a Job", href: "/" },
                                { name: "Browse Companies", href: "/" },
                            ].map(({ name, href }) => (
                                <li key={name}>
                                    <a
                                        href={href}
                                        className="hover:text-[#00D4FF] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] rounded"
                                        aria-label={name}
                                    >
                                        {name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-[#F48C06] mb-3">Contact Us</h3>
                        <ul className="space-y-2 text-sm font-medium text-[#9CA3AF]">
                            <li>
                                Email:{" "}
                                <a
                                    href="mailto:support@hirehub.com"
                                    className="hover:text-[#00D4FF] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] rounded"
                                    aria-label="Email support at hirehub"
                                >
                                    support@hireVerse.com
                                </a>
                            </li>
                            <li>
                                Phone:{" "}
                                <a
                                    href="tel:+18001234567"
                                    className="hover:text-[#00D4FF] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] rounded"
                                    aria-label="Call HireHub support"
                                >
                                    +1-800-123-4567
                                </a>
                            </li>
                            <li>123 Job Street, Career City</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 text-center text-sm text-[#7B7B8A] select-none font-medium">
                    © {new Date().getFullYear()} HireVerse. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
