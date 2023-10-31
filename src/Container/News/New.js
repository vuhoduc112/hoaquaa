import './new.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrin, faShare } from '@fortawesome/free-solid-svg-icons';
import FormContact from '../FormContact/FormContact';
function News() {
    return (
        <div className="news">
            <div className="news-new">
                <h1 className="news-new-title">TIN TỨC</h1>
                <div className="news-new-block">
                    <img
                        src="https://florist1989.com/uploads/r/video-news/z2085353176361_9a99abce0024a3f8144835ca8e3b4715.jpg"
                        className="news-new-block-img"
                    />
                    <div className="news-new-block-title">
                        <h1 className="news-new-block-title-heading">
                            Kỹ thuật trồng rau sạch trong chậu xốp tại nhà đơn giản
                        </h1>
                        <span className="news-new-block-title-date">10/09/2023</span>
                        <span className="news-new-block-title-text">
                            Tự trồng rau trong thùng xốp tại nhà là sự lựa chọn của rất nhiều gia đình trong thành phố
                            bởi phương pháp trồng rau đơn giản, dễ trồng, dễ quản lý, an toàn và tiện lợi. Nhưng người
                            trồng cũng ...
                        </span>
                    </div>
                </div>
                <div className="news-new-block">
                    <img
                        src="https://florist1989.com/uploads/r/video-news/z2085353176361_9a99abce0024a3f8144835ca8e3b4715.jpg"
                        className="news-new-block-img"
                    />
                    <div className="news-new-block-title">
                        <h1 className="news-new-block-title-heading">
                            Kỹ thuật trồng rau sạch trong chậu xốp tại nhà đơn giản
                        </h1>
                        <span className="news-new-block-title-date">10/09/2023</span>
                        <span className="news-new-block-title-text">
                            Tự trồng rau trong thùng xốp tại nhà là sự lựa chọn của rất nhiều gia đình trong thành phố
                            bởi phương pháp trồng rau đơn giản, dễ trồng, dễ quản lý, an toàn và tiện lợi. Nhưng người
                            trồng cũng ...
                        </span>
                    </div>
                </div>
                <div className="news-new-block">
                    <img
                        src="https://florist1989.com/uploads/r/video-news/z2085353176361_9a99abce0024a3f8144835ca8e3b4715.jpg"
                        className="news-new-block-img"
                    />
                    <div className="news-new-block-title">
                        <h1 className="news-new-block-title-heading">
                            Kỹ thuật trồng rau sạch trong chậu xốp tại nhà đơn giản
                        </h1>
                        <span className="news-new-block-title-date">10/09/2023</span>
                        <span className="news-new-block-title-text">
                            Tự trồng rau trong thùng xốp tại nhà là sự lựa chọn của rất nhiều gia đình trong thành phố
                            bởi phương pháp trồng rau đơn giản, dễ trồng, dễ quản lý, an toàn và tiện lợi. Nhưng người
                            trồng cũng ...
                        </span>
                    </div>
                </div>
                <div className="news-new-block">
                    <img
                        src="https://florist1989.com/uploads/r/video-news/z2085353176361_9a99abce0024a3f8144835ca8e3b4715.jpg"
                        className="news-new-block-img"
                    />
                    <div className="news-new-block-title">
                        <h1 className="news-new-block-title-heading">
                            Kỹ thuật trồng rau sạch trong chậu xốp tại nhà đơn giản
                        </h1>
                        <span className="news-new-block-title-date">10/09/2023</span>
                        <span className="news-new-block-title-text">
                            Tự trồng rau trong thùng xốp tại nhà là sự lựa chọn của rất nhiều gia đình trong thành phố
                            bởi phương pháp trồng rau đơn giản, dễ trồng, dễ quản lý, an toàn và tiện lợi. Nhưng người
                            trồng cũng ...
                        </span>
                    </div>
                </div>
            </div>

            <div className="news-action">
                <div style={{ width: '88%', marginBottom: '32px' }}>
                    <FormContact />
                </div>
                <iframe
                    style={{ marginBottom: '32px' }}
                    width="360"
                    height="315"
                    src="https://www.youtube.com/embed/ozv4q2ov3Mk"
                    frameborder="0"
                    allowfullscreen
                ></iframe>

                <div className="news-action-intro">
                    <div className="news-action-intro-one">
                        <img
                            className="news-action-intro-one-img"
                            src="https://scontent.fhan7-1.fna.fbcdn.net/v/t39.30808-6/318035130_3247139292267860_6102865232136948041_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=m5dNkxmMkzEAX-pvCri&_nc_ht=scontent.fhan7-1.fna&oh=00_AfDz_ZNG9OGs0Cpxd4poGp2v015ac74NgCglJx6g7Czbxg&oe=64D759DF"
                        />
                        <div className="news-action-intro-one-link">
                            <a
                                href="https://www.facebook.com/ankylbenzen/"
                                target="_blank"
                                className="news-action-intro-one-link-a"
                            >
                                Topweb - Thiết kế Website
                            </a>
                            <p className="news-action-intro-one-link-p">1888 người theo dõi</p>
                        </div>
                    </div>
                    <div className="news-action-intro-two">
                        <button className="news-action-intro-two-follow">
                            <FontAwesomeIcon
                                className="news-action-intro-two-folow-icon"
                                icon={faFaceGrin}
                            ></FontAwesomeIcon>
                            Theo dõi trang
                        </button>
                        <button className="news-action-intro-two-share">
                            <FontAwesomeIcon className="news-action-intro-two-share-icon" icon={faShare} />
                            Chia sẻ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default News;
