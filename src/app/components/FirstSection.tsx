
export default function FirstSection(){
    return (
        <section className="w-full flex flex-col items-center py-12 bg-gray-100">
            {/* Title Section */}
            <div className="mb-8 text-center animate-fadeInRight">
                <h1 className="text-4xl md:text-6xl font-bold text-blue-700" style={{
                    color: '#555555',
                    fontFamily: '"Roboto", sans-serif',
                    fontSize: '40px',
                    fontWeight: 400,
                }}>
                    Can't choose a furniture <u className="no-underline text-yellow-300">manufacturer</u>?
                </h1>
            </div>

            {/* Steps */}
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Step 1 */}
                    <div className="border-2 border-yellow-300 flex items-start space-x-4 border-2 rounded-lg border p-4">
                        <div className="text-2xl font-bold text-yellow-300">1.</div>
                        <div>
                            <h2 className="text-lg font-semibold">Free Consultation</h2>
                            <p className="text-gray-700">
                                We will offer two design project options considering real colors and dimensions, as well as provide an accurate furniture cost estimate.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start space-x-4 border-2 rounded-lg border border-yellow-300 p-4 animate-fadeInRight">
                        <div className="text-2xl font-bold text-yellow-300">2.</div>
                        <div>
                            <h2 className="text-lg font-semibold">Design Project Development</h2>
                            <p className="text-gray-700">
                                We will carefully listen to your preferences, provide advice on materials and hardware, and help you choose the style and type of furniture that suits you best.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start space-x-4 border-2 rounded-lg border border-yellow-300 p-4 animate-fadeInRight">
                        <div className="text-2xl font-bold text-yellow-300">3.</div>
                        <div>
                            <h2 className="text-lg font-semibold">Contract Signing</h2>
                            <p className="text-gray-700">
                                If you are satisfied with our project, timeline, and cost, we will proceed with signing the contract.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex items-start space-x-4 border-2 rounded-lg border border-yellow-300 p-4 animate-fadeInRight">
                        <div className="text-2xl font-bold text-yellow-300">4.</div>
                        <div>
                            <h2 className="text-lg font-semibold">Payment</h2>
                            <p className="text-gray-700">
                                You can pay for the interest-free installment plan even after the furniture is installed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}