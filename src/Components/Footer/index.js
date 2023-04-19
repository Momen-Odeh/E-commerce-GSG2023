import React from 'react'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import Text from './Text'
import './style.css'
import { Grid } from '@mui/material';


const index = () => {
    return (
        <><div className='Footer'>
            <Grid container xs={10} justifyContent={'space-evenly'}>
                <div className='Category'>
                    <h2 className='CatTitle'>Exclusive</h2>
                    <h3 className='CatTitle'>Subscribe</h3>
                    <Text Text={"Get 10% off your first order"} />
                    <div className='NavbarSearch'>
                        <div className='Search'>
                            <input placeholder='Enter you email'></input>
                            <SendOutlinedIcon fontSize='10px' />
                        </div>
                    </div>
                </div>
                <div className='Category'>
                    <h2 className='CatTitle'>Support</h2>
                    <Text Text={"111 Bijoy sarani, Dhaka, DH 1515, Bangladesh."} />
                    <Text Text={"exclusive@gmail.com"} />
                    <Text Text={"+88015-88888-9999"} />
                </div>
                <div className='Category'>
                    <h2 className='CatTitle'>Account</h2>
                    <Text Text={"My Account"} />
                    <Text Text={"Login / Register"} />
                    <Text Text={"Cart"} />
                    <Text Text={"Wishlist"} />
                    <Text Text={"Shop"} />
                </div>
                <div className='Category'>
                    <h2 className='CatTitle'>Quick link</h2>
                    <Text Text={"Privacy"} />
                    <Text Text={"Terms Of Use"} />
                    <Text Text={"FAQ"} />
                    <Text Text={"Contact"} />
                </div>
                <div className='Category'>
                    <h2 className='CatTitle'>Download App</h2>
                    <p>Save $3 with App New User Only</p>
                    <div className='Images'>
                        <img src='assets/Qrcode.png' alt=' '></img>
                        <div className='RightImages'>
                            <img src="/assets/GooglePlay.png"></img>
                            <img src="/assets/AppStore.png"></img>
                        </div>
                    </div>
                    <div className='Social'>
                        <img src='assets/Facebook.png'></img>
                        <img src='assets/Twitter.png'></img>
                        <img src='assets/Insta.png'></img>
                        <img src='assets/Linkedin.png'></img>
                    </div>
                </div>
            </Grid> </div>
            <div className='Copyright'>© Copyright Rimel 2022. All right reserved</div>
        </>
    )
}

export default index