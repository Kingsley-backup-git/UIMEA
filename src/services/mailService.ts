import type { membershipProps } from "../types/membership"
import { authInstance } from "../utils/axios"

export class MailService {
    sendMail = async (values:membershipProps) => {
        try {
const res = await authInstance.post("/api/membership/apply", values)

        return res
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error : any) {
            throw Error(error?.error)
        }
        
    }
}