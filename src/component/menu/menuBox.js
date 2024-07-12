
import MenuTitle from "./menu-title";

export default function MenuBox(){

    return(
        <>
            <div className='menu-box'>
                <div className="menu-logo">메뉴 로고 이미지</div>

                <div className="menu-title-box">
                    <MenuTitle text="메뉴1"/>
                    <MenuTitle text="메뉴2"/>
                    <MenuTitle text="메뉴3"/>
                </div>
            </div>
        </>
    )
}