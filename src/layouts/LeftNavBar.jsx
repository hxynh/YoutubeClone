import { navItems } from "../data/LeftNavList";
import {SmallBarIcon, LargeBarIcon} from "../components/LeftBarIcon";

export default function LeftNavBar ({menuClicked}) {
    console.log(menuClicked);
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
                        menuClicked={menuClicked}/>
                    <LargeBarIcon 
                        icon={item.icon} 
                        title={item.text}
                        divider={index===2 ? true : false}
                        menuClicked={menuClicked} />
                    </>
                ))
            } 
            </aside>

        </>
        )
}

