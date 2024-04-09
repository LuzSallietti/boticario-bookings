/**use this file to keep the fonts that will be used throughout your application */
import { Montserrat } from "next/font/google";
import localFont from 'next/font/local';


export const montserrat = Montserrat({weight:["400", "500", "700"], subsets: ["latin"] })

export const roca = localFont({src:'../../../public/fonts/Roca-Regular.ttf'})