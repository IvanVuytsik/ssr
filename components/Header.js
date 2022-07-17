import Image from "next/image"
import IMG from '../public/logo.png'
import HeaderItem from "./HeaderItem"
import {
    HomeIcon, SearchIcon, UserIcon, CollectionIcon, 
    BadgeCheckIcon, LightningBoltIcon,
} from "@heroicons/react/solid"

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderItem title='HOME' Icon={HomeIcon} />
            <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
            <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
            <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
            <HeaderItem title='SEARCH' Icon={SearchIcon} />
            <HeaderItem title='ACCOUNT' Icon={UserIcon} />
        </div>
        <div className="flex flex-grow justify-end gap-[1rem]">
            <p className="h-16 w-30 text-[2.5rem] text-[#637b0c] font-['Brush_Script_MT'] whitespace-nowrap">Flickmo</p>
            <Image className="object-contain" src={IMG} alt="" width={50} height={50} />
        </div>
    </header>
  )
}

export default Header