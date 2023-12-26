import Image from "next/image";
import { Inter } from "next/font/google";

import room from "@/assets/images/room.jpg";

import floor1 from "@/assets/images/floor1.png";
import floor2 from "@/assets/images/floor2.png";
import floor3 from "@/assets/images/floor3.png";

import wall4 from "@/assets/images/wall4.png";
import wall5 from "@/assets/images/wall5.png";
import wall6 from "@/assets/images/wall6.png";

import tile1 from "@/assets/images/tile1.jpg";
import tile2 from "@/assets/images/tile2.jpg";
import tile3 from "@/assets/images/tile3.jpg";
import tile4 from "@/assets/images/tile4.jpg";
import tile5 from "@/assets/images/tile5.jpg";
import tile6 from "@/assets/images/tile6.jpg";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [side, setSide] = useState("");
  const [floor, setFloor] = useState("");
  const [wall, setWall] = useState("");

  function chooseSide(choosen: string) {
    setSide(choosen);
  }
  function chooseFloor(choosen: string) {
    setFloor(choosen);
  }
  function chooseWall(choosen: string) {
    setWall(choosen);
  }

  return (
    <main
      className={`flex min-h-screen  items-center justify-between p-24 ${inter.className}`}
    >
      <div className="py-12 px-12 bg-black/20">
        <ul className="flex flex-col gap-4">
          {side === "floor" && (
            <>
              {" "}
              <li
                onClick={(e) => chooseFloor("tile1")}
                className="cursor-pointer"
              >
                <Image alt="tile1" className="w-20 h-20" src={tile1} />
              </li>
              <li
                onClick={(e) => chooseFloor("tile2")}
                className="cursor-pointer"
              >
                <Image alt="tile1" className="w-20 h-20" src={tile2} />
              </li>
              <li
                onClick={(e) => chooseFloor("tile3")}
                className="cursor-pointer"
              >
                <Image alt="tile1" className="w-20 h-20" src={tile3} />
              </li>
            </>
          )}
          {side === "wall" && (
            <>
              <li
                onClick={(e) => chooseWall("tile4")}
                className="cursor-pointer"
              >
                <Image alt="tile1" className="w-20 h-20" src={tile4} />
              </li>
              <li
                onClick={(e) => chooseWall("tile5")}
                className="cursor-pointer"
              >
                <Image alt="tile1" className="w-20 h-20" src={tile5} />
              </li>
              <li
                onClick={(e) => chooseWall("tile6")}
                className="cursor-pointer"
              >
                <Image alt="tile1" className="w-20 h-20" src={tile6} />
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="relative w-4/5 h-4/5 overflow-hidden">
        <Image alt="Room" src={room} className="w-full h-full" />
        <div
          onClick={(e) => chooseSide("wall")}
          className="0 w-[56%] h-[51.5%] absolute top-[23.5%] left-[22%] z-10 opacity-50 cursor-pointer"
        ></div>

        {wall === "tile4" && (
          <Image
            alt="wall 4"
            src={wall4}
            className="w-[100%] h-[100%] absolute top-0"
          />
        )}
        {wall === "tile5" && (
          <Image
            alt="wall 4"
            src={wall5}
            className="w-[100%] h-[100%] absolute top-0"
          />
        )}
        {wall === "tile6" && (
          <Image
            alt="wall 4"
            src={wall6}
            className="w-[100%] h-[100%] absolute top-0"
          />
        )}
        <div className="cursor-pointer" onClick={(e) => chooseSide("floor")}>
          <div className="  w-[64%] h-[24.5%] absolute bottom-[0] right-[4%] z-10 opacity-50 skew-x-[58deg]"></div>
          <div className=" w-[64%] h-[24.5%] absolute bottom-[0] left-[4%] z-10 opacity-50 -skew-x-[58deg]"></div>
        </div>

        {floor === "tile1" && (
          <Image
            alt="floor 1"
            src={floor1}
            className=" w-[100%] h-[100%] absolute bottom-0"
          />
        )}
        {floor === "tile2" && (
          <Image
            alt="floor 1"
            src={floor2}
            className=" w-[100%] h-[100%] absolute bottom-0"
          />
        )}
        {floor === "tile3" && (
          <Image
            alt="floor 1"
            src={floor3}
            className=" w-[100%] h-[100%] absolute bottom-0"
          />
        )}
      </div>
    </main>
  );
}
