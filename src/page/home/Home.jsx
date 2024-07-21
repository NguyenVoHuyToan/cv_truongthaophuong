import React from "react";
import "./home.style.css";
const Home = () => {
  return (
    <>
    <h1 className="title">Giới Thiệu</h1>
    <div className="homepage">
      <div className="profile">
        <h1>Trương Thảo Phương (Joyce)</h1>
        <img src="./avatar1.jpg" alt="avatar" />
        <p>
          Với 10 năm kinh nghiệm làm qua các vị trí phiên dịch, nhân sự, xuất
          nhập khẩu và bản tính cẩn thận, tỉ mỉ, ham học hỏi đã rèn luyện bản
          thân luôn phát triển. Tinh thần cầu tiến và phát triển năng lực để
          thăng tiến trong công việc
        </p>
      </div>
      <div className="avatar-home">
        <img src="./avatar.jpg" alt="avatar" />
        <h3>HÀNH CHÍNH NHÂN SỰ - XUẤT NHẬP KHẨU</h3>
        <h3>10 NĂM KINH NGHIỆM</h3>
      </div>
    </div>
    </>
  );
};

export default Home;
