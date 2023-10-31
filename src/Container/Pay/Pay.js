import * as React from 'react';
import './pay.css';
import { Outlet, Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Button, Radio, TextField } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Pay = () => {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <div className="pay">
            <div className="pay-noProduct">
                <p className="pay-noProduct-heading">Chưa có sản phẩm nào trong giỏ hàng</p>
                <Link to="/shop" className="pay-noProduct-btn">
                    QUAY TRỞ LẠI CỬA HÀNG
                </Link>
                <Outlet />
            </div>
            <div className="pay-product">
                <div className="pay-product-infor">
                    <ul className="pay-product-infor-list">
                        <h1 className="pay-product-infor-heading">THÔNG TIN THANH TOÁN</h1>
                        <li className="pay-product-infor-item">
                            <TextField required label="Tên" fullWidth />
                        </li>
                        <li className="pay-product-infor-item">
                            <TextField label="Tên công ty (tuỳ chọn)" fullWidth />
                        </li>
                        <li className="pay-product-infor-item">
                            <TextField required label="Quốc gia" fullWidth />
                        </li>
                        <li className="pay-product-infor-item">
                            <TextField required label="Địa chỉ" fullWidth />
                        </li>
                        <li className="pay-product-infor-item">
                            <TextField label="Mã bưu điện (tuỳ chọn)" fullWidth />
                        </li>
                        <li className="pay-product-infor-item">
                            <TextField required label="Tỉnh / Thành phố" fullWidth />
                        </li>
                        <li className="pay-product-infor-item">
                            <TextField required label="Số điện thoại" fullWidth />
                        </li>
                        <li className="pay-product-infor-item">
                            <TextField required label="Địa chỉ email" fullWidth />
                        </li>
                    </ul>
                    <div className="pay-product-bosung">
                        <h1 className="pay-product-bosung-heading">THÔNG TIN BỔ SUNG</h1>
                        <label className="pay-product-bosung-label">Ghi chú đơn hàng (tùy chọn)</label>
                        <textarea
                            rows="10"
                            cols="40"
                            className="pay-product-bosung-desc"
                            placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
                        />
                    </div>
                </div>
                <div className="pay-product-count">
                    <div className="pay-product-countTwo">
                        <h1 className="pay-product-count-heading">ĐƠN HÀNG CỦA BẠN</h1>
                        <TableContainer component={Paper} sx={{ marginBottom: '30px' }}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Sản phẩm</TableCell>
                                        <TableCell align="right">Tổng</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div>
                            <Accordion sx={{ marginBottom: '30px' }}>
                                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" className="abc">
                                    <Radio
                                        checked={selectedValue === 'a'}
                                        onChange={handleChange}
                                        value="a"
                                        name="radio-buttons"
                                        inputProps={{ 'aria-label': 'A' }}
                                    />
                                    <Typography>Chuyển khoản ngân hàng</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi. Vui lòng sử
                                        dụng Mã đơn hàng của bạn trong phần Nội dung thanh toán. Đơn hàng sẽ đươc giao
                                        sau khi tiền đã chuyển.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ marginBottom: '30px' }}>
                                <AccordionSummary
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                    sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
                                >
                                    <Radio
                                        checked={selectedValue === 'b'}
                                        onChange={handleChange}
                                        value="b"
                                        name="radio-buttons"
                                        inputProps={{ 'aria-label': 'B' }}
                                    />
                                    <Typography>Trả tiền mặt khi nhận hàng</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>Trả tiền mặt khi giao hàng.</Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Button variant="contained" color="success" sx={{ marginTop: '30px' }}>
                                ĐẶT HÀNG
                            </Button>
                            <p style={{ marginTop: '30px' }}>
                                Your personal data will be used to process your order, support your experience
                                throughout this website, and for other purposes described in our{' '}
                                <a
                                    href=""
                                    class="woocommerce-privacy-policy-link"
                                    target="_blank"
                                    style={{ color: '#669933', textDecoration: 'none' }}
                                >
                                    chính sách riêng tư
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pay;
