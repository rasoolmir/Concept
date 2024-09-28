import React from "react";
import "./Footer.css"; // فایل CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="links-section">
          <div className="box">
            <h6>کانسپتو</h6>
            <ul>
              <li>درباره ما</li>
              <li>تماس با ما</li>
              <li>اطلاع‌ رسانی</li>
              <li>قوانین و مقررات</li>
            </ul>
          </div>
          <div className="box">
            <h6>خدمات مشتریان</h6>
            <ul>
              <li>حساب کاربری</li>
              <li>سوالات متداول</li>
              <li>پیگیری سفارش</li>
              <li>گزارش باگ</li>
            </ul>
          </div>
          <div className="box">
            <h6>پیشنهادهای کانسپتو</h6>
            <ul>
              <li>لیست استارتاپ های ایرانی</li>
              <li>آدرس های استارتاپی</li>
              <li>آگهی های استارتاپی</li>
              <li>مجمع نوآوری ها</li>
            </ul>
          </div>
        </div>
        <div className="box1">
          <h6>از جـدیدتریـن اخبار مطلع شـویـد :</h6>
          <h3>برای کسب اطلاعات بیشتر در خبرنامه ما عضو شوید</h3>

          <input type="email" placeholder="ایمیل خود را وارد کنید" />
          <button>عضویت</button>
          <div className="social-section">
            <div class="address">
              <h6>آدرس:</h6>
              <p>تهران، خیابان ولیعصر، خیابان سرو، ساختمان کانسپتو</p>
            </div>
            <div className="tel">
              <h6>شماره تماس: 09123456789</h6>
            </div>
            <div className="social-icons">
              <h6>ما را در شبکه های اجتماعی دنبال کنید:</h6>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        </div>
        <div class="footer__content--bottom">
          <img src="/public/logfooter.png" alt="" />
          <p>
            استارتاپ هایی که آینده را می دهند،از ایده های نوآورانه تا .پروژه های
            پیشرفته ، جهان استارتاپ ها رااز اینجا کشف کنید
          </p>
        </div>

        <div className="social-section-mobile">
          <div class="address">
            <h6>آدرس:</h6>
            <p>تهران، خیابان ولیعصر، خیابان سرو، ساختمان کانسپتو</p>
          </div>
          <div className="tel">
            <h6>شماره تماس: 09123456789</h6>
          </div>
          <div className="social-icons">
            <h6>ما را در شبکه های اجتماعی دنبال کنید:</h6>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
      <p className="footer-note">© ۱۴۰۲ - تمامی حقوق برای کانسپتو محفوظ است.</p>
    </footer>
  );
};

export default Footer;
