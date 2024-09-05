import AiAssistant from "./AiAssistant"
import ContactUsForm from "./ContactUs"
import FAQSection from "./FAQSection"
import FeaturesPage from "./FeaturesPage"
import HeroSection from "./Hero"
import ProfileCards from "./ProfileCard"


export const HomePage = () => {
  return (
    <div>
        <HeroSection/>
        <ProfileCards/>
        <FeaturesPage/>
        <FAQSection/>
        <ContactUsForm/>
        <AiAssistant/>
    </div>
  )
}
