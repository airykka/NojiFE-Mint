import React, { useState } from "react";
import logo from "../../images/logo.svg";
import twitter from "../../images/twitter.svg";
import discord from "../../images/discord.svg";
import close from "../../images/close.svg";
import "./header.scss";
import { ConnectWallet } from "..";

export const Header = () => {
  const navRoutes = [
    { name: "About", path: "https://noji.so/#aboutNoji" },
    { name: "Raison D'etre", path: "https://noji.so/#raison" },
    { name: "Creators", path: "https://noji.so/#creators" },
    { name: "Archetypes", path: "https://noji.so/#archetypes" },
    { name: "FAQ's", path: "https://noji.so/#wens" },
  ];
  const navRoutesSm = [
    { name: "About", path: "https://noji.so/#aboutNoji" },
    { name: "The black woman", path: "https://noji.so/#blackWoman" },
    { name: "Raison D'etre", path: "https://noji.so/#raison" },
    { name: "Creators", path: "https://noji.so/#creators" },
    { name: "Archetypes", path: "https://noji.so/#archetypes" },
    { name: "FAQ's", path: "https://noji.so/#wens" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="header">
        <section>
          <a href="https://noji.so/#welcome" style={{ margin: 0 }}>
            <img src={logo} alt="logo" />
          </a>
          {navRoutes.map((route, i) => (
            <a href={route.path} key={`main-route-${i}`}>
              {route?.name}
            </a>
          ))}
        </section>

        <ConnectWallet />
      </div>

      <div className="header-sm">
        <a href="https://noji.so/#welcome" style={{ margin: 0 }}>
          <img src={logo} alt="logo" />
        </a>
        <section
          className={`ham ${open ? "ham-up" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span className={`${open ? "open-first" : "first"}`}></span>
          <span className={`${open ? "open-last" : "last"}`}></span>
        </section>

        {open && (
          <div className="menu-wrap">
            <section className="menu">
              <img
                src={close}
                alt="close"
                className="close"
                onClick={() => setOpen(false)}
              />
              <article>
                <div>
                  <img src={logo} alt="logo" />
                </div>

                <ul>
                  {navRoutesSm.map((route, i) => {
                    return (
                      <li key={`sm-route-${i}`}>
                        <a href={route?.path} onClick={() => setOpen(!open)}>
                          {route.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <div className="socials social-sm">
                  <a href="https://twitter.com/0xAddie" style={{ margin: 0 }}>
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a href="https://discord.com/0xAddie" style={{ margin: 0 }}>
                    <img src={discord} alt="discord" />
                  </a>
                </div>

                <div>
                  <ConnectWallet />
                </div>
              </article>

              <p>© 2022 Eto Inc. | Privacy Policy | Legal & License</p>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};
