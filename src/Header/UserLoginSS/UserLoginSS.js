import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Box } from '@mui/material';

const UserLoginSS = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '20px' }}>
                <Button id="basic-button" onClick={handleClick} sx={{ color: '#fff', textTransform: 'capitalize' }}>
                    Tài khoản
                </Button>
                {open ? <ExpandLess /> : <ExpandMore />}
            </Box>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Chỉnh sửa tài khoản</MenuItem>
                <MenuItem onClick={handleClose}>Mật khẩu</MenuItem>
                <MenuItem onClick={handleClose}>Lịch sử đơn hàng</MenuItem>
                <MenuItem onClick={handleClose}>Đăng xuất</MenuItem>
            </Menu>
        </div>
    );
};

export default UserLoginSS;
