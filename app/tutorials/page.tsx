import NavBar from "@/components/NavBar";

import { tutorials, fixCamera } from "@/utils/data/pose-data";

export default function Tutorials() {
    return (
        <main className="">
        <NavBar noPosesView={true}/>
        <div className="h-[76px] w-full"/> {/* space for navbar */}
        {/* main area */}
        <div className="mx-auto sm:px-12 px-8 py-10">
            <h3 className="font-bold text-lg">Basic Tutorials</h3>
            <div className="mt-4">
                <ul className="list-disc list-inside">
                    {tutorials.map((tutorial, index) => (
                        <li key={index} className="mb-2">{tutorial}</li>
                    ))}
                </ul>
            </div>
            <h3 className="font-bold text-lg mt-8">Fix Camera</h3>
            <div className="mt-4">
                <ul className="list-disc list-inside">
                    {fixCamera.map((tutorial, index) => (
                        <li key={index} className="mb-2">{tutorial}</li>
                    ))}
                </ul>
            </div>
            <a href="/" className="block mt-8 font-bold text-slate-500 hover:text-slate-800">..back to Home </a>
        </div>
        </main>
    );
}