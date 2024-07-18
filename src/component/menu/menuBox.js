
import { useState } from "react";
import MenuTitle from "./menu-title";
import { useDispatch } from "react-redux";

export default function MenuBox(){

    const dispatch = useDispatch();
    const [selectedMenu, setSelectedMenu] = useState(''); // 선택된 메뉴 상태 저장
    

    const handleMenuClick = (text) => {
      setSelectedMenu(text); // 클릭한 메뉴 텍스트 저장
      dispatch({ type: 'SET_TEXT', payload: text }); // 클릭한 메뉴 텍스트를 payload로 action 전달
    };

    return(
        <>
            <div className='menu-box'>
                <div className="menu-logo"></div>

                <div className="menu-title-box">
                    <MenuTitle text="메뉴1" onClick={() => handleMenuClick('메뉴1')} selected={selectedMenu === '메뉴1'} />
                    <MenuTitle text="메뉴2" onClick={() => handleMenuClick('메뉴2')} selected={selectedMenu === '메뉴2'} />
                    <MenuTitle text="메뉴3" onClick={() => handleMenuClick('메뉴3')} selected={selectedMenu === '메뉴3'} />
                </div>
            </div>
        </>
    )
}