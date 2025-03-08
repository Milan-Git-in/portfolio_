import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Stack from "@/components/Stack";
export default function Home() {

  return (
 <div className="flex flex-col" suppressHydrationWarning>
  <Hero />
  <Education />
  <Stack  />

</div>
  )
}
