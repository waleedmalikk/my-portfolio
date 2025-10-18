/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

import pic from "../assets/pic.jpg";

export default function Hero() {
  return (
    <section id="home" className="rounded-2xl p-8 shadow-sm bg-white">
      <div className="md:flex md:items-center md:justify-between">
        <div>
          <motion.h1
            className="text-3xl md:text-4xl font-bold"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            Waleed Malik
          </motion.h1>
          <p className="mt-2 text-slate-600">Full-Stack Developer</p>

          <div className="mt-4 space-y-2 text-sm">
            <div>
              (+92) 309-6049309 · waleedmalik2010@gmail.com ·
              <a
                href="https://linkedin.com/in/waleedmalikk"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                {" linkedin.com/in/waleedmalikk"}
              </a>
            </div>
            <div></div>
          </div>
        </div>

        <div className="mt-6 md:mt-0 flex-shrink-0">
          <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center text-sm text-slate-700">
            <img src={pic} alt="wm.jpg" />
          </div>
        </div>
      </div>

      <div className="mt-2 text-slate-700 leading-relaxed text-sm">
        <strong>Summary: </strong>
        Senior Full-Stack Developer specializing in Angular, JavaScript, NodeJs
        and NestJs. Experienced in enterprise software, CRM, and ERP systems.
      </div>
    </section>
  );
}
