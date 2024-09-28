import "./CareerOpportunities.css";
export default function CareerOpportunities() {
  return (
    <section class="career__opportunities container">
      <div class="career__opportunities--title">
        <h4>فرصت‌های شغلی</h4>
      </div>

      <div class="career__opportunities--slider">
        <div class="slider__card">
          <img src="/public/logo5.png" alt="logocard" />
          <h4>۱۲ فرصت شغلی</h4>
          <p>
            <a href="#">بلو بانک</a>
          </p>
        </div>

        <div class="slider__card">
          <img src="/public/logo6.png" alt="logocard" />
          <h4>۱۶ فرصت شغلی</h4>
          <p>
            <a href="#">اسنپ</a>
          </p>
        </div>

        <div class="slider__card">
          <img src="/public/logo7.png" alt="logocard" />
          <h4>۱۱ فرصت شغلی</h4>
          <p>
            <a href="#">گروه مالی</a>
          </p>
        </div>

        <div class="slider__card">
          <img src="/public/logo8.png" alt="logocard" />
          <h4>۱۶ فرصت شغلی</h4>
          <p>
            <a href="#">بیمه بازار</a>
          </p>
        </div>

        <div class="slider__card">
          <img src="/public/logo9.png" alt="logocard" />
          <h4>۱۸ فرصت شغلی</h4>
          <p>
            <a href="#">گروه علی بابا</a>
          </p>
        </div>
      </div>
    </section>
  );
}
