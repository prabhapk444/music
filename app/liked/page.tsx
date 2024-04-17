import Image from "next/image";
import Footer from "@/Components/Footer";
import getLikedSongs from "@/actions/getLikedSongs";
import Header from "@/Components/Header";
import LikedContent from "./components/LikedContent";


export const revalidate = 0;

const Liked = async () => {
  const songs = await getLikedSongs();

  return (
    <div 
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header>
        <div className="mt-20">
          <div 
            className="
              flex 
              flex-col 
              md:flex-row 
              items-center 
              gap-x-5
            "
          >
            <div className="relative h-32 w-32 lg:h-44 lg:w-44">
              <Image
                className="object-cover"
                fill
                src="/images/newlikeimage.png"
                alt="Playlist"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
              <p className="hidden md:block font-semibold text-sm">
                Playlist
              </p>
              <h1 
                className="
                  text-white 
                  text-2xl 
                  sm:text-4xl 
                  lg:text-4xl 
                  font-bold
                "
              >
                Liked Songs
              </h1>
            </div>
          </div>
        </div>
      </Header>
      <LikedContent songs={songs} />
      <Footer/>
    </div>
  );
}

export default Liked;