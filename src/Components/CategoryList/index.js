import React from 'react'
import CategoryItem from '../CategoryItem'
import styles from './index.module.css'

import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MainSectionTitle from '../MainSectionTitle'
import SectionTitle from '../SectionTitle'




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
    <div className={styles.Category}>
      <SectionTitle secTitle="Categories"/>
      <MainSectionTitle label='Browse By Category'/>
      <div className={styles.CategoryList}>
        {Categorys.map((item,index) => <CategoryItem icon={item.Icon} label={item.Label} key={index}/>)}
      </div>
    </div>
    
  )
}

export default CategoryList