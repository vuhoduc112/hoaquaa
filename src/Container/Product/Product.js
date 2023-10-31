import './product.css';
const Product = () => {
    return (
        <div className="product">
            <div className="container-fruits-one-product-discount">
                <div className="container-fruits-one-product-sale">
                    <p className="container-fruits-one-product-sale-number">-33%</p>
                </div>
                <img
                    alt="/"
                    className="container-fruits-one-product-img"
                    src="https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/hoa-qua-4.jpg"
                />
                <p className="container-fruits-one-product-title">Vải nhập khẩu</p>
                <div className="container-fruits-one-product-price">
                    <p className="container-fruits-one-product-price-one">90.000đ</p>
                    <p className="container-fruits-one-product-price-two">60.000đ</p>
                </div>
                <button className="container-fruits-one-product-btn">Mua ngay</button>
            </div>
        </div>
    );
};

export default Product;
