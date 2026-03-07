const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-12/12 xl:w-12/12">
            <div
              className="mb-12 rounded-lg bg-homa-50 px-8 py-11 shadow-three dark:bg-gray-900 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-homa-900 dark:text-homa-100 sm:text-3xl lg:text-2xl xl:text-3xl">
                Join the Homa Circle
              </h2>
              <p className="mb-12 text-base font-medium text-homa-800 dark:text-homa-200">
                Tell us how you want to earn, hold, grow, spend, cooperate, and govern better.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-homa-900 dark:text-homa-100"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-lg border border-homa-300 bg-white px-6 py-3 text-base text-homa-900 outline-none focus:border-homa-500 dark:border-homa-700 dark:bg-homa-900/20 dark:text-homa-100 dark:shadow-none dark:focus:border-homa-500"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-homa-900 dark:text-homa-100"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-homa-300 bg-white px-6 py-3 text-base text-homa-900 outline-none focus:border-homa-500 dark:border-homa-700 dark:bg-homa-900/20 dark:text-homa-100 dark:shadow-none dark:focus:border-homa-500"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-homa-900 dark:text-homa-100"
                      >
                        What are your finance priorities?
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Share your goals for earning, holding, growing, spending, cooperating, or governing"
                        className="w-full resize-none rounded-lg border border-homa-300 bg-white px-6 py-3 text-base text-homa-900 outline-none focus:border-homa-500 dark:border-homa-700 dark:bg-homa-900/20 dark:text-homa-100 dark:shadow-none dark:focus:border-homa-500"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-lg bg-gradient-to-r from-homa-700 to-clay-600 px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:from-homa-800 hover:to-clay-700 dark:shadow-none">
                      Request Early Access
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
