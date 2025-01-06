import RegisterForm from '@/components/forms/RegisterForm'
import { getUser, getPatient } from '@/lib/actions/patient.actions'
import Image from 'next/image'
import { redirect } from "next/navigation";


const Register = async({params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className="flex h-screen max-h-screen">
    <section className="remove-scrollbar container">
      <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
        <Image
          src="/assets/icons/logo-full.svg"
          height={1000}
          width={1000}
          alt="patient"
          className="mb-12 h-10 w-fit"
        />
        <RegisterForm  user={user}/>
        <div className="text-14-regular mt-20 flex justify-between">
          <p className="copywrite py-12">
            © 2024 CareConnect
          </p>
        </div>
      </div>
    </section>
    <Image
      src="/assets/images/register-img.png"
      height={1000}
      width={1000}
      alt="patient"
      className="side-img max-w-[390px]"
    />
  </div>
  )
}

export default Register