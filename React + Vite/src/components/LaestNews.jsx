import "./LaestNews.css";
export default function LaestNews() {
  return (
    <section class="news__section">
      <div class="news__section--header container">
        <h4>تازه‌ترین اخبار</h4>
        <a href="#" class="news__section--view-all">
          مشاهده همه
        </a>
      </div>
      <div class="news__section--cards container">
        <div class="news-card">
          <img src="/public/news1.png" alt="خبر 1" />
          <div class="news__section--content">
            <div class="news__section--categories">تجارت الکترونیک</div>
            <div class="news__section--title">
              <h6>اسنپ رکورد خود را با بیش از ۵ میلیون سفر روزانه شکست</h6>
            </div>
            <div class="news__section--description">
              <p>
                در ماه پایانی سال ۱۴۰۲، اسنپ رکورد ۵ میلیون و ۱۳۹ هزار و ۶۵ سفر
                روزانه در سرویس خودرو و باکس را زد. این رکورد در روز چهارشنبه،
                دوم اسفند، ثبت شد.
              </p>

              <p>
                در ماه پایانی سال ۱۴۰۲، اسنپ رکورد ۵ میلیون و ۱۳۹ هزار و ۶۵ سفر
                روزانه در سرویس خودرو و باکس را زد. این رکورد.
              </p>
            </div>
            <div class="news__section--bottom">
              <div class="news__avatar">
                <img src="/public/avatar1.png" alt="" />
                <span>فرهاد رئوفی</span>
              </div>
              <div class="news__date">
                <span>1402/12/11</span>
              </div>
            </div>
          </div>
        </div>

        <div class="news-card">
          <img src="/public/news2.png" alt="خبر 2" />
          <div class="news__section--content">
            <div class="news__section--categories">تجارت الکترونیک</div>
            <div class="news__section--title">
              <h6>بار دیگر اسنپ فود به دلیل مشکل فنی از دسترس خارج شد</h6>
            </div>
            <div class="news__section--description">
              <p>
                بار دیگر اسنپ‌فود به‌دلیل مشکل فنی از دسترس کاربران خارج شد. این
                مشکل اوایل بهمن هم تکرار شده بود و رفع آن ساعت‌ها طول کشید.
              </p>
            </div>
            <div class="news__section--bottom">
              <div class="news__avatar">
                <img src="/public/avatar2.png" alt="" />
                <span>امیر بختیاری</span>
              </div>
              <div class="news__date">
                <span>1402/12/5</span>
              </div>
            </div>
          </div>
        </div>

        <div class="news-card">
          <img src="/public/news3.png" alt="خبر 3" />
          <div class="news__section--content">
            <div class="news__section--categories">تجارت الکترونیک</div>
            <div class="news__section--title">
              <h6>
                رکورد ثبت سفارش آنلاین خدمات گردشگری شکسته شد: ثبت 2 خدمت در هر
                ثانیه
              </h6>
            </div>
            <div class="news__section--description">
              <p>
                با نزدیکی به سال نو و افزایش سفرهای بین شهری، رکورد ثبت سفارش
                آنلاین خدمات گردشگری شکسته شد.
              </p>
            </div>
            <div class="news__section--bottom">
              <div class="news__avatar">
                <img src="/public/avatar3.png" alt="" />
                <span>آتوسا صفوی زاده</span>
              </div>
              <div class="news__date">
                <span>1402/12/3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
