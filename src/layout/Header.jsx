import React from "react";
import "./layout.css";
import { Link } from "react-router-dom";

const landing = [
  {
    name: "Tổng Quan",
    href: "/tong-quan",
  },
  {
    name: "Cá Nhân",
    href: "/gioi-thieu",
  },
  {
    name: "Kinh Nghiệm Làm Việc",
    href: "/kinh-nghiem",
  },
  {
    name: "Liên Hệ",
    href: "/lien-he",
  },
];

const Header = () => {
  return (
      <div className="container">
      <div className="logo">
        <img src="https://cdn.textstudio.com/output/sample/normal/0/1/3/2/joyce-logo-913-231.png" alt="logo" />
      </div>
      <div className="header">
        {landing.map((item, index) => (
          <Link to={item.href} key={index}>
            {item.name}
          </Link>
        ))}
      </div>
      </div>
  );
};

export default Header;
