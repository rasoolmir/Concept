import "./Banner.css";
export default function Banner() {
  return (
    <section className="banner container">
      <div className="banner__description">
        <h1>با سرعت کمتر، نتیجه بهتر بگیر</h1>
        <h5>با سرعت کمتر، نتیجه بهتر بگیر</h5>
        <p>کانیستو: اولین مرجع معتبر مصرف اینترنت و شرکت‌های ایرانی</p>
        <div className="banner__description--buttons">
          <a href="#">رایگان شروع کن</a>
          <a href="#">درباره کانیستو</a>
        </div>
      </div>
      <div className="banner__image">
        <img
          src="/public/Image1.png"
          alt="Main Image"
          className="banner__image--main"
        />
        <img
          src="/public/Image2.png"
          alt="Top Right Image"
          className="banner__image--top"
        />
        <img
          src="/public/Image3.png"
          alt="Bottom Left Image"
          className="banner__image--bottom"
        />
        <img
          src="/public/banner_mobile.png"
          alt="mobile Image"
          className="banner__image--mobile"
        />
      </div>
    </section>
  );
}
