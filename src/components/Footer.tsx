const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Fredrick Makori Omwando</h3>
            <p className="text-gray-400 text-sm mt-1">
              Software Engineer | Frontend Engineer | Full-Stack Developer
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/fredrickmakori"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="mailto:fredrick.makori@example.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Fredrick Makori Omwando. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;