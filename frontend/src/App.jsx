import axios from "axios";
import { motion } from "framer-motion";

import {
  Sparkles,
  Upload,
  ArrowRight,
  ImageIcon,
  Loader2,
  Hash,
  Smile
} from "lucide-react";

import { useState } from "react";

export default function App() {

  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);

  const [caption, setCaption] = useState("");

  const [hashtags, setHashtags] = useState("");

  const [mood, setMood] = useState("");



  async function generateCaption() {

    if (!image) {

      alert("Please upload image first");

      return;
    }

    try {

      setLoading(true);

      const formData = new FormData();

      formData.append("image", image);

      const response = await axios.post(

        "https://ai-caption-studio-9y8g.onrender.com/generate-caption",

        formData
      );

      console.log(response.data);


setCaption(
  response.data.result.caption
);

setMood(
  response.data.result.mood
);

setHashtags(
  response.data.result.hashtags
);

    } catch (err) {

      console.log(err);

      alert("AI generation failed");

    } finally {

      setLoading(false);
    }
  }



  function copyToClipboard(text) {

    navigator.clipboard.writeText(text);

    alert("Copied to clipboard ✨");
  }



  return (

    <div className="min-h-screen bg-[#0b0f19] text-white overflow-hidden">

      {/* Background */}

      <div className="fixed inset-0 -z-10">

        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,#1d4ed833,transparent_35%),radial-gradient(circle_at_bottom_right,#7c3aed22,transparent_35%)]"></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      </div>



      {/* Navbar */}

      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20">

            <Sparkles size={20} />

          </div>

          <div>

            <h1 className="font-bold text-xl tracking-wide">

              CaptionAI

            </h1>

            <p className="text-xs text-gray-400">

              AI caption generator

            </p>

          </div>
        </div>



        <div className="hidden md:flex items-center gap-6">

          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">

            AI Vision

          </div>

          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">

            Image → Caption

          </div>

          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">

            Gen-Z Captions

          </div>

        </div>

      </nav>



      {/* Hero */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-14 pb-16 sm:pb-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left */}

        <motion.div

          initial={{ opacity: 0, y: 30 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}

        >

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm mb-7">

            <Sparkles size={15} />

            Powered by AI Vision

          </div>



         <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight">

  Generate

  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">

    Viral Captions

  </span>

  <br />

  From Images.

</h1>



          <p className="text-gray-400 text-lg leading-relaxed mt-8 max-w-xl">

            Upload any image and instantly generate aesthetic captions,

            trending hashtags, and mood-based social content using AI.

          </p>



         <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 font-semibold flex items-center gap-2 hover:scale-[1.03] transition-all shadow-xl shadow-blue-500/20">

              Try Now

              <ArrowRight size={18} />

            </button>



            <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all">

              Watch Demo

            </button>

          </div>



          {/* Stats */}

         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 sm:mt-16">

            {

              [

                ["50K+", "Captions Generated"],

                ["99%", "Accuracy"],

                ["2 sec", "Generation Speed"],

              ].map((item, index) => (

                <div

                  key={index}

                  className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl"

                >

                  <h2 className="text-3xl font-bold">

                    {item[0]}

                  </h2>



                  <p className="text-sm text-gray-400 mt-2">

                    {item[1]}

                  </p>

                </div>

              ))
            }

          </div>

        </motion.div>



        {/* Right */}

        <motion.div

          initial={{ opacity: 0, scale: 0.95 }}

          animate={{ opacity: 1, scale: 1 }}

          transition={{ duration: 0.8 }}

          className="relative"

        >

          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 blur-3xl rounded-[3rem]"></div>



         <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-7 shadow-2xl">


            {/* Upload Area */}

            <div className="border-2 border-dashed border-white/10 rounded-[2rem] p-5 sm:p-10 text-center hover:border-blue-400/40 transition-all bg-[#111827]">


              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20">

                <Upload size={30} />

              </div>



              <h2 className="text-2xl font-bold">

                Upload Your Image

              </h2>



              <p className="text-gray-400 mt-3 mb-8">

                Drag and drop or select your file

              </p>



              <input

                type="file"

                onChange={(e) => setImage(e.target.files[0])}

                className="text-sm text-gray-300"

              />

            </div>



            {/* Preview */}

            {

              image ? (

                <motion.div

                  initial={{ opacity: 0, y: 20 }}

                  animate={{ opacity: 1, y: 0 }}

                  className="mt-7"

                >

                  <img

                    src={URL.createObjectURL(image)}

                    alt="preview"

                    className="w-full h-[220px] sm:h-[320px] object-cover rounded-[2rem]"

                  />

                </motion.div>

              ) : (

                <div className="mt-7 h-[220px] sm:h-[320px] rounded-[2rem] border border-white/10 bg-[#111827] flex flex-col items-center justify-center text-gray-500">

                  <ImageIcon size={50} />



                  <p className="mt-4 text-lg">

                    Image preview will appear here

                  </p>

                </div>

              )
            }



            {/* Generate Button */}

            <button

              onClick={generateCaption}

              className="w-full mt-7 py-5 rounded-2xl bg-white text-black font-semibold text-lg hover:scale-[1.01] transition-all flex items-center justify-center gap-3"

            >

              {

                loading ? (

                  <>

                    <Loader2 className="animate-spin" />

                    Generating...

                  </>

                ) : (

                  <>

                    Generate Caption

                    <Sparkles size={20} />

                  </>

                )
              }

            </button>

          </div>

        </motion.div>

      </section>



      {/* Result Section */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-3 gap-8">

          {

            [

              {

                title: "AI Caption",

                text: caption || "Your AI caption will appear here...",

                icon: <Sparkles size={28} />

              },

              {

                title: "Trending Hashtags",

                text: hashtags || "Hashtags will appear here...",

                icon: <Hash size={28} />

              },

              {

                title: "Detected Mood",

                text: mood || "Mood analysis will appear here...",

                icon: <Smile size={28} />

              },

            ].map((card, index) => (

              <motion.div

                key={index}

                initial={{ opacity: 0, y: 40 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ delay: index * 0.2 }}

                className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2rem] p-5 sm:p-8 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 mb-6 flex items-center justify-center">

                  {card.icon}

                </div>



                <h2 className="text-2xl font-bold mb-5">

                  {card.title}

                </h2>



               <p className="text-gray-400 leading-relaxed text-base sm:text-lg break-words">

                  {card.text}

                </p>



                <button

                  onClick={() => copyToClipboard(card.text)}

                  className="mt-6 px-4 py-2 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition-all text-sm"

                >

                  Copy

                </button>

              </motion.div>
            ))
          }

        </div>

      </section>

    </div>
  );
}