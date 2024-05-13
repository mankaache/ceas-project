import {Activities, HeroSection, MissionVision, OurTeam, WhoWeAre} from "@/components";
import OurPartners from "@/components/PageSegments/About/OurPartners";

const About = () => {
    return (
        <div>
            <HeroSection/>
            <WhoWeAre/>
            <MissionVision/>
            <OurTeam/>
            <Activities/>
            <OurPartners/>
        </div>
    )
}

export default About