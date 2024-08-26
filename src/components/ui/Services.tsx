import Hadding from "./Hadding";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import img1 from "../../img/download (5).png"
import img2 from "../../img/images (16).jfif"
import img3 from "../../img/download (21).jfif"
import img4 from "../../img/download (4).png"
import img5 from "../../img/download (22).jfif"
import coverImges1 from "../../img/Tabs-image-style-two-3-min.jpg"
import coverImges2 from "../../img/Tabs-image-style-two-1-min.jpg"
import coverImges3 from "../../img/Tabs-image-style-two-2-min.jpg"
import coverImges4 from "../../img/Tabs-image-style-two-4-min.jpg"
import coverImges5 from "../../img/Tabs-image-style-two-5-min.jpg"
import TabContent, { ServiceDetails } from "./TabContent";

const Services = () => {
    const tabItmes:ServiceDetails[] = [
        {
            id: "01",
            images: img1,
            name: "Auto Financing",
            dec1: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent tincidunt scelerisque habitasse ultricies facilisi. Adipiscing nulla. Sollicitudin turpis hymenaeos adipiscing",
            dec2: "Volutpat maecenas sagittis molestie vivamus pretium vulputate orci lorem cras, tempor commodo nibh euismod feugiat sociis eros sagittis montes venenatis augue integer.",
            list1: "Quick Set-up Facility",
            list2: "Pay After Approval",
            list3: "Experienced Team",
            list4: "Bigger Fleet Capacity",
            coverImages: coverImges1
        },
        {
            id: "02",
            images: img2,
            name: "Vehicle Trade-In",
            dec1: "Sociis sollicitudin taciti pharetra venenatis nascetur, per nisl ad dictumst sociis ante augue sagittis. Vestibulum. Potenti Sodales dis mattis elementum lorem class elementum a donec conubia magna pellentesque.",
            dec2: "Id Taciti tincidunt phasellus orci ullamcorper Magna ultrices nullam senectus suscipit convallis in interdum, massa pulvinar.",
            list1: "Experienced Team",
            list2: "Pay After Approval",
            list3: "Bigger Fleet Capacity",
            list4: "Quick Set-up Facility",
            coverImages: coverImges2
        },
        {
            id: "03",
            images: img3,
            name: "Parts Repairing",
            dec1: "Edipisicing elit sed do eiusmod tempor incididunt ut laboret dolore magna aliy Ut enim ad minim veniam, quis nostrud exercitation ullam laboris nisi ut aliquip comsecdo consequat duis aute irure dolorin reprehenderits.",
            dec2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            list1: "Bigger Fleet Capacity",
            list2: "Experienced Team",
            list3: "Quick Set-up Facility",
            list4: "Pay After Approval",
            coverImages: coverImges3
        },
        {
            id: "04",
            images: img4,
            name: "Car Inspection",
            dec1: "Edipisicing elit sed do eiusmod tempor incididunt ut laboret dolore magna aliy Ut enim ad minim veniam, quis nostrud exercitation ullam laboris nisi ut aliquip comsecdo consequat duis aute irure dolorin reprehenderits.",
            dec2: "Morbi aliquam montes, volutpat semper pretium penatibus vel varius scelerisque curabitur aptent tincidunt scelerisque habitasse ultricies facilisi. Adipiscing nulla. Sollicitudin turpis hymenaeos adipiscing",
            list1: "Experienced Team",
            list2: "Pay After Approval",
            list3: "Quick Set-up Facility",
            list4: "Bigger Fleet Capacity",
            coverImages:coverImges4
        },
        {
            id: "05",
            images: img5,
            name: "Auto Painting",
            dec1: "Sociis sollicitudin taciti pharetra venenatis nascetur, per nisl ad dictumst sociis ante augue sagittis. Vestibulum. Potenti Sodales dis mattis elementum lorem class elementum a donec conubia magna pellentesque.",
            dec2: "Id Taciti tincidunt phasellus orci ullamcorper Magna ultrices nullam senectus suscipit convallis in interdum, massa pulvinar.",
            list1: "Quick Set-up Facility",
            list2: "Bigger Fleet Capacity",
            list3: "Pay After Approval",
            list4: "Experienced Team",
            coverImages: coverImges5
        },
    ]


    return (
        <section className=" lg:space-y-5 bg-slate-50 px-5 py-10 lg:py-20">
            <Hadding
                mainHadding="Services We"
                subHadding="HELPS Helps You To Find Next Car Easily"
                colorTage="Offers"
            />
            <Tabs>
                <TabList className="grid md:grid-cols-2 lg:grid-cols-5 py-5 gap-2">
                    {
                        tabItmes.map(tab => <Tab key={tab.id} className=" shadow-lg p-4 border  bg-white hover:border-orange-500 hover:shadow-xl">
                            <div className=" flex  justify-center gap-2">
                                <p className=" text-2xl font-bold text-gray-400">{tab.id}</p>
                                <img className=" w-24 h-20" src={tab.images} alt="" />
                            </div>
                            <p className=" text-lg mt-3 text-center font-semibold text-orange-500">{tab.name}</p>
                        </Tab>)
                    }
                </TabList>
                {
                    (tabItmes as ServiceDetails[]).map(item => <TabPanel key={item.id} className="mt-10">
                        <TabContent tabContent={item}  />
                    </TabPanel>)
                }
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </section>
    );
};

export default Services;