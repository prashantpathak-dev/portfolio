/* eslint-disable @next/next/no-img-element */
export default function Home() {
    return (
        <main className="w-screen h-screen flex flex-col">
            <nav className="navbar absolute z-10 glass">
                <a href="/" className="btn btn-ghost normal-case text-xl">
                    PP | Prashant Pathak
                </a>
            </nav>
            <div className="grow overflow-y-scroll snap-y snap-mandatory">
                <div className="h-full">
                    <div className="h-full w-full snap-center">
                        <div className="hero h-full">
                            <div className="hero-content flex-col lg:flex-row">
                                <div className="avatar">
                                    <div className="max-w-xxs lg:max-w-sm rounded shadow-xl">
                                        <img src="/dp.jpg" alt="Prashant Pathak's DP" className="" />
                                    </div>
                                </div>
                                <div className="md:p-10">
                                    <h1 className="text-xl lg:text-5xl font-bold">Hi! My name is Prashant Pathak</h1>
                                    <p className="py-6 text-justify">
                                        I am a passionate technophile with strength in learning on the fly and ability
                                        to utilise my leadership skills to achieve extraordinary results with the team.
                                    </p>
                                    <div className="flex flex-row justify-start">
                                        <a
                                            href="mailto:prashantpathak.dev@gmail.com"
                                            className="btn btn-accent flex-auto sm:flex-initial">
                                            Get in Touch
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="h-full snap-center">
                        <p>Experience</p>
                    </div>
                    <div className="h-full snap-center">
                        <p>Skills</p>
                    </div>
                    <div className="h-full snap-center">
                        <p>Education</p>
                    </div>
                    <div className="h-full snap-center">
                        <p>Contact</p>
                    </div> */}
                </div>
            </div>
        </main>
    );
}
