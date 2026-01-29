import './RefundPolicy.css';

const RefundPolicy = () => {
  return (
    <div className="refund-policy">
      <div className="refund-container">
        <h1 className="refund-title">Refund Policy</h1>
        
        <div className="refund-intro">
          <p>
            <strong>Haute Developers</strong> offers its customers / prospective customers a facility to make online payments for their units in their Projects by making payments of the booking amount/milestone payments through various online payment gateway authorised by us.
          </p>
        </div>

        <div className="refund-section">
          <h2>Refund Terms</h2>
          <p>
            At <strong>Delhi Meerut Expressway Awas Yojna</strong>, we are committed to maintaining transparency and trust with our applicants. In the event that an allotment is not made under the scheme, <strong>Rs. 21,000/-</strong> will be Refunded. Refunds will be processed within <strong>7 working days</strong> from the date of confirmation of non-allotment.
          </p>
          <p>
            Please note that the refund will be issued through the original mode of payment or another agreed method, and you will be notified once the transaction has been initiated.
          </p>
        </div>

        <div className="refund-section">
          <h2>Terms & Conditions</h2>
          <p>
            By accessing, visiting and browsing the online booking facility of Haute Developers, it is construed that the customer is accepting and consenting to all the terms and conditions stated in this policy. This policy will be reviewed by Haute Developers and may change, from time to time.
          </p>
        </div>

        <div className="refund-section disclaimer-section">
          <h2>Disclaimer</h2>
          <p>
            While every reasonable care and precaution has been taken in preparing this application form, the Company reserves the right to add/delete/change/modify any of the Terms & Conditions, specifications/facilities/amenities as may be required by the statutory bodies, govt. regulations etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
