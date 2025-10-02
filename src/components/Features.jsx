import {Canvas} from "@react-three/fiber";
import StudioLights from "./three/StudioLights.jsx";
import {features} from "../constants/index.js";
import clsx from "clsx";

const Features = () => {
    return (
        <section id="features">
            <h2>See it all in a new light.</h2>

            <Canvas id="f-canvas" camera={{}}>
                <StudioLights />
                <ambientLight intensity={0.5} />
                {/* 3D MODEL*/}
            </Canvas>

            <div className="absolute inset-0">
                {features.map((feature, index) => (
                    <div className={clsx('box', `box${index + 1}`, feature.styles)}></div>
                ))}
            </div>
        </section>
    )
}

export default Features
