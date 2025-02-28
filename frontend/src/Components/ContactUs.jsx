import React from 'react'

const ContactUs = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      alert("Form submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message)
      setResult();
    }
  };
  return (
    <div>
      <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id='ContactUs'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>Us</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to make a move? Lets walk the future together</p>
      <form>
      <div className='flex flex-wrap'>
        <div className='w-full md:w-1/2 text-left'>
          Your name
          <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type='text' name='Name' placeholder='Your Name' required />
        </div>
        <div className='w-full md:w-1/2 text-left'>Your Email
          <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type='email' name='Email' placeholder='Your Email' required />
        </div>
      </div>
      <div className='my-6 text-left'>
          Message
          <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
            name='Message' placeholder='Message' required></textarea>
        </div>
        <button className='bg-blue-600 text-white py-2 px-12 mb-10'>{result ? result: "Send Message"}</button>
      </form>
      </div>
    </div>
  )
}

export default ContactUs

