
import Image from "next/image"
const CampaignItem=()=>{
return(
    <div>
        <div className="relative w-40 h-40 after:content-[''] after:absolute after:w-full after:h-full after:border-[5px] after:border-primary after:rounded-full" >
        <Image src="/images/f1.png" alt="" layout="fill"/>
           </div>
        </div>
        );
};


const Campaigns = () => {
  return (
    <div className="flex container mx-auto py-20 ">
        <CampaignItem/>
        <CampaignItem/>

    </div>
  )
}

export default Campaigns;