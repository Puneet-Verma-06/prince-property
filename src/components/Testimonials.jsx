import './Testimonials.css'
import ShinyText from './ShinyText'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amit Sharma",
      project: "Sailok, Dehradun–Saharanpur Highway",
      review: "Location ka future kaafi strong lag raha hai. Highway connectivity ek big plus hai."
    },
    {
      name: "Neha Verma",
      project: "Sailok, Dehradun–Saharanpur Highway",
      review: "Peaceful surroundings aur clear documentation ne decision easy bana diya."
    },
    {
      name: "Rohit Gupta",
      project: "Shiv Shakti Enclave, Noida Sector 79",
      review: "Sector 79 is growing fast. Investment ke point of view se kaafi promising project hai."
    },
    {
      name: "Pooja Singh",
      project: "Shiv Shakti Enclave, Noida Sector 79",
      review: "Noida location + reasonable pricing = perfect combination for long term."
    },
    {
      name: "Ankit Jain",
      project: "Manokamna Regent, Near Subharti University, Meerut",
      review: "University ke paas hone ki wajah se rental aur resale dono ka scope achha hai."
    },
    {
      name: "Suresh Kumar",
      project: "Manokamna Residency, Rajnagar Extension, Ghaziabad",
      review: "Rajnagar Extension already developed area hai. Project planning kaafi systematic lagi."
    },
    {
      name: "Vikas Malhotra",
      project: "Builders Floor, Sector 72",
      review: "Construction quality aur location dono satisfactory hai. Worth the price."
    },
    {
      name: "Rina Kapoor",
      project: "Builders Floor, Sector 73",
      review: "Sector 73 ka connectivity network kaafi strong hai. Living ke liye ideal location."
    }
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">
          <ShinyText text="Client Testimonials" speed={5} color="#2c3e50" shineColor="#3498db" />
        </h2>
        <p className="testimonials-subtitle">
          <ShinyText text="What Our Happy Clients Say" speed={5.5} color="#7f8c8d" shineColor="#ffffff" />
        </p>
        
        <div className="testimonials-loop-wrapper">
          <div className="testimonials-loop">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div 
                key={`first-${index}`} 
                className="testimonial-card-loop"
              >
                <div className="quote-icon">"</div>
                <p className="testimonial-review">{testimonial.review}</p>
                <div className="testimonial-footer">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-project">{testimonial.project}</p>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div 
                key={`second-${index}`} 
                className="testimonial-card-loop"
              >
                <div className="quote-icon">"</div>
                <p className="testimonial-review">{testimonial.review}</p>
                <div className="testimonial-footer">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-project">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
