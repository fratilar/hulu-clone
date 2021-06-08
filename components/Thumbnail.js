import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(
   ({ title, original_name, backdrop_path, poster_path, overview, vote_count, release_date, first_air_date }, ref) => {
      const Base_Url = "https://image.tmdb.org/t/p/original/";
      return (
         <div
            ref={ref}
            className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
         >
            <Image
               layout="responsive"
               src={`${Base_Url}${backdrop_path || poster_path}` || `${Base_Url}${poster_path}`}
               width={1920}
               height={1080}
            />
            <div className="p-2">
               <p className="truncate max-w-md">{overview}</p>
               <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-semibold">
                  {title || original_name}
               </h2>
               <p className="flex items-center opacity-0 group-hover:opacity-100">
                  {release_date || first_air_date}
                  <ThumbUpIcon className="h-5 mx-2" />
                  {vote_count}
               </p>
            </div>
         </div>
      );
   }
);

export default Thumbnail;
