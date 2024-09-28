import "./Inestructionts.css";
export default function Inestructionts() {
  return (
    <section className="inestructionts container">
      <div className="inestructionts__card inestructionts__card--right">
        <div className="inestructionts__card--image">
          <img src="/public/inestructionts1.png" alt="" />
        </div>
        <div className="inestructionts__card--text">
          <h5>شرکت‌های مورد علاقت رو پیدا کن</h5>
        </div>
      </div>

      <div className="inestructionts__card inestructionts__card--center">
        <div className="inestructionts__card--image">
          <img src="/public/inestructionts2.png" alt="" />
        </div>
        <div className="inestructionts__card--text">
          <h5>کسب و کارهای مناسب رو پیدا کن</h5>
        </div>
      </div>

      <div className="inestructionts__card inestructionts__card--left">
        <div className="inestructionts__card--image">
          <img src="/public/inestructionts1.png" alt="" />
        </div>
        <div className="inestructionts__card--text">
          <h5>با کسب و کارها ارتباط بگیر</h5>
        </div>
      </div>
    </section>
  );
}
