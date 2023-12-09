import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MohaiMinur',
  description: 'As a MERN stack enthusiast, I specialize in crafting seamless and responsive web applications. My journey into the world of programming began with a fascination for creating dynamic and user-friendly interfaces. Now, as a junior software developer, I thrive on turning innovative ideas into functional and elegant solutions. Currently, my focus extends to the mobile realm, where I m delving into the exciting universe of React Native. Working with this technology allows me to seamlessly bridge the gap between web and mobile development, ensuring a cohesive user experience across platforms. Beyond coding, I am committed to continuous learning and staying at the forefront of industry trends. Whether it s tackling complex challenges or collaborating with cross-functional teams, I am always eager to contribute my skills and creativity to deliver top-notch software solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
