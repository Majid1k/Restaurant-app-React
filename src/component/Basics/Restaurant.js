
import "./style.css";
import Menu from "./menuApi";
import { useState } from "react";    
import MenuCard from "./MenuCard";
import {Navbar} from "./Navbar";

//applying map() on our Menu to get an array based on only catigories of each element(object)
const uniqueList = [...new Set(Menu.map((curElem) => {  
 return curElem.category;
})
),
"All",
]

const Restaurant = () => {

  const [menuData, setMenuData] = useState(Menu);        
  const[menuList, setMenuList] = useState(uniqueList);   


  const filterItem = (clickedCategory) => {            
    if (clickedCategory === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {       
    return curElem.category === clickedCategory;       
  })
  setMenuData(updatedList);
};


  return (
   <>

<Navbar filterItem={filterItem} menuList={menuList} />
<MenuCard currentData={menuData} />;

   </>
  )
};


export default Restaurant;
