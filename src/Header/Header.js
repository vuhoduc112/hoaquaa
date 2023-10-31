import React, { useEffect, useState } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useSelector } from 'react-redux';
import UserLoginSS from './UserLoginSS/UserLoginSS';

const Header = () => {
    const location = useLocation();
    const isLinkActive = (linkPath) => {
        return location.pathname === linkPath ? 'active' : '';
    };

    const isLoggedIn = useSelector((state) => state.header.isLoggedIn);

    const imgLink = require('./img/logo.png');

    return (
        <div className="header">
            <div className="header-one">
                <div className="header-one-title">Chuyên cung cấp hoa tươi | Floris</div>

                <div className="header-one-btn">
                    {isLoggedIn ? (
                        <UserLoginSS />
                    ) : (
                        <Link to="/login" className="header-one-btn-account">
                            Đăng nhập
                        </Link>
                    )}

                    <Link className="header-one-btn-pay" to="/pay">
                        Thanh toán
                    </Link>
                    <Link to="/shop" className="header-one-btn-shop">
                        Cửa hàng
                    </Link>
                    <Link to="/listCartPay" className="header-one-btn-shop">
                        Giỏ hàng
                    </Link>
                    <Outlet />
                </div>
            </div>
            <div className="header-two">
                <Link to="/">
                    <img src={imgLink} className="header-two-logo" />
                </Link>
                <div className="header-two-seach">
                    <input type="search" className="header-two-seach-input" placeholder="Tìm kiếm..." />
                    <button type="button" className="header-two-seach-btn">
                        <FontAwesomeIcon className="header-two-seach-icon" icon={faSearch} />
                    </button>
                </div>
                <div className="header-two-btn">
                    <Link className={`header-two-btn-page ${isLinkActive('/')}`} to="/">
                        Trang chủ
                    </Link>
                    <div className="header-two-btn-product">
                        <Link to="/shop" className={`header-two-btn-product ${isLinkActive('/shop')}`}>
                            Sản phẩm
                            <FontAwesomeIcon className="header-two-btn-product-icon" icon={faChevronCircleDown} />
                        </Link>
                        <ul className="header-two-btn-product-list">
                            <li className="header-two-btn-product-item">
                                <Link to="/shop" className="header-two-btn-product-link">
                                    Nước ép
                                </Link>
                            </li>
                            <li className="header-two-btn-product-item">
                                <Link to="/shop" className="header-two-btn-product-link">
                                    Trái cây nhập khẩu
                                </Link>
                            </li>
                            <li className="header-two-btn-product-item">
                                <Link to="/shop" className="header-two-btn-product-link">
                                    Trái cây nội địa
                                </Link>
                            </li>
                            <li className="header-two-btn-product-item">
                                <Link to="/shop" className="header-two-btn-product-link">
                                    Các loại hạt dinh dưỡng
                                </Link>
                            </li>
                            <li className="header-two-btn-product-item">
                                <Link to="/shop" className="header-two-btn-product-link">
                                    Các loại rau củ quả
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/store" className={`header-two-btn-news ${isLinkActive('/store')}`}>
                        Tin tức
                    </Link>
                    <Link to="/contact" className={`header-two-btn-contact ${isLinkActive('/contact')}`}>
                        Liên hệ
                    </Link>

                    <div className="header-two-btn-cart">
                        <Badge badgeContent={4} color="success" fontSize="large">
                            <ShoppingCartIcon color="action" className="shopping-cart-icon" />
                        </Badge>
                    </div>

                    <div className="header-two-btn-cartBuy">
                        <div className="header-two-btn-cartBuy-product">
                            <img
                                className="header-two-btn-cartBuy-product-img"
                                src="https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/hoa-qua-2-300x300.jpg"
                            />
                            <div className="header-two-btn-cartBuy-product-info">
                                <div className="header-two-btn-cartBuy-product-info-label">Cà chua Đà Lạt</div>
                                <div className="header-two-btn-cartBuy-product-info-title">
                                    <div className="header-two-btn-cartBuy-product-info-title-number">1</div>
                                    <span style={{ color: '#c0c0c0' }}>*</span>
                                    <div className="header-two-btn-cartBuy-product-info-title-price">80.0000đ</div>
                                </div>
                            </div>
                            <div className="header-two-btn-cartBuy-product-close">
                                <HighlightOffIcon color="action" />
                            </div>
                        </div>
                        <div
                            style={{
                                fontSize: '16px',
                                color: '#000',
                                padding: '10px 0',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <span style={{ color: '#777777' }}>Tổng tiền: </span> 15000000đ
                        </div>
                        <Link to="/listCartPay">
                            <button className="header-two-btn-cartBuy-viewCart">Xem giỏ hàng</button>
                        </Link>
                        <Link to="/pay">
                            <button className="header-two-btn-cartBuy-pay">Thanh Toán</button>
                        </Link>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default Header;
