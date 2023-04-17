import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="header-one">
        <div className="header-one-title">
          Chuyên cung cấp thực phẩm sạch | Haloda Fruist
        </div>
        <div className="header-one-btn">
          <div className="header-one-btn-account">Tài khoản</div>
          <div className="header-one-btn-pay">Thanh toán</div>
          <div className="header-one-btn-shop">Cửa hàng</div>
        </div>
      </div>
      <div className="header-two">
        <img
          src="http://hoaqua.langsonweb.com/wp-content/uploads/2020/09/logo-hoa-qua.png"
          className="header-two-logo"
        />
        <div className="header-two-seach">
          <input type="search" className="header-two-seach-input" placeholder="Tìm kiếm..."/>
          <button type="button" className="header-two-seach-btn">
            <FontAwesomeIcon className="header-two-seach-icon" icon={faSearch} />
          </button>
        </div>
        <div className="header-two-btn">
          <div className="header-two-btn-page">Trang chủ</div>
          <div className="header-two-btn-product">Sản phẩm</div>
          <div className="header-two-btn-intro">Giới thiệu</div>
          <div className="header-two-btn-news">Tin tức</div>
          <div className="header-two-btn-contact">Liên hệ</div>
          <div className="header-two-btn-cart">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
