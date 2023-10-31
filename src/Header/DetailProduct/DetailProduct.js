import { Link, Outlet } from 'react-router-dom';
import './detailProduct.css';
import { useState } from 'react';
import { Box, Button, Dialog, Rating, Tab, Tabs, Typography } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import StarIcon from '@mui/icons-material/Star';
import Product from '../../Container/Product/Product';
import Input from '@mui/joy/Input';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const labels = {
    0.5: 'Không thích',
    1: 'Không thích+',
    1.5: 'Kém',
    2: 'Kém+',
    2.5: 'Khá',
    3: 'Khá+',
    3.5: 'Tốt',
    4: 'Tốt+',
    4.5: 'Xuất sắc',
    5: 'Xuất sắc+',
};

function getLabelText(valueRating) {
    return `${valueRating} Star${valueRating !== 1 ? 's' : ''}, ${labels[valueRating]}`;
}

const DetailProduct = () => {
    const [count, setCount] = useState(1);
    const [value, setValue] = useState(1);
    const [valueRating, setValueRating] = useState(2);
    const [hover, setHover] = useState(-1);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className="wrapper">
                <div className="detailProduct-titleImg">
                    <div className="detailProduct-title">
                        <div className="detailProduct-title-heading">Bom mỹ</div>
                        <div className="detailProduct-title-link">
                            <Link to="/" style={{ textDecoration: 'none', color: '#fff', marginRight: '15px' }}>
                                Trang chủ
                            </Link>
                            <span style={{ color: '#fff' }}>/</span>
                            <Link to="/shop" style={{ textDecoration: 'none', color: '#fff', marginLeft: '15px' }}>
                                Các loại hoa
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="detailProduct">
                    <div className="detailProduct-info">
                        <div className="detailProduct-info-handleImg">
                            <img
                                className="detailProduct-info-handleImg-img"
                                src="https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/hoa-qua-1-300x278.jpg"
                            />
                        </div>
                        <div className="detailProduct-info-listed">
                            <div className="detailProduct-info-listed-price">
                                <span className="detailProduct-info-listed-price-old">200.000đ</span>
                                <span className="detailProduct-info-listed-price-new">150.000đ</span>
                            </div>
                            <ul className="detailProduct-info-listed-list">
                                <li className="detailProduct-info-listed-item">
                                    <label className="detailProduct-info-listed-label">Xuất xứ: </label>
                                    <label className="detailProduct-info-listed-local">Mỹ</label>
                                </li>
                                <li className="detailProduct-info-listed-item">
                                    <label className="detailProduct-info-listed-label">Bảo quản: </label>
                                    <label className="detailProduct-info-listed-local">Lạnh</label>
                                </li>
                                <li className="detailProduct-info-listed-item">
                                    <label className="detailProduct-info-listed-label">Hạn sử dụng: </label>
                                    <label className="detailProduct-info-listed-local">2021</label>
                                </li>
                                <li className="detailProduct-info-listed-item">
                                    <label className="detailProduct-info-listed-label">Giá trị dinh dưỡng cao</label>
                                </li>
                            </ul>
                            <div className="detailProduct-info-listed-buy">
                                <div className="detailProduct-info-listed-buy-upAndDown">
                                    <Button
                                        onClick={() => {
                                            setCount(count - 1);
                                        }}
                                    >
                                        -
                                    </Button>
                                    <span>{count}</span>
                                    <Button
                                        onClick={() => {
                                            setCount(count + 1);
                                        }}
                                    >
                                        +
                                    </Button>
                                </div>
                                <button className="detailProduct-info-listed-buy-btnBuy">Mua ngay</button>
                            </div>
                            <div className="detailProduct-info-listed-info">
                                <label className="detailProduct-info-listed-info-label">
                                    Gọi ngay: 0384.159.943 để nhận giá tốt
                                </label>
                                <img
                                    className="detailProduct-info-listed-info-img"
                                    src="https://hoaqua.langsonweb.com/wp-content/uploads/2019/01/4-tieu-chi.png"
                                />
                            </div>
                            <div className="detailProduct-info-buy">
                                <h3 className="detailProduct-info-buy-heading" onClick={handleOpen}>
                                    MUA NGAY
                                </h3>
                                <Dialog open={open} onClose={handleClose}>
                                    <div className="openDialog">
                                        <div className="openDialog-title">ĐẶT MUA BOM MỸ</div>
                                        <div className="openDialog-info">
                                            <div className="openDialog-info-view">
                                                <div className="openDialog-info-view-imgPrice">
                                                    <img
                                                        src="https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/hoa-qua-1-100x100.jpg"
                                                        className="openDialog-info-view-imgPrice-img"
                                                    />

                                                    <div className="openDialog-info-view-imgPrice-info">
                                                        <span className="openDialog-info-view-imgPrice-title">
                                                            Cà chua đà lạt
                                                        </span>
                                                        <div className="openDialog-info-view-imgPrice-price">
                                                            <span className="openDialog-info-view-imgPrice-price-now">
                                                                200.000đ
                                                            </span>
                                                            <span className="openDialog-info-view-imgPrice-price-new">
                                                                180.000đ
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="openDialog-info-view-number">
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            marginBottom: '20px',
                                                        }}
                                                    >
                                                        <span className="openDialog-info-view-number-title">
                                                            Số lượng
                                                        </span>
                                                        <div className="openDialog-info-view-number-upAndDown">
                                                            <Button
                                                                onClick={() => {
                                                                    setCount(count - 1);
                                                                }}
                                                            >
                                                                -
                                                            </Button>
                                                            <span>{count}</span>
                                                            <Button
                                                                onClick={() => {
                                                                    setCount(count + 1);
                                                                }}
                                                            >
                                                                +
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <span style={{ fontSize: '14px' }}>
                                                        Bạn vui lòng nhập đúng số điện thoại để chúng tôi sẽ gọi xác
                                                        nhận đơn hàng trước khi giao hàng. Xin cảm ơn!
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="openDialog-info-buy">
                                                <span className="openDialog-info-buy-title">Thông tin người mua</span>
                                                <Box
                                                    sx={{
                                                        py: 2,
                                                        display: 'grid',
                                                        gap: 2,
                                                        alignItems: 'center',
                                                        flexWrap: 'wrap',
                                                    }}
                                                >
                                                    <Input
                                                        placeholder="Họ và tên"
                                                        variant="outlined"
                                                        size="sm"
                                                        width="355px"
                                                        required
                                                    />
                                                    <Input
                                                        placeholder="Số điện thoại"
                                                        variant="outlined"
                                                        fullWidth
                                                        size="sm"
                                                        required
                                                    />
                                                    <Input
                                                        placeholder="Địa chỉ email"
                                                        variant="outlined"
                                                        fullWidth
                                                        size="sm"
                                                    />
                                                    <Input
                                                        placeholder="Địa chỉ nhận hàng"
                                                        variant="outlined"
                                                        fullWidth
                                                        size="sm"
                                                        required
                                                    />
                                                    <Input
                                                        placeholder="Ghi chú đơn hàng"
                                                        variant="outlined"
                                                        fullWidth
                                                        size="sm"
                                                    />
                                                </Box>
                                                <div className="openDialog-info-buy-sum">
                                                    Tổng: <span>80.000đ</span>
                                                </div>
                                                <button className="openDialog-info-buy-btnBuy">ĐẶT HÀNG NGAY</button>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog>
                                <h3 className="detailProduct-info-buy-label">Gọi điện xác nhận và giao hàng tận nơi</h3>
                            </div>
                            <div className="detailProduct-info-list">
                                <span className="detailProduct-info-list-label">Danh mục:</span>
                                <a className="detailProduct-info-list-link">
                                    {' '}
                                    Các loại hạt dinh dưỡng, Các loại rau củ quả Oragnic, Nước ép, Sản phẩm khác, Trái
                                    cây nhập khẩu, Trái cây nội địa
                                </a>
                            </div>
                            <div className="detailProduct-info-icon">
                                <FacebookOutlinedIcon className="detailProduct-info-icon-icon" />
                                <TwitterIcon className="detailProduct-info-icon-icon" />
                                <InstagramIcon className="detailProduct-info-icon-icon" />
                                <EmailIcon className="detailProduct-info-icon-icon" />
                                <LinkedInIcon className="detailProduct-info-icon-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="evaluate">
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="Mô tả" {...a11yProps(0)} />
                            <Tab label="Đánh giá" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <div className="evaluate-text">
                            Cung cấp số lượng lớn hoa quả nhập khẩu từ Úc, Mỹ tươi ngon giá rẻ tại Hà Nội. Cửa hàng hoa
                            quả nhập khẩu 54 Lạc Long Quân Hà Nội cung cấp hoa quả nhập khẩu Úc Mỹ Nhật. Hoa quả tươi
                            như Táo, Nho của Mỹ, Úc… đều được bảo quản trong môi trường lạnh đặc biệt từ khi hái, không
                            chất bảo quản và các chất gây hại cho sức khỏe.
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <div className="evaluate-textTwo">
                            <div className="evaluate-label">Đánh giá</div>
                            <div className="evaluate-tabel">
                                <div className="evaluate-tabel-heading">Hãy là người đầu tiên nhận xét</div>
                                <ul className="evaluate-tabel-list">
                                    <li className="evaluate-tabel-item">
                                        <span className="evaluate-tabel-danhgia-label">Đánh giá của bạn</span>
                                        <Box
                                            sx={{
                                                width: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                height: '40px',
                                            }}
                                        >
                                            <Rating
                                                name="hover-feedback"
                                                value={valueRating}
                                                precision={0.5}
                                                getLabelText={getLabelText}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                                onChangeActive={(event, newHover) => {
                                                    setHover(newHover);
                                                }}
                                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                            />
                                            {valueRating !== null && (
                                                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : valueRating]}</Box>
                                            )}
                                        </Box>
                                    </li>
                                    <li className="evaluate-tabel-item">
                                        <span className="evaluate-tabel-item-label">Nhận xét của bạn*</span>
                                        <textarea
                                            style={{
                                                outline: 'none',
                                                padding: '12px',
                                                boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
                                            }}
                                            id="comment"
                                            name="comment"
                                            cols="45"
                                            rows="8"
                                            required=""
                                        ></textarea>
                                    </li>
                                    <li className="evaluate-tabel-item">
                                        <span className="evaluate-tabel-item-label">Tên*</span>
                                        <input
                                            className="evaluate-tabel-item-input"
                                            id="author"
                                            name="author"
                                            type="text"
                                            value=""
                                            size="30"
                                            required=""
                                        ></input>
                                    </li>
                                    <li className="evaluate-tabel-item">
                                        <span className="evaluate-tabel-item-label">Email*</span>
                                        <input
                                            className="evaluate-tabel-item-input"
                                            id="author"
                                            name="author"
                                            type="text"
                                            value=""
                                            size="30"
                                            required=""
                                        ></input>
                                    </li>
                                </ul>
                                <button className="evaluate-tabel-btnSend">GỬI ĐI</button>
                            </div>
                        </div>
                    </CustomTabPanel>
                </div>
                <div className="product-examlple">
                    <h1 className="product-examlple-heading">SẢN PHẨM TƯƠNG TỰ</h1>
                    <Product />
                </div>
                <Outlet />
            </div>
        </>
    );
};

export default DetailProduct;
