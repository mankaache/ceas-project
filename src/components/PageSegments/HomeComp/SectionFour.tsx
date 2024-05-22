import { EventCard } from "../Cards";

const SectionFour = () => {
  return (
    <div className={"w-[95%] mx-auto md:w-[90%] max-w-screen-2xl px-2 md:px-0"}>
      <h3 className={"text-center text-primary font-semibold text-3xl"}>
        Our Events
      </h3>
      <p
        className={
          "py-3 text-center mx-auto w-full md:w-[60%] text-base md:text-lg lg:text-xl mb-6"
        }
      >
        We organise events and hold field trips and also offer alot of
        internship opportunities
      </p>

      <div
        className={
          "event flex flex-wrap justify-center items-stretch mt-6 md:mt-8 gap-6 pb-6 [&>div:last]:text-red-500"
        }
      >
        {[
          {
            title: "Conferences",
            linkText: "See Conference",
            href: "/events/conference",
          },

          {
            title: "Field Trips",
            linkText: "See our Field trips",
            href: "/events/field-trips",
          },

          {
            title: "Defenses",
            linkText: "See our Defenses",
            href: "/events/defenses",
          },

          {
            title: "Internship opportunities",
            linkText: "See Internship offers",
            href: "/events/internship",
          },
        ].map((event) => (
          <EventCard
            title={event.title}
            linkText={event.linkText}
            href={event.href}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionFour;
