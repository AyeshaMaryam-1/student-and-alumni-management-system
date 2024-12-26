import Link from "next/link";

export default function Faculty(){
    return(
      <div className="bg-[rgb(197,204,223)] w-auto">
        <div className="flex pt-[80px] pl-[150px] w-full h-[89vh] gap-[80px]">

            {/* Faculty 1 */}
            <div className="con1 tracking-in-expand-fwd-top w-[300px] h-[380px] text-[#352F44] bg-[#CBD7FA] rounded-[20px] p-[15px] border-[3px] border-[#212172]">
                <h2 className="text-center text-[30px]">CEET</h2><br />
                <ul className="pl-4">
                    <li><Link href="/faculty/CEET">Computer System Engineering</Link></li><br /><br />
                    <li><a href="javascript:void(0)">Electronic Engineering</a></li><br /><br />
                    <li><a href="javascript:void(0)">Telecommunication Engineering</a></li>
                </ul>
            </div>

            {/* Faculty 2 */}
            <div className="con2 tracking-in-expand-fwd-top w-[300px] h-[380px] text-[#352F44] bg-[#CBD7FA] rounded-[20px] p-[15px] border-[3px] border-[#212172]">
                <h2 className="text-center text-[30px]">PIMMEC</h2><br />
                <ul>
                    <li><a href="javascript:void(0)">Petroleum and Gas Engineering</a></li><br />
                    <li><a href="javascript:void(0)">Industrial Engineering and Management</a></li><br />
                    <li><a href="javascript:void(0)">Metallurgy and materials Engineering</a></li><br />
                    <li><a href="javascript:void(0)">Energy and Environment Engineering</a></li><br />
                    <li><a href="javascript:void(0)">Chemical Engineering</a></li>
                </ul>
            </div>

            {/* Faculty 3 */}
            <div className="con3 tracking-in-expand-fwd-top w-[300px] h-[380px] text-[#352F44] bg-[#CBD7FA] rounded-[20px] p-[15px] border-[3px] border-[#212172]">
                <h2 className="text-center text-[30px]">CARP</h2><br />
                <ul className="pl-10">
                    <li><a href="javascript:void(0)">Architecture and Planning</a></li><br /><br />
                </ul>
            </div>
        </div>
        <div className="flex -mt-8 pl-[350px] w-full h-[89vh] align-center gap-[80px]">

            {/* Faculty 4 */}
            <div className="con1 tracking-in-expand-fwd-top w-[300px] h-[380px] text-[#352F44] bg-[#CBD7FA] rounded-[20px] p-[15px] border-[3px] border-[#212172]">
                <h2 className="text-center text-[30px]">ICS</h2><br />
                <ul className="pl-10">
                    <li><a href="javascript:void(0)">BS Computer Science</a></li><br /><br />
                    <li><a href="javascript:void(0)">BS Artificial Intelligence</a></li><br /><br />
                    <li><a href="javascript:void(0)">BS Cyber Security</a></li><br /><br />
                    <li><a href="javascript:void(0)">BS Data Science</a></li>
                </ul>
            </div>

            {/* Faculty 5 */}
            <div className="con2 tracking-in-expand-fwd-top w-[300px] h-[380px] text-[#352F44] bg-[#CBD7FA] rounded-[20px] p-[15px] border-[3px] border-[#212172]">
                <h2 className="text-center text-[30px]">BAS</h2><br />
                <ul className="pl-10">
                    <li><a href="javascript:void(0)">BS Cemistry</a></li><br /><br />
                    <li><a href="javascript:void(0)">BS Mathematics</a></li>
                </ul>
            </div>
        </div>
      </div>
    )
}