import CategoryTabs from "../components/CategoryTabs";
import Header from "../layouts/Header";
import LeftNavBar from "../layouts/LeftNavBar";
import Videos from "../layouts/Videos";
import { allCategories } from "../data/CategoryList";
import {videos} from "../data/VideoDetails";
import { useState } from "react";

export default function HomePage () {
    const [selectedCategory, setSelectedCategory] = useState(allCategories[0]);
    const [menuClicked, setMenuClicked] = useState(false);

    return (
        <div >
            <Header 
                menuClicked={menuClicked}
                setMenuClicked={setMenuClicked}/>
            <div className="flex flex-grow-1 overflow-auto mt-3">
                <LeftNavBar 
                    menuClicked={menuClicked}
                    />
                <div className="overflow-x-hidden px-8 pb-4" >
                    <div className="sticky bg-white z-10 pb-3">
                        <CategoryTabs 
                            allCategories={allCategories}
                            selectedCategory={selectedCategory}
                            setSelectedCategory = {setSelectedCategory}/>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2">
                        {
                            videos.map((video) => (
                                <Videos video={video}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        )
}