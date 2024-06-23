import { motion } from "framer-motion";
import { GeistSans } from "geist/font/sans";

export default function Vision() {
  return (
    <>
      <div className="mt-24 mx-1 md:w-2/3 md:mx-4 lg:mx-auto lg:w-[85rem]">
        <motion.h1
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="text-4xl lg:text-6xl text-center font-bold mb-12 lg:mb-24"
        >
          Our Vision
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Row 1 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex flex-col bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg p-8 border-2 border-white/15"
          >
            <h2 className="text-4xl font-bold mb-2">What's a hackathon?</h2>
            <p className="text-lg pt-3 text-white/90 flex-1">
              A coding marathon! Imagine a weekend where teenagers come together
              to code projects for fun—however goofy or janky—and share them
              with each other.
              <br />
              <br />
              You'll have a goal to work towards, side quests to tackle, and new
              friends to hang out with. You don't need coding experience—just an
              open mind.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex flex-col lg:col-span-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg border-white/15"
          >
            <iframe
              className="w-full h-full flex-1"
              src="https://www.youtube.com/embed/PnK4gzO6S3Q?si=88fr6GmLMUZ2LfqK"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex flex-col lg:col-span-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg border-2 border-white/15"
          >
            <img
              src="https://res.cloudinary.com/dacrrezls/image/upload/f_auto,q_auto/ux6lup3yxt5mv62j329t"
              className="h-full w-full"
              alt="Person soldering"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex flex-col bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg p-8 border-2 border-white/15"
          >
            <h2 className="text-4xl font-bold mb-2">Build what you love</h2>
            <p className="text-lg pt-3 text-white/90 flex-1">
              At hackJersey, we believe that the best innovations come from
              passion. We encourage you to let your creativity run wild and
              focus on projects that ignite your enthusiasm.
              <br />
              <br />
              Whether it's a groundbreaking app, an inspiring social initiative,
              or an artistic expression of code, this is your chance to work on
              something that truly excites you.
            </p>
          </motion.div>

          {/* Row 3 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex flex-col bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg p-8 border-2 border-white/15"
          >
            <h2 className="text-4xl font-bold mb-2">Share your knowledge</h2>
            <p className="text-lg pt-3 text-white/90 flex-1">
              Silly or serious, technical or not, hackJersey is a space to share
              what you know and learn from others.
              <br />
              <br />
              What's a skill you have? Run a workshop on it—and we'll pay for
              your supplies! And is there something you'd love to yap on? Do a
              lightning talk, like "why I hate caffeine (controversial)".
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex flex-col lg:col-span-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg border-2 border-white/15"
          >
            <img
              src="https://res.cloudinary.com/dacrrezls/image/upload/v1711770399/Hack_Club_Assemble_LTNJ_00622_Large_ysbchr.jpg"
              className="h-full w-full"
              alt="People coding"
            />
          </motion.div>

          {/* Row 4 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex flex-col lg:col-span-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg border-2 border-white/15"
          >
            <img
              src="https://res.cloudinary.com/dacrrezls/image/upload/f_auto,q_auto/tap6ajlfihfqwh95k9fw"
              className="h-full w-full"
              alt="People socializing or smth lol"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex flex-col bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg p-8 border-2 border-white/15"
          >
            <h2 className="text-4xl font-bold mb-2">Make new friends</h2>
            <p className="text-lg pt-3 text-white/90 flex-1">
              Hackathons aren't just time to code! At hackJersey, you'll meet
              fun teenagers who love making stuff as much as you do.
              <br />
              <br />
              From board games to karaoke nights, hackJersey is one long social
              and a chance to befriend people you adore.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
