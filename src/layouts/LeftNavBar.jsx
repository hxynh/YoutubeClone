import { navItems } from "../data/LeftNavList";
import {SmallBarIcon, LargeBarIcon} from "../components/LeftBarIcon";
import { useState } from "react";

export default function LeftNavBar ({menuClicked}) {
    const [iconSelected, setIconSelected] = useState(navItems[0].title);

    return (
        <>
            <aside className="item-start overflow-y-auto scrollbar-hidden flex flex-col flex-shrink-0 ">
            {
                navItems.map((item, index) => (
                    <>
                    <SmallBarIcon 
                        icon={item.icon} 
                        title={item.text}
                        smallMenu={item.smallMenu} 
                        menuClicked={menuClicked}
                        iconSelected={iconSelected}
                        setIconSelected={setIconSelected}/>
                    <LargeBarIcon 
                        icon={item.icon} 
                        title={item.text}
                        divider={index===2 ? true : false}
                        menuClicked={menuClicked} iconSelected={iconSelected}
                        setIconSelected={setIconSelected}/>
                    </>
                ))
            } 
            </aside>

        </>
        )
}

