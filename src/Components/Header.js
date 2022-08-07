import React from "react";
import NormalNav from "./NavigationBar";
import { useEffect } from "react";
import VolunteerNav from './Navbarvolunteer'
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";

function Header() {
  let loginStatus = localStorage.getItem("login");
  let navigate = useNavigate();
  
  return (
    <div>
      {loginStatus != null ? (
        <>
            <VolunteerNav/>
        </>
      ):(
        <>
          <NormalNav />
        </>
      )}
    </div>
  );
}

export default Header;
