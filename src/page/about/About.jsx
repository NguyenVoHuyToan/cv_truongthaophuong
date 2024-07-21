import React from "react";
import "./about.style.css";

const About = () => {
  return (
    <>
      <h1 className="title">Thông Tin Cá Nhân</h1>
      <div className="about-page">
        <div className="about-me">
          <h1>Trương Thảo Phương</h1>
          <div className="information">
            <div className="my-profile">
              <div className="left">
                <ul>
                  <li>Ngày Sinh:</li>
                  <li>Quốc Tịch:</li>
                  <li>Tình Trạng Hôn Nhân: </li>
                  <li>Giới Tính:</li>
                  <li>Ngoại Ngữ:</li>
                </ul>
              </div>
              <div className="right">
                <ul>
                  <li>30-10-1992</li>
                  <li>Việt Nam</li>
                  <li>Đã Kết Hôn</li>
                  <li>Nữ</li>
                  <li>Tiếng Anh</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="avatar-about">
          <img src="./avatar2.jpg" alt="avatar" />
        </div>
      </div>
      <h1 className="title">Trình Độ Học Vấn</h1>
      <div className="education">
        <div className="education-text">
          <h2>Đại Học Tôn Đức Thắng</h2>
          <h2>Cử Nhân Trung Văn</h2>
          <h3>09/2010-09/2014</h3>
          <ul>
            <li>Tháng 09/2014: Tốt nghiệp chuyên ngành Trung Văn, khoa Ngoại ngữ, trường đại học Tôn Đức Thắng</li>
            <li>Bằng TOEIC 565</li>
            <li>Chứng chỉ tin học A</li>
            <li>Chứng chỉ Quản lý Nhân sự -  ĐH Kinh tế TP.HCM</li>
            <li>Chứng chỉ VLAS</li>
          </ul>
        </div>
        <div className="tdt-picture">
          <img src="https://vcdn1-vnexpress.vnecdn.net/2022/02/16/anh-1644998670-1644998682-1615-1644998693.png?w=1200&h=0&q=100&dpr=1&fit=crop&s=oLJj1uXoGAy0HfGeO2nF9w" alt="photo" />
        </div>
      </div>
    </>
  );
};

export default About;
