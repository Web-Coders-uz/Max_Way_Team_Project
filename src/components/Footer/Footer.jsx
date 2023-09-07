import React from 'react';
import Logo from "../../images/logo.webp";
import { Link } from 'react-router-dom';
import Style from "./Footer.module.scss";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer>
      <div className={Style.Footer_Container}>
        <div className={Style.Footer_Links}>
          <img className={Style.Logo} src={Logo} alt="" />
          <Link to={"/Filials"}> {t("Navigation1")} </Link>
          <Link to={"/About"}> {t("Navigation2")} </Link>
          <Link to={"/Contact"}> {t("Navigation3")} </Link>
        </div>
        <div className={Style.Footer_Bottom}>
          <p>{t("Footer")}</p>
          <div className={Style.Links}>
            <BsInstagram size={25} fill='gray' />
            <BsFacebook size={25} fill='gray' />
            <AiFillYoutube size={28} fill='gray' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer