import Image from "next/image";

import AppointmentForm from "@/components/forms/AppointmentForm";
import {getPatient} from "@/lib/actions/patient.actions";
import * as Sentry from "@sentry/nextjs";


const Appointment = async ({params: { userId }}: SearchParamProps)=> {
    const patient = await getPatient(userId);

    Sentry.metrics.set("user_view_new-appointment", patient.name);

    return(
        <div className="flex h-screen max-h-screen">

            <section className="remove-scrollbar container my-auto">
                <div className="sub-container max-w-[860px] flex-1 justify-between">
                    <Image
                        src="/assets/icons/logo-medihelp.png"
                        alt="Patient"
                        width={1000}
                        height={1000}
                        className="mb-12 h-10 w-fit"
                    />
                    <AppointmentForm
                        patientId={patient?.$id}
                        userId={userId}
                        type="create"
                    />

                        <p className="copyright mt-10 py-12">
                            © 2024 Medihelp Hospitals
                        </p>


                </div>
            </section>

            <Image src="/assets/images/appointment-img.png"
                   height={1000}
                   width={1000}
                   alt="patient"
                   className="side-img max-w-[390px] bg-botoom"
            />
        </div>
    )
}
export default Appointment;
