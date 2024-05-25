const OurPartners = () => {
  return (
    <div className="mt-20 md:mt-20">
      <h3 className="mb-4 text-center text-primary font-semibold text-3xl">
        Meet our partners
      </h3>
      <div className="bg-secondary/10 py-10 mt-5">
        <div className="w-[90%] md:w-[80=5%] max-w-screen-2xl mx-auto flex-wrap  flex items-center gap-6 justify-center">
          {["Partner 1", "Partner 2", "Partner 3", "Partner 4"].map(
            (partner, idx) => (
              <div
                key={idx}
                className="w-[150px] md:w-[200px] aspect-square flex justify-center items-center bg-accent/20 rounded-full"
              >
                {partner}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
