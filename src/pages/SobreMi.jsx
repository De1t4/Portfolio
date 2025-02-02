import React from 'react'
import { useTranslation } from 'react-i18next';

export default function SobreMi() {
  const { t } = useTranslation("about");
  const fotos = ['foto1.jpeg', 'foto2.jpeg', 'foto3.jpeg', 'foto4.jpeg']
  return (
		<main className={`p-4  min-h-screen   dark:bg-[#28263C]`}>
			<h1 className={`text-center mb-4 text-4xl font-semibold text-[#485caa] dark:border-zinc-500 dark:bg-[#28263C]`}>{t("title")}</h1>
			<section className={`my-4 max-md:w-full dark:bg-[#28263C] w-[50rem] m-auto `}>
				<div className={`flex items-center m-auto  gap-8 max-md:flex-col-reverse max-lg:w-auto max-md:my-10   dark:bg-[#28263C]`}>
					<div className={`w-[40rem] max-lg:w-2/4 max-md:w-auto   dark:bg-[#28263C]`}>
						<h1 className={`text-[#213547] text-3xl text-left my-4 font-semibold max-md:text-center  dark:bg-[#28263C] dark:text-zinc-100`}>{t("experience")}</h1>
						<p className={`text-[#213547] text-left max-md:text-left space-x-6 text-md font-[400] max-md:my-4  dark:bg-[#28263C] dark:text-zinc-100`}>
						{t("text3")}</p>
					</div>
					<img src={"desarrollador-front-end.jpg"} alt="" className={` rounded-md w-[25rem] h-[15rem]   dark:bg-[#28263C]`} />
				</div>
				{/* <div className={` animate-fade-in transition-all duration-300 flex items-center w-full m-auto py-8  border-y-2  max-md:flex-col max-lg:w-auto  gap-x-4 dark:bg-zinc-900`}>
					<img src={'image.jpg'} alt="" className={`w-[25rem] h-[15rem]   dark:bg-zinc-900`}/>
					<div className={`flex flex-col   dark:bg-zinc-900 dark:text-zinc-100`}>
						<h1 className={`text-[#213547] text-4xl text-left my-4 font-semibold max-md:text-center dark:text-zinc-100  dark:bg-zinc-900`}>{t("whoami")}</h1>
						<p className={`text-[#213547] space-x-6 text-md font-[400] max-md:my-4    dark:bg-zinc-900 dark:text-zinc-100`}>
							{t("text1")}
						</p>
					</div>
				</div>
				<div className={`w-full flex items-center m-auto my-20 gap-8 max-md:flex-col-reverse max-lg:w-auto   dark:bg-zinc-900`}>
					<div className={`w-[20rem] grid grid-rows-2 grid-flow-col gap-4 border-4 p-4 border-[#213547]   dark:bg-zinc-900`}>
						{fotos.map((foto, index)=>(
							<div key={index} className=' animate-fade-in transition-all duration-300'>
								<img src={foto} alt="" className='cursor-pointer hover:scale-110 transition-all duration-300' />
							</div>
						))
						}
					</div>
					<div className={`w-[40rem] max-lg:w-2/4 max-md:w-auto   dark:bg-zinc-900`}>
						<h1 className={`text-[#213547] text-4xl text-right my-4 font-semibold max-md:text-center  dark:bg-zinc-900 dark:text-zinc-100`}>{t("landscapes")}</h1>
						<p className={`text-[#213547] text-right max-md:text-left space-x-6 text-md font-[400] max-md:my-4  dark:bg-zinc-900 dark:text-zinc-100`}>
							{t("text2")}
						</p>
					</div>
				</div> */}
			</section>
		</main>
  )
}
