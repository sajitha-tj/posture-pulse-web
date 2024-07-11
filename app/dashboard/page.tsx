"use client";

import NavBar from "@/components/NavBar";
import Image from "next/image";
import Webcam from "react-webcam";
import { useRef, useState } from "react";

export default function Dashboard() {
    const [isStartPoseBtnClicked, setIsStartPoseBtnClicked] = useState(false);

    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const handleStartPoseBtnClick = () => {
        setIsStartPoseBtnClicked(!isStartPoseBtnClicked)
    };

    //

    return (
        <main className="">
        <NavBar />
        <div className="h-[76px] w-full"/> {/* space for navbar */}
        {/* main area */}
        <div className="mx-auto sm:px-10 px-5 py-10">
            <div className="flex flex-col md:flex-row gap-2 max-w-7xl w-full justify-center mx-auto">
                {/* left-side */}
                <div className="basis-3/5">
                    {(!isStartPoseBtnClicked) ?
                        // display before camera is on
                        // hide this and replace with camera after the button click
                        <PositionDetails />
                        :
                        // part with camera and canvas
                        <div className="w-full">
                            <div className="overflow-hidden relative w-full mb-4 flex justify-center items-center text-6xl text-slate-900">
                                <div className="ghost-div w-[50vw] invisible aspect-video"/> {/* to fix heights */}
                                <Webcam ref={webcamRef} className="absolute top-0 w-[50vw] aspect-video rounded-lg"/>
                                <canvas ref={canvasRef} className="absolute top-0 w-[50vw] aspect-video" />
                            </div>
                        </div>
                    }
                    {/* button for switching */}
                    <div className="flex justify-center">
                        <button className="border border-slate-500 shadow-md shadow-slate-200 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all delay-50 px-6 py-1 rounded-md" onClick={handleStartPoseBtnClick}>
                            {(!isStartPoseBtnClicked) ? "Start Pose" : "Back"}
                        </button>
                    </div>
                </div>
                {/* right-side */}
                <div className="basis-2/5">
                    <div className="rounded-lg overflow-hidden w-full border border-slate-200 shadow-lg p-4">
                        <div className="w-full flex items-center">
                            <Image
                                src="/images/poses/tree_pos.jpg"
                                alt="Tree Pose"
                                layout="responsive"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
    );
}

// show details of the selected pose
export function PositionDetails(){
    return (
        <div className="mx-10 px-10 py-10">
            <h3 className="font-bold text-xl mb-2">
                Tree Posture
            </h3>
            <ul className="list-disc">
                <li>Get into position. Tree pose often starts from mountain pose (or Tadasana), with both feet planted firmly on the ground and your weight adequately distributed so that you are balanced.</li>
                <li>Bend one leg at the knee. Choose the leg you are going to fold in first. If your left leg is your standing leg, keep your left foot planted on the ground, and slowly bend in your right leg at the right knee so that the sole of your right foot rests against your left inner thigh (known as the half-lotus position in Bikram yoga). Point the knee of your bent leg outward, away from your body.</li>
                <li>Lengthen your body. Clasp your hands together in Anjali Mudra (also called the “prayer position”)</li>
                <li>Hold and repeat. Hold the pose for as long as necessary, making sure to breathe properly. When you’re ready to switch legs, exhale, and return to mountain pose to start again.</li>
            </ul>
        </div>
    );
}

// show the camera view
// export function CameraView(){
//     return (
//         <div className="w-full">
//             <div className="rounded-lg overflow-hidden w-full mb-4 flex justify-center items-center text-6xl text-slate-900">
//                 <Webcam />
//             </div>
//         </div>
//     );
// }