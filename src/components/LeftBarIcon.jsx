import { ButtonGhost } from "./ButtonStyles";
import { Divider } from "@mui/material";

export function SmallBarIcon ({icon, title, smallMenu, menuClicked}) {
    return(
        <a className={`${!smallMenu ? "hidden lg:hidden" : ""} ${menuClicked ? "hidden lg:block" : "block lg:hidden"}  w-full py-1 `}>
            <ButtonGhost className={`flex flex-col w-full rounded-lg justify-center`}>
                {icon}
                <div className="text-[0.6rem]">
                    {title}
                </div>
            </ButtonGhost>
        </a>
    )
}

export function LargeBarIcon ({icon, title, menuClicked, divider}) {
    return(
        <a className={`${menuClicked ? "block lg:hidden" : "hidden lg:block"} w-full py-1 `}>
            <ButtonGhost className={`flex w-full rounded-lg flex-row px-3 py-2 justify-start`}>
                {icon}
                <div className="mx-5 text-sm">
                    {title}
                </div>
            </ButtonGhost>
            {divider && <Divider />}
        </a>
        
    )
}
