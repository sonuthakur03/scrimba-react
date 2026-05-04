import React from "react";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border px-16 py-4 flex-center justify-between sticky bottom-0 z-10">
      <p className="text-text/80">© 2026 QuizBizz. All rights reserved.</p>
      <div className="flex gap-6">
        <a
          href="#"
          className="text-text/80 hover:text-primary transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="text-text/80 hover:text-primary transition-colors"
        >
          Terms of Service
        </a>
        <a
          href="#"
          className="text-text/80 hover:text-primary transition-colors"
        >
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
