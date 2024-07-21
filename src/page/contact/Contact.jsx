import React from "react";
import "./contact.style.css";
import { HomeFilled, MailFilled, PhoneFilled } from "@ant-design/icons";
const Contact = () => {
  return (
    <>
      <h1 className="title">Thông Tin Liên Hệ</h1>
      <div className="contact-page">
        <div className="photo-contact">
          <img src="./Avatar7.jpg" alt="photo-contact" />
        </div>
        <div className="contact-info">
          <h1>Trương Thảo Phương (Joyce)</h1>
          <div className="total-information">
            <div className="icon">
              <li>
                <MailFilled />
              </li>
              <li>
                <PhoneFilled />
              </li>
              <li>
                <HomeFilled />
              </li>
            </div>
            <div className="content">
              <ul>
                <li>
                  <a href="mailto:thaophuong301092@gmail.com?" subject="subject text" target="blank">
                    thaophuong301092@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+0799828669">
                    0799828669
                  </a>
                </li>
                <li>479 Quốc Lộ 13, Hiệp Bình Phước, Thủ Đức, TPHCM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
