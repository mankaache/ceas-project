import Link from "next/link";
import { commonImages } from "@/assets";
import Image from "next/image";
import { BaseLayout } from "@/components";
import { Button } from "@/components/ui/button";
const Event = () => {
  const Events = [
    {
      id: "1",
      name: "Conferences",
      category: "conferences",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type" +
        " and scrambled it to make a type specimen book",
    },
    {
      id: "2",
      name: "Field trips",
      category: "field-trips",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type" +
        " and scrambled it to make a type specimen book",
    },
    {
      id: "3",
      name: "Defenses",
      category: "defenses",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type" +
        " and scrambled it to make a type specimen book",
    },
    {
      id: "4",
      name: "Internship opportunities",
      category: "internships",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type" +
        " and scrambled it to make a type specimen book",
    },
  ];
  return (
    <BaseLayout>
      <div>
        <h1 className={"font-bold text-3xl text-center pt-8 capitalize"}>
          Events
        </h1>
        <div
          className={
            "w-full max-w-screen-lg mx-auto flex flex-wrap flex-col md:flex-row gap-8 justify-center items-center py-8 px-3 md:px-8"
          }
        >
          {Events.map((item) => (
            <div
              className={"pt-0 pb-4 shadow-lg rounded-lg w-full md:w-[48%]"}
              key={item.id}
            >
              <div
                // href={`/events/${item.eventType}`}
                className="card w-full cursor-pointer hover:scale-100 transition-all bg-white flex flex-col items-start justify-between gap-2"
              >
                <div className="bg-black/20 w-full h-[250px] md:h-[300px] relative overflow-hidden rounded-lg mb-2">
                  <Image
                    src={commonImages.noImage}
                    fill
                    alt="image"
                    className={"w-full h-full object-cover"}
                  />
                </div>

                <div className="details px-2 flex flex-col items-start justify-center gap-2">
                  <h3 className="font-semibold text-2xl pt-1 pb-1 px-2">
                    {item.name}
                  </h3>

                  <p className={"px-2 "}>{item.desc}</p>

                  <Link
                    href={`events/${item.category}`}
                    className={"text-center text-lg text-secondary px-2 mt-2"}
                  >
                    <Button
                      color="secondary"
                      variant="outline"
                      className="border-secondary text-base mx-auto"
                    >
                      See all {item.name}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Event;
