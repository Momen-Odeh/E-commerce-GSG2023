import React from 'react'
import CategoryItem from '../../CategoryItem/ar'
import styles from './index.module.css'

import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MainSectionTitle from '../../MainSectionTitle'
import SectionTitle from '../../SectionTitle'

import Grid from '@mui/material/Grid';



let Categorys = [
    {Icon:PhoneIphoneOutlinedIcon,Label:"هواتف"},
    {Icon:ComputerOutlinedIcon,Label:"اجهزه "},
    {Icon:WatchOutlinedIcon,Label:"ساعات ذكيه"},
    {Icon:CameraAltOutlinedIcon,Label:"كميرات"},
    {Icon:HeadphonesOutlinedIcon,Label:"سماعات"},
    {Icon:SportsEsportsOutlinedIcon,Label:"العاب"}
    ]
function CategoryList() {
  return (
    <div className={styles.Category}>
      <SectionTitle secTitle="قوائم"/>
      <MainSectionTitle label='تصفح القوائم'/>
      <Grid container gap={2} justifyContent={'center'}>
        {Categorys.map((item,index) => 
          <Grid item key={index}>
          <CategoryItem icon={item.Icon} label={item.Label} />
          </Grid>
          )
        }
      </Grid>
    
    </div>
    
  )
}

export default CategoryList