import { FormControl, InputLabel, NativeSelect, Select } from '@mui/material';
import { Outlet, Link } from 'react-router-dom';
import Product from '../Product/Product';
import './shop.css';

const Shop = () => {
    return (
        <div className="shop">
            <div className="shop-header">
                <div className="shop-header-one">
                    <h1 className="shop-header-one-heading">Cửa hàng</h1>
                    <div className="shop-header-one-link">
                        <Link to="/" className="shop-header-one-link-home">
                            Trang chủ /
                        </Link>
                        <span className="shop-header-one-link-shop"> Cửa hàng</span>
                    </div>
                    <Outlet />
                </div>
                <div className="shop-header-two">
                    <FormControl fullWidth style={{ backgroundColor: '#67814d', borderRadius: '20px', padding: '4px' }}>
                        <NativeSelect
                            className="shop-header-two-sort"
                            defaultValue={30}
                            inputProps={{
                                name: 'sort-order',
                                id: 'uncontrolled-native',
                            }}
                            style={{
                                color: '#fff',
                            }}
                        >
                            <option
                                style={{
                                    color: '#000',
                                }}
                                value={1}
                            >
                                Theo thứ tự mặc định
                            </option>
                            <option
                                style={{
                                    color: '#000',
                                }}
                                value={2}
                            >
                                Theo mức độ phổ biến
                            </option>
                            <option
                                style={{
                                    color: '#000',
                                }}
                                value={3}
                            >
                                Thứ tự theo điểm đánh giá
                            </option>
                            <option
                                style={{
                                    color: '#000',
                                }}
                                value={4}
                            >
                                Mới nhất
                            </option>
                            <option
                                style={{
                                    color: '#000',
                                }}
                                value={5}
                            >
                                Theo giá : thấp đến cao
                            </option>
                            <option
                                style={{
                                    color: '#000',
                                }}
                                value={6}
                            >
                                Theo giá : cao xuống thấp
                            </option>
                        </NativeSelect>
                    </FormControl>
                </div>
            </div>
            <div className="shop-container">
                <div className="shop-container-table">
                    <h1 className="shop-container-table-heading">DANH MỤC SẢN PHẨM</h1>
                    <ul className="shop-container-table-list">
                        <li className="shop-container-table-item">
                            Các loại hạt dinh dưỡng
                            <span className="shop-container-table-count">(4)</span>
                        </li>
                        <li className="shop-container-table-item">
                            Các loại hạt dinh dưỡng
                            <span className="shop-container-table-count">(4)</span>
                        </li>
                        <li className="shop-container-table-item">
                            Các loại hạt dinh dưỡng
                            <span className="shop-container-table-count">(4)</span>
                        </li>
                        <li className="shop-container-table-item">
                            Các loại hạt dinh dưỡng
                            <span className="shop-container-table-count">(4)</span>
                        </li>
                        <li className="shop-container-table-item">
                            Các loại hạt dinh dưỡng
                            <span className="shop-container-table-count">(4)</span>
                        </li>
                    </ul>
                </div>
                <div className="shop-container-list">
                    <div className="shop-container-item">
                        <Product />
                    </div>
                    <div className="shop-container-item">
                        <Product />
                    </div>
                    <div className="shop-container-item">
                        <Product />
                    </div>
                    <div className="shop-container-item">
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Shop;
