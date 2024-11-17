
import Image from "next/image";
import {Button} from "../components/ui/button";
import PatientForm from "@/components/PatientForm";
import Link from "next/link";
export default function Home() {
  return (
    //TODO: Add a OTP verification or passkey modal
    <div className="flex h-screen max-h-screen ">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[4796px]">
          <Image
          src="assets/icons/logo-full.svg" alt="patient"
          height={1000} width={1000}
          className="mb-12 h-12 w-fit  "/>
          <PatientForm/>
          <div className="text-14-regular mt-20 flex justify-between
           ">
           <p className="justify-items-end text-dark-600 xl:text-left">
             ©2024 CarePro</p>
             <Link href="/?admin=true" className="text-green-500">
             Admin
             </Link>
            </div>
        </div>
        </section>
        <Image
        src="/assets/images/onboarding-img.png" 
        alt="patient" height={1000} width={1000}
         className="side-img max-w-[50%]"
        />
     
    </div>
  );
}
