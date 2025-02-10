import LinkForm from "@/components/LinkForm";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Home() {
  return (
    <BackgroundBeamsWithCollision className="bg-zinc-900 items-center flex flex-col h-full">
      <div className="flex flex-col gap-2">
        <h2 className="relative z-20 text-4xl min-[405px]:text-5xl sm:text-7xl font-bold text-center text-white font-sans tracking-tight max-w-4xl">
          Welcome to
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">RAG Link Analyzer</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="">RAG Link Analyzer</span>
            </div>
          </div>
        </h2>
        <div className="flex flex-col text-sm md:text-lg text-center text-gray-200/75">
          <TextAnimate
            animation="blurInUp"
            by="character"
            className="inline-block">
            Do you want to find more information about a website?
          </TextAnimate>
          <TextAnimate animation="blurInUp" by="character" className="mb-4">
            No problem! Enter a website URL to analyze it using
            Retrieval-Augmented Generation (RAG).
          </TextAnimate>
        </div>

        <LinkForm />
      </div>
    </BackgroundBeamsWithCollision>
  );
}
