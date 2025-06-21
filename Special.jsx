import React from 'react';

function Special() {
  

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-orange-600 text-center mb-10 font-roboto">Our Special</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Matar Paneer */}
        <div className="bg-orange-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 font-roboto">Matar Paneer</h2>
          </div>
          <img
            src="https://th.bing.com/th/id/OIP.2i6dC5sT__MUzQYOLCKanAHaFj?r=0&rs=1&pid=ImgDetMain"
            alt="Matar Paneer"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 mt-auto space-y-2">
            <button
              
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded w-full font-roboto"
            >
              Order Now!!
            </button>
          </div>
        </div>

        {/* Mo:Mo */}
        <div className="bg-orange-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 font-roboto">Mo:Mo</h2>
          </div>
          <img
            src="https://th.bing.com/th/id/OIP._tgM80_g7K1ymkC1gpvxZAHaE8?r=0&rs=1&pid=ImgDetMain"
            alt="Mo:Mo"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 mt-auto space-y-2">
            <button
              
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded w-full font-roboto"
            >
              Order Now!!
            </button>
          </div>
        </div>

        {/* Aloo Gobi */}
        <div className="bg-orange-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 font-roboto">Aloo Gobi</h2>
          </div>
          <img
            src="https://th.bing.com/th/id/R.f98eb2e0ef0c963f091e69812fcff347?rik=WjTDj1FnEAg46w&riu=http%3a%2f%2fwww.archanaskitchen.com%2fimages%2farchanaskitchen%2f0-Archanas-Kitchen-Recipes%2f2017%2f26-may%2fAloo_Gobi_Sabzi_Recipe-4.jpg&ehk=4DePZbxYExD%2fdUU0gXB0oSK2P%2bygBE5wDVwhDHtisrA%3d&risl=&pid=ImgRaw&r=0"
            alt="Aloo Gobi"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 mt-auto space-y-2">
            <button
              
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded w-full"
           font-roboto >
              Order Now!!
            </button>
          </div>
        </div>

        {/* Chicken Tikka */}
        <div className="bg-orange-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 font-roboto">Chicken Tikka</h2>
          </div>
          <img
            src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_900/http://glebekitchen.com/wp-content/uploads/2016/11/tandoorimarinadechickentikkaclosecrop-1.jpg"
            alt="Chicken Tikka"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 mt-auto space-y-2">
            <button
              
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded w-full"
           font-roboto >
              Order Now!!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Special;


