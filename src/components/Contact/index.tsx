

// import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-12/12 xl:w-12/12">
            <div
              className="mb-12 rounded-lg bg-amber-50 px-8 py-11 shadow-three dark:bg-gray-900 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-amber-900 dark:text-amber-100 sm:text-3xl lg:text-2xl xl:text-3xl">
                Join Our Homemaker Community
              </h2>
              <p className="mb-12 text-base font-medium text-amber-800 dark:text-amber-200">
                Be the first to know how we&rsquo;ll transform your household shopping experience
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-amber-900 dark:text-amber-100"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="border-amber-300 w-full rounded-lg border bg-amber-100 px-6 py-3 text-base text-amber-900 outline-none focus:border-amber-500 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-100 dark:shadow-none dark:focus:border-amber-500"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-amber-900 dark:text-amber-100"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="border-amber-300 w-full rounded-lg border bg-amber-100 px-6 py-3 text-base text-amber-900 outline-none focus:border-amber-500 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-100 dark:shadow-none dark:focus:border-amber-500"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-amber-900 dark:text-amber-100"
                      >
                        Your Household Needs
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Tell us about your shopping challenges"
                        className="border-amber-300 w-full resize-none rounded-lg border bg-amber-100 px-6 py-3 text-base text-amber-900 outline-none focus:border-amber-500 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-100 dark:shadow-none dark:focus:border-amber-500"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-9 py-4 text-base font-medium text-white shadow-amber-500/20 shadow-submit duration-300 hover:from-amber-600 hover:to-amber-700 hover:shadow-amber-600/30 dark:shadow-none">
                      Join Waitlist
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
