import { useMutation } from "@tanstack/react-query"
import { MailService } from "../services/mailService"
import type { membershipProps } from "../types/membership"
import { toast } from "react-toastify"

export const useMemberShip = () => {
    const applicationMutation = useMutation({
        mutationFn: async(values:membershipProps) => {
            return await new MailService().sendMail(values)
        },
        onMutate() {
            toast.loading("Sending Application", {toastId:"apply"})
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
    const doSendMail = async (values:membershipProps) => {
        return await applicationMutation.mutateAsync(values)
    }

    return {
        applicationMutation,
        doSendMail
    }
}
