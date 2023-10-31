import { Box, Button } from '@mui/material';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import './listCartPay.css';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Bom mỹ', 180, 6.0, 24),
    createData('Táo nhập khẩu', 70, 9.0, 37),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
];

const ListCartPay = () => {
    const [count, setCount] = React.useState(1);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', margin: '50px 230px', marginTop: '140px' }}>
            <Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Sản phẩm</TableCell>
                                <TableCell align="center">Giá</TableCell>
                                <TableCell align="center">Số lượng</TableCell>
                                <TableCell align="center">Tổng</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        sx={{ display: 'flex', alignItems: 'center' }}
                                    >
                                        <HighlightOffIcon color="action" />
                                        <img
                                            src="https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/hoa-qua-2-300x300.jpg"
                                            className="ListCartPay-img"
                                        />
                                        <label className="ListCartPay-label">Cà chua đà lạt</label>
                                    </TableCell>
                                    <TableCell align="center">{row.calories}.000đ</TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '35px' }}
                                    >
                                        <div className="ListCartPay-upAndDown">
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
                                    </TableCell>
                                    <TableCell align="center">{row.carbs}</TableCell>
                                    <TableCell align="center">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '450px', marginLeft: '36px' }}>
                <h1 className="ListCartPay-heading">TỔNG SỐ LƯỢNG</h1>
                <div className="ListCartPay-sumMoney">
                    <label className="ListCartPay-sumMoney-label">Tổng Phụ:</label>
                    <label className="ListCartPay-sumMoney-count">250.000đ</label>
                </div>
                <div className="ListCartPay-sumMoney">
                    <label className="ListCartPay-sumMoney-label">Tổng:</label>
                    <label className="ListCartPay-sumMoney-count">250.000đ</label>
                </div>
                <button className="ListCartPay-btnPay">TIẾN HÀNH THANH TOÁN</button>
                <button className="ListCartPay-btnsale">
                    <LoyaltyIcon sx={{ margin: '4px' }} color="action" />
                    Phiếu ưu đãi
                </button>
                <input className="ListCartPay-inputcodeSlale" placeholder="Mã ưu đãi" />
                <button className="ListCartPay-btnconfirmCodeSale">Áp dụng </button>
            </Box>
        </Box>
    );
};

export default ListCartPay;
