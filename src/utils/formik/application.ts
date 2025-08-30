 import { useFormik } from 'formik';
import * as Yup from 'yup';
import type { membershipProps } from '../../types/membership';
function useValidation(doSendMail:(values:membershipProps)=> void) {
    const ApplicationFormik = useFormik({
    initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        YoG: 2025,
        currentOrg : ""
    },
    
    validationSchema: Yup.object().shape({
        firstName: Yup.string().required("Firstname is required"),
        lastName: Yup.string().required("Lastname is required"),
        email: Yup.string().email("Must be a valid email").required("Email is required"),
               phoneNo : Yup.string()
      .matches(/^[0-9]+$/, "Phone number must only contain digits")
      .min(7, "Phone number must be at least 7 digits")
      .max(15, "Phone number must be at most 15 digits")
            .required("Phone number is required"),
               
               YoG: Yup.number()
      .typeError("Year of Graduation must be a number")
      .min(1900, "Enter a valid year")
      .max(new Date().getFullYear(), "Enter a valid year")
      .required("Year of Graduation is required"),
    
      currentOrg: Yup.string()
      .max(50, "Organization name must be less than 50 characters")
      .nullable(),
  }),
    
    onSubmit: async(values) => {
       doSendMail(values)
    }
    }) 
    

    return {
        ApplicationFormik
    }
}
 
export default useValidation
