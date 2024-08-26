import { HiOutlineArrowLongRight } from "react-icons/hi2";
export interface ServiceDetails {
    id: string;
    images: string;
    name: string;
    dec1: string;
    dec2: string;
    list1: string;
    list2: string;
    list3: string;
    list4: string;
    coverImages: string;
  }
  
const TabContent = ({ tabContent }: {tabContent: ServiceDetails} ) => {
    return (
        <section className=" lg:flex gap-10 justify-between items-center">
            <div className=" flex-1">
                <img className="mx-auto w-full" src={tabContent.coverImages} alt="" />
            </div>
            <div className=" space-y-5 flex-1">
                <h2 className=" text-3xl font-bold mt-5">{tabContent.name}</h2>
                <p className=" text-justify">
                   {tabContent.dec1}
                </p>
                <p className=" text-justify">
                   {tabContent.dec2}
                </p>
                <div className=" md:flex gap-20 pt-5">
                    <div>
                        <p className=" font-semibold flex gap-2 items-center text-lg "><span className=" text-orange-500 text-xl"> <HiOutlineArrowLongRight /></span>{tabContent.list1}</p>
                        <p className=" font-semibold flex gap-2 items-center text-lg "><span className=" text-orange-500 text-xl"> <HiOutlineArrowLongRight /></span>{tabContent.list2}</p>
                    </div>
                    <div>
                        <p className=" font-semibold flex gap-2 items-center text-lg "><span className=" text-orange-500 text-xl"> <HiOutlineArrowLongRight /></span>{tabContent.list3}</p>
                        <p className=" font-semibold flex gap-2 items-center text-lg "><span className=" text-orange-500 text-xl"> <HiOutlineArrowLongRight /></span>{tabContent.list4}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TabContent;