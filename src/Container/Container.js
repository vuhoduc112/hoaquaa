import './container.css';
import News from './News/New';
import { db } from '../config/config-filebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';

const Container = () => {
    const [productsList, setProductList] = useState([]);
    const [soBanGhi, setSoBanGhi] = useState(4);

    const productRef = collection(db, 'products');

    const getProducts = async () => {
        try {
            const data = await getDocs(productRef);
            const filterData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));

            setProductList(filterData);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    // const handleAdd = async () => {
    //     try {
    //         await addDoc(productRef, {
    //             imageUrl: link,
    //             nameProduct: name,
    //             priceOld: old,
    //             priceNew: priceNew,
    //             loaiHoa: loaiHoa,
    //         });
    //         getProducts();
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    const xemThem = () => {
        setSoBanGhi(soBanGhi + 4);
    };

    return (
        <div className="container">
            <div className="container-list">
                <img className="container-list-img" src="https://florist1989.com/uploads/r/1602245183081.jpg" />
            </div>
            <div className="container-title">
                <div className="container-title-handleImgOne"></div>
                <div className="container-title-handleImgTwo"></div>
                <div className="container-title-handleImgThree"></div>
            </div>

            <div className="container-fruits-one-list">
                <div className="container-fruits-one">
                    <div className="container-fruits-one-title">
                        <p className="container-fruits-one-title-one">HOA SINH NHẬT</p>
                    </div>
                </div>
                <div className="container-fruits-one-product">
                    <Grid container spacing={2}>
                        {productsList
                            .filter((productItem) => productItem.loaiHoa === 'Hoa Sinh Nhật')
                            .slice(0, soBanGhi)
                            .map((productsItem) => {
                                const daiHaGia = Math.floor(
                                    ((productsItem.priceOld - productsItem.priceNew) / productsItem.priceOld) * 100,
                                );
                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={productsItem.id}>
                                        <div className="container-fruits-one-product-discount">
                                            {daiHaGia !== 0 && (
                                                <div className="container-fruits-one-product-sale">
                                                    <p className="container-fruits-one-product-sale-number">
                                                        -{daiHaGia}%
                                                    </p>
                                                </div>
                                            )}
                                            <img
                                                alt="/"
                                                className="container-fruits-one-product-img"
                                                src={productsItem.imageUrl}
                                            />
                                            <p className="container-fruits-one-product-title">
                                                {productsItem.nameProduct}
                                            </p>
                                            <div className="container-fruits-one-product-price">
                                                <p className="container-fruits-one-product-price-one">
                                                    {productsItem.priceOld}VNĐ
                                                </p>
                                                <p className="container-fruits-one-product-price-two">
                                                    {productsItem.priceNew}VNĐ
                                                </p>
                                            </div>
                                            <button className="container-fruits-one-product-btn">Mua ngay</button>
                                        </div>
                                    </Grid>
                                );
                            })}
                    </Grid>
                </div>

                <div className="container-fruits-one-button-div">
                    <button className="container-fruits-one-button" onClick={xemThem}>
                        Xem thêm
                    </button>
                </div>
            </div>
            <div className="container-fruits-one-list">
                <div className="container-fruits-one">
                    <div className="container-fruits-one-title">
                        <p className="container-fruits-one-title-one">HOA KHAI TRƯƠNG</p>
                    </div>
                </div>
                <div className="container-fruits-one-product">
                    <Grid container spacing={2}>
                        {productsList
                            .filter((productItem) => productItem.loaiHoa === 'Hoa Khai Trương')
                            .slice(0, soBanGhi)
                            .map((productsItem) => {
                                const daiHaGia = Math.floor(
                                    ((productsItem.priceOld - productsItem.priceNew) / productsItem.priceOld) * 100,
                                );
                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={productsItem.id}>
                                        <div className="container-fruits-one-product-discount">
                                            {daiHaGia !== 0 && (
                                                <div className="container-fruits-one-product-sale">
                                                    <p className="container-fruits-one-product-sale-number">
                                                        -{daiHaGia}%
                                                    </p>
                                                </div>
                                            )}
                                            <img
                                                alt="/"
                                                className="container-fruits-one-product-img"
                                                src={productsItem.imageUrl}
                                            />
                                            <p className="container-fruits-one-product-title">
                                                {productsItem.nameProduct}
                                            </p>
                                            <div className="container-fruits-one-product-price">
                                                <p className="container-fruits-one-product-price-one">
                                                    {productsItem.priceOld}VNĐ
                                                </p>
                                                <p className="container-fruits-one-product-price-two">
                                                    {productsItem.priceNew}VNĐ
                                                </p>
                                            </div>
                                            <button className="container-fruits-one-product-btn">Mua ngay</button>
                                        </div>
                                    </Grid>
                                );
                            })}
                    </Grid>
                </div>

                <div className="container-fruits-one-button-div">
                    <button className="container-fruits-one-button" onClick={xemThem}>
                        Xem thêm
                    </button>
                </div>
            </div>
            <div className="container-fruits-one-list">
                <div className="container-fruits-one">
                    <div className="container-fruits-one-title">
                        <p className="container-fruits-one-title-one">HOA TƯƠI</p>
                    </div>
                </div>
                <div className="container-fruits-one-product">
                    <Grid container spacing={2}>
                        {productsList
                            .filter((productItem) => productItem.loaiHoa === 'Hoa Tươi')
                            .slice(0, soBanGhi)
                            .map((productsItem) => {
                                const daiHaGia = Math.floor(
                                    ((productsItem.priceOld - productsItem.priceNew) / productsItem.priceOld) * 100,
                                );
                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={productsItem.id}>
                                        <div className="container-fruits-one-product-discount">
                                            {daiHaGia !== 0 && (
                                                <div className="container-fruits-one-product-sale">
                                                    <p className="container-fruits-one-product-sale-number">
                                                        -{daiHaGia}%
                                                    </p>
                                                </div>
                                            )}
                                            <img
                                                alt="/"
                                                className="container-fruits-one-product-img"
                                                src={productsItem.imageUrl}
                                            />
                                            <p className="container-fruits-one-product-title">
                                                {productsItem.nameProduct}
                                            </p>
                                            <div className="container-fruits-one-product-price">
                                                <p className="container-fruits-one-product-price-one">
                                                    {productsItem.priceOld}VNĐ
                                                </p>
                                                <p className="container-fruits-one-product-price-two">
                                                    {productsItem.priceNew}VNĐ
                                                </p>
                                            </div>
                                            <button className="container-fruits-one-product-btn">Mua ngay</button>
                                        </div>
                                    </Grid>
                                );
                            })}
                    </Grid>
                </div>

                <div className="container-fruits-one-button-div">
                    <button className="container-fruits-one-button" onClick={xemThem}>
                        Xem thêm
                    </button>
                </div>
            </div>

            <News />
        </div>
    );
};

export default Container;
