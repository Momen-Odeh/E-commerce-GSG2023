import React from 'react'
import CategoryItem from '../CategoryItem'
import './index.css'

import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';




let Categorys = [
    {Icon:PhoneIphoneOutlinedIcon,Label:"Phones"},
    {Icon:ComputerOutlinedIcon,Label:"Computers"},
    {Icon:WatchOutlinedIcon,Label:"SmartWatch"},
    {Icon:CameraAltOutlinedIcon,Label:"Camera"},
    {Icon:HeadphonesOutlinedIcon,Label:"HeadPhones"},
    {Icon:SportsEsportsOutlinedIcon,Label:"Gaming"}
    ]
function CategoryList() {
  return (
    <div className='CategoryList'>
        {Categorys.map((item,index) => <CategoryItem icon={item.Icon} label={item.Label} key={index}/>)}
        
    </div>
  )
}

export default CategoryList