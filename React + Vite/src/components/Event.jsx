import "./Event.css";
export default function Event() {
  return (
    <section class="events container">
      <div class="events__title">
        <h4>رویدادهای اخیر</h4>
        <div class="events__title--line"></div>
        <span>مشاهده همه </span>
      </div>
      <div class="events__cards">
        <div class="events__card">
          <div class="events__card--image">
            <img src="/public/event1.png" alt="" />
          </div>
          <div class="events__card--content">
            <div class="events__card--title">
              <h5>بوت کمپ برنامه نویسی دیجی کالا</h5>
            </div>
            <div class="events__card--description">
              <p className="desktop">
                در این دوره شما بر اساس سرفصل‌های تعیین شده توسط اساتید منتخب
                دیجی‌کالا، بوژان و کوئرا آموزش می‌بینید و در نهایت امکان استخدام
                در دیجی‌کالا را خواهید داشت
              </p>

              <p className="mobile">
                ...در این دوره شما بر اساس سرفصل‌های تعیین شده توسط اد
              </p>
            </div>
            <div class="events__card--bottom">
              <span>تهران،ایران</span>
              <span>29 بهمن</span>
            </div>
          </div>
        </div>
        <div class="events__card">
          <div class="events__card--image">
            <img src="/public/event2.png" alt="" />
          </div>
          <div class="events__card--content">
            <div class="events__card--title">
              <h5>سکوی پرتاب غزال</h5>
            </div>
            <div class="events__card--description">
              <p className="desktop">
                سکوی پرتاب غزال، 27 دی ماه سال جاری با هدف شناسایی تیم‌ها و
                سرمایه‌گذاری بر استارتاپ‌های سازنده بازی های رایانه ای برگزار
                خواهد شد.
              </p>

              <p className="mobile">
                سکوی پرتاب غزال، 27 دی ماه سال جاری با هدف
              </p>
            </div>
          </div>
          <div class="events__card--bottom">
            <span>تهران،ایران</span>
            <span>27 دی</span>
          </div>
        </div>

        <div class="events__card">
          <div class="events__card--image">
            <img src="/public/event3.png" alt="" />
          </div>
          <div class="events__card--content">
            <div class="events__card--title">
              <h5>سکوی پرتاب قزوین</h5>
            </div>
            <div class="events__card--description">
              <p className="desktop">
                ویداد تخصصی سرمایه‌گذاری سکوی پرتاب قزوین با هدف شناسایی تیم‌ها
                و سرمایه‌گذاری بر استارتاپ‌های این استان ۲۴ آبان ماه سال جاری در
                پارک علم و فناوری قزوین برگزار می‌شود.
              </p>
              <p className="mobile">
                ویداد تخصصی سرمایه‌گذاری سکوی پرتاب قزوین با هدف
              </p>
            </div>
            <div class="events__card--bottom">
              <span>قزوین، ایران</span>
              <span>24 آبان</span>
            </div>
          </div>
        </div>
        <div class="events__card">
          <div class="events__card--image">
            <img src="/public/event4.png" alt="" />
          </div>
          <div class="events__card--content">
            <div class="events__card--title">
              <h5>فراخوان جذب ایده و استارتاپ</h5>
            </div>
            <div class="events__card--description">
              <p className="desktop">
                در حاشیه همایش معدن‌کاری دیجیتال 1401، خانه خلاق و نوآوری دنیای
                اقتصاد با همکاری مجموعه 100استارت‌آپ، برای ایده‌ها و
                استارتاپ‌های حوزه معدن جذب سرمایه می‌کند.
              </p>

              <p className="mobile">
                در حاشیه همایش معدن‌کاری دیجیتال 1401، خانه خلاق و نوآوری دنیای
              </p>
            </div>
            <div class="events__card--bottom">
              <span>تهران،ایران</span>
              <span>22 شهریور</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
