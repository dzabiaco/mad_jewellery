
export default function CallToAction(){
    return (
        <div
            className="relative flex flex-col items-center bg-gray-100
            bg-[url('/static/images/call-to-action.png')]
            bg-cover bg-center bg-no-repeat">
            <div className="flex flex-col items-center gap-4 w-full max-w-6xl mx-auto py-10 px-4 bg-opacity-80">

                <div className="animate-fadeInRight">
                    <h2 className="text-2xl font-bold text-center leading-tight text-gray-800 bg-white/70 p-4 rounded-md">
                        Place your kitchen order by November 15th.
                        <br/>
                        You get the stove, oven, and hood <span className="font-bold">for free</span>
                    </h2>
                </div>


                <div className="w-full flex justify-center animate-fadeInRight">
                    <button id="bitrix24-button-two"
                            className="bg-gray-700 text-yellow-500 py-3 px-8 text-xl font-semibold rounded-md transition duration-300 ease-in-out hover:bg-gray-800">
                        PLACE YOUR ORDER
                    </button>
                </div>

            </div>
        </div>
    );
}