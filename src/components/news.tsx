import LectureImg from "../assets/lectureImg.jpg";
import { useQuery } from "@tanstack/react-query";
import { NewsService } from "../services/newsService";
import { useNavigate } from "react-router-dom";
export default function News() {
  const navigate = useNavigate()
  const { data, isSuccess, isLoading, isPending } = useQuery({
    queryKey: ["allnews"],
    queryFn: async () => await new NewsService().getNews(),
  });
  return (
    <section id="news" className="py-16 sm:px-6 px-3 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-2 text-center">Latest News</h2>
        <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
          Stay informed about the latest developments, achievements, and
          announcements.
        </p>

        {/* Loading Placeholder */}
        {(isLoading || isPending) && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden animate-pulse"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-4 w-4 bg-gray-200 rounded"></div>
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {isSuccess && data?.length === 0 && (
          <div className="text-center py-4 block mx-auto">
            <div className="text-6xl mb-4">📰</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No news articles Yet
            </h3>
          </div>
        )}

        {/* News Content */}
        {isSuccess && data && data.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.map((item: any, idx: number) => {
              return (
                <div
                  key={item?._id || idx}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden"
                  data-v0-t="card"
                >
                  <div className="h-48 relative">
                    <img
                      alt={item?.title || "News image"}
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover absolute inset-0 w-full h-full"
                      src={LectureImg}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-calendar h-4 w-4"
                      >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      <span>
                        {new Date(item?.eventdate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2"> {item?.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {item?.description}
                    </p>
                    <button onClick={() => navigate(`/news/${item?._id || idx}`, { state: { item } })} className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 underline-offset-4 hover:underline text-[#fe6400] p-0 h-auto">
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-chevron-right ml-1 h-4 w-4"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
