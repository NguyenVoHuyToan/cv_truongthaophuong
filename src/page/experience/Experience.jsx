import React from "react";
import "./experience.style.css";
const Experience = () => {
  return (
    <>
      <h1 className="title">Quá Trình Làm Việc</h1>
      <div className="exp-page">
        <div className="first-exp">
          <div className="image-exp">
            <img
              src="https://vieclamnhamay.vn/uploads/images/2021/08/20-11/5f7a87960c2db_B.jpg"
              alt="photo"
            />
          </div>
          <div className="content-exp">
            <h2>Inbound-Outbound Pricing</h2>
            <h3>Công ty Feiliks HCM Supply Chain</h3>
            <h4>09/2023 - Hiện tại</h4>
            <ul>
              Pricing:
              <li>Check giá long/short haul với line fwd</li>
              <li>Nhận thông tin và submit booking</li>
              <li>Làm việc với vendor</li>
            </ul>
            <ul>
              Cus:
              <li>Take care và follow hàng trực tiếp với khách hàng</li>
              <li>Các công việc liên quan và từ cấp trên giao phó thêm</li>
            </ul>
          </div>
        </div>
        <div className="second-exp">
          <div className="image-exp">
            <img
              src="https://www.vnbuyerguide.com/img_data/images/-logo_vrg.png"
              alt="photo-exp"
            />
          </div>
          <div className="content-exp">
            <h2>Nhân viên Hành chính - Nhân sự</h2>
            <h3>Công ty CP ĐT Sài Gòn VRG</h3>
            <h4>05/2016 - 07/2019</h4>
            <ul>
              <li>Chấm công & Tính lương</li>
              <li>Làm BHXH</li>
              <li>Quản lý HĐLĐ, theo dõi tái kí</li>
              <li>Tuyển dụng cho các phòng ban</li>
              <li>Quản lý hồ sơ lý lịch nhân viên</li>
              <li>Soạn thảo lưu trữ về Thông báo, Quyết định, Công văn</li>
              <li>Làm đề xuất thưởng, nghĩ lễ, Tết...</li>
              <li>Các công việc yêu cầu từ cấp trên</li>
            </ul>
          </div>
        </div>
        <div className="third-exp">
          <div className="image-exp">
            <img
              src="https://vanhaigroup.com/hang-tau-sitc/hang-tau-sitc-tai-viet-nam-3/"
              alt="photo-exp"
            />
          </div>
          <div className="content-exp">
            <h2>Chuyên viên CSKH</h2>
            <h3>SITC LOGISTIC HO CHI MINH</h3>
            <h4>08/2019 - 06/2022</h4>
            <ul>
              <li>Nhận thông báo hàng đến từ khách</li>
              <li>Thanh toán, kiểm tra lô hàng</li>
              <li>Trực tiếp sắp xếp kế hoạch với khách</li>
              <li>Thông báo thu chi với kế toán</li>
              <li>Kiểm tra sắp xếp lịch tàu và lịch đóng hàng, thông báo với khách</li>
              <li>Hoàn thành công việc cấp trên giao phó</li>
            </ul>
          </div>
        </div>
      </div>
        <div className="another-exp">
          <ul>Các công việc trước:
            <li>Tháng 08/2014 đến tháng 04/2016: Làm phiên dịch công ty Gain Lucky (Việt Nam) KCN Phước Đông tỉnh Tây Ninh</li>
            <li>Tháng 08/2018 đến tháng -7/2019: Làm PD & NVKD công ty BĐS</li>
          </ul>
        </div>
    </>
  );
};

export default Experience;
