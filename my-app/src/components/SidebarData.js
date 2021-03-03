import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as FiIcons from "react-icons/fi";


export const SidebarData  =[
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Visit History',
        path: '/visitHistory',
        icon: <MdIcons.MdHistory />,
        cName: 'nav-text'
    },
    {
        title: 'Information',
        path: '/info',
        icon: <BsIcons.BsFillPersonLinesFill />,
        cName: 'nav-text'
    },
    {
        title: 'Sign-in',
        path: '/signIn',
        icon: <FiIcons.FiLogIn />,
        cName: 'nav-text'
    },
    {
        title: 'Sign-up',
        path: '/signUp',
        icon: <BsIcons.BsPersonPlusFill />,
        cName: 'nav-text'
    },


]