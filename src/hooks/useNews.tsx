import { useMutation } from "@tanstack/react-query"

import { toast } from "react-toastify"
import { NewsService } from "../services/newsService"

const useNews = () => {
    const detailNewsMutation = useMutation({
        mutationFn: async(id:string) => {
            return await new NewsService().getDetailedNews(id)
        },
        onMutate() {
            toast.loading("Getting news", {toastId:"apply"})
        },
        onSuccess() {
            toast.dismiss("apply")
 toast.success("Application Sent")
        },
        onError(error) {
                 toast.dismiss("apply")
            console.log(error)
toast.error("Application failed")
        }
    })
    const doDetailNews = async (id:string) => {
        return await detailNewsMutation.mutateAsync(id)
    }

    return {
        detailNewsMutation,
        doDetailNews
    }
}
export default useNews