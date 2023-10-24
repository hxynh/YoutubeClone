import { VideoImg} from "../components/VideoTile";
import { IconGhost } from "../components/ButtonStyles";
import { FormatDuration } from "../utils/FormatDuration";
import {FormatTimeElapsed} from "../utils/FormatTimeElapsed";
import { useState, useEffect, useRef } from "react";

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, { notation: "compact" })

export default function Videos ({video}) {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if(videoRef.current === null)
            return;
        if(isHovered){ 
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [isHovered]);

    return (
        <div className="flex flex-col gap-2" 
        onMouseEnter={() => {
            console.log("Is Hovered");
            setIsHovered(true)}}
        onMouseLeave={() => setIsHovered(false)}
            >
                
        <a  className="aspect-ratio hover:cursor-pointer">
            <VideoImg  >
            <img 
                src={`${video.thumbnailUrl}`} 
                className="rounded-xl "/>
            <div className="absolute bottom-1.5 right-2 bg-secondary-dark text-secondary text-sm px-2 rounded">
                {FormatDuration(video.duration)}
            </div>
            <video
                className={`block h-full object-cover absolute inset-0 transition-opacity ${
                    isHovered ? "opacity-100 delay-200" : "opacity-0"}`}
          ref={videoRef}
          muted
          playsInline
          src={video.videoUrl}
        />
            </VideoImg>
            <div className="py-2 flex">
                <IconGhost > {/*ProfilePicture*/}
                <img 
                    src={`${video.channel.profileUrl}`} 
                    className="object-cover rounded-full h-full w-full"/>
                </IconGhost>
                <div className="px-2 tracking-tight">
                    <h2 className="font-semibold text-lg 	">{video.title}</h2>
                    <p className="text-secondary-text">{video.channel.name}</p>
                    <p className="text-secondary-text">{VIEW_FORMATTER.format(video.views)} views • {FormatTimeElapsed(video.postedAt) } ago </p>
                </div>
            </div>
            
        </a>
        </div>
        )
}