import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactDOM from "react-dom";
import { fetchAllCategory } from "../../action/category";
const renderChildrenNavigation = (listcategory, val) => {
  return (
    <ul className={`nav-child`}>
      {listcategory &&
        listcategory
          .filter((x) => x.parent === val.id)
          .map((value, key) => (
            <li className="Nav-item" key={key}>
              <Link to={`${value.slug}`}>
                {value.name}
              </Link>
            </li>
          ))}
    </ul>
  );
};

export default function Navgation(props) {
  const dispatch = useDispatch();
  const { listcategory } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(fetchAllCategory());
  }, []);
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={`${toggleMenu ? 'nav-bar-siderbar':'nav-bar'}`}>
      <div className="header-upper">
        <div className="auto-container">
          <div className="logo-outer">
            <div className="logo">
              <Link to="/" className="logo">
                <img src="" alt="logo" />
                
              </Link>
            </div>
            <div className="togglemenu" onClick = {() => setToggleMenu(!toggleMenu)}><i className="fa fa-bars" >Đổi Menu</i></div>
          </div>
        </div>
      </div>
      <div className="header-lower">
        <div className="auto-container">
          <div className="nav-outer">
            <div className="main-menu">
              <div className="navbar-collapse">
                <div className="nav-menu">
                  <ul>
                    <li className="Nav-item">
                      <Link to="/">Trang chủ</Link>
                    </li>
                    {listcategory &&
                      Object.keys(listcategory).map(
                        (val, key) =>
                          listcategory[val].parent == 0 && (
                            <li className="Nav-item" key={key}>
                              <Link to={`${listcategory[val].slug}`}>
                                {listcategory[val].name}
                              </Link>
                              {renderChildrenNavigation(listcategory, val=listcategory[val])}
                            </li>
                          )
                      )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
