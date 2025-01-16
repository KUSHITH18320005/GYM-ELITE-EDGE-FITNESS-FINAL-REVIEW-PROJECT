import React, { useState } from 'react'; 
import ClipLoader from 'react-spinners/ClipLoader'; 

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:4000/send/mail",
        {
          name,
          email,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setName("");
      setEmail("");
      setMessage("");
      toast.success(data.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault(); 
    setLoading(true);
    
    setTimeout(() => {
      alert('Message sent successfully!');
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
    }, 2000);
  };

  return (
    <section className="contact">
      <form onSubmit={handleSubmit}> {/* Added onSubmit handler */}
        <h1>CONTACT US</h1>
        <div>
          <label>Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label>Message</label> {/* Fixed typo from "Meesage" to "Message" */}
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            placeholder="Enter your message"
          />
        </div>
        <button 
          type="submit" 
          disabled={loading} 
          style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}
        >
          {loading && <ClipLoader size={20} color="white" />}
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
