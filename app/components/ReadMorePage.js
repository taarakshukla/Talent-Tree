import React from 'react';

const ReadMorePage = () => {
  return (
    <div className="container mx-auto p-4 ">
      <header className="text-center mb-8 flex items-center justify-center">
        <h1 className="text-4xl font-bold">About Talent Tree</h1>
        <img src="icons/logo.gif" width={90} alt="Talent Tree Logo" className="drop-shadow-md" />
      </header>
      <main>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Welcome to the Future of Crowdfunding</h2>
          <p>
            Talent Tree is the ultimate platform for creators to bring their dreams to life. Whether you're a developer, artist, or innovator, Talent Tree connects you with a network of supporters ready to fund your journey. Let your ideas thrive and grow with the power of community backing.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Why Choose Talent Tree?</h2>
          <ul className="list-disc list-inside">
            <li><strong>Simplified Experience:</strong> We’ve designed Talent Tree to be intuitive and easy-to-use, so you can focus on what truly matters—your project.</li>
            <li><strong>All Projects Welcome:</strong> From small ideas to large-scale ventures, Talent Tree is the platform for anyone looking to gather support for their vision.</li>
            <li><strong>A Community That Cares:</strong> Join a passionate network of creators and backers who genuinely care about your success and want to see your project flourish.</li>
            <li><strong>Trustworthy Payment Solutions:</strong> We partner with Razorpay to ensure secure, fast, and reliable transactions for both creators and supporters.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">How Talent Tree Works</h2>
          <ol className="list-decimal list-inside">
            <li><strong>Launch Your Project:</strong> Create an engaging project page to tell your story, set your goals, and showcase your mission.</li>
            <li><strong>Spread the Word:</strong> Use your network and social media to share your project, raising awareness and attracting potential backers.</li>
            <li><strong>Secure Your Funding:</strong> Collect contributions safely through Razorpay’s secure platform. Watch your project grow as donations come in.</li>
            <li><strong>Make It Happen:</strong> Once funded, withdraw your money and start working on your dream project. Keep your supporters in the loop with regular updates.</li>
          </ol>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Important: Razorpay Account Required</h2>
          <p>In order to receive funding through Talent Tree, you must have a Razorpay account. Razorpay is a secure and reliable payment gateway that ensures smooth transactions and safety for all users.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Why You Need Razorpay</h3>
          <ul className="list-disc list-inside">
            <li><strong>Top-Level Security:</strong> Razorpay offers industry-leading security features to protect your transactions and personal details.</li>
            <li><strong>Easy Integration:</strong> Seamlessly link your Razorpay account to Talent Tree for fast, hassle-free payments.</li>
            <li><strong>Live Analytics:</strong> Track your fundraising progress with real-time insights and metrics from Razorpay.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-2">Setting Up Your Razorpay Account</h3>
          <ol className="list-decimal list-inside">
            <li><strong>Sign Up:</strong> Go to <a href="https://razorpay.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Razorpay's website</a> and create an account.</li>
            <li><strong>Verify Your Account:</strong> Complete the verification process to ensure your account is secure and ready to receive payments.</li>
            <li><strong>Get API Keys:</strong> After setting up your account, retrieve your Razorpay Account ID and Secret Key from the API section.</li>
            <li><strong>Link to Talent Tree:</strong> Enter your Razorpay credentials on your Talent Tree Dashboard to start accepting payments.</li>
          </ol>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Kickstart Your Project Today</h2>
          <p>Don't let a lack of funding hold you back. Join Talent Tree and turn your ideas into reality. Start your journey today and connect with backers who believe in your vision.</p>
          <p>If you have any questions or need assistance, don’t hesitate to <a href="mailto:taarakshukla01.com" className="text-blue-600 underline">reach out to our support team</a>. We’re here to help every step of the way.</p>
        </section>
      </main>
      <footer className="text-center mt-8">
        <p><strong>Talent Tree</strong> – Fueling Creativity, One Vision at a Time.</p>
      </footer>
    </div>
  );
};

export default ReadMorePage;
